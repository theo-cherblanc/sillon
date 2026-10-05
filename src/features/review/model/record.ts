import type { Card } from "../../../shared/content/types.ts"
import { localProfileId, type SillonDatabase } from "../../../shared/db/client.ts"
import type { CardProgress, ReviewLog } from "../../../shared/db/types.ts"
import { localDate } from "../../../shared/lib/dates.ts"
import { reviewXp, settleStreak } from "../../progress/index.ts"
import { toRating, type GradeChoice } from "./grade.ts"
import { scheduleReview } from "./schedule.ts"

export async function recordGrade(
  database: SillonDatabase,
  {
    card,
    progress,
    choice,
    mcqChoiceId,
    mcqCorrect,
    now,
    reviewId = crypto.randomUUID(),
    finishesQueue = false,
    queueSize,
  }: {
    card: Card
    progress: CardProgress | null
    choice: GradeChoice
    mcqChoiceId: string | null
    mcqCorrect: boolean | null
    now: Date
    reviewId?: string
    finishesQueue?: boolean
    queueSize?: number
  },
): Promise<CardProgress> {
  const rating = toRating(card.type, mcqCorrect, choice)
  const next = scheduleReview(progress, card.id, rating, now)
  const xp = reviewXp(choice, card.difficulty, true)
  let finishedSize: number | null = null
  if (finishesQueue) {
    if (queueSize === undefined || !Number.isInteger(queueSize) || queueSize < 1) {
      throw new Error("A finished queue needs at least one card")
    }
    finishedSize = queueSize
  }

  await database.transaction(
    "rw",
    database.profile,
    database.progress,
    database.reviews,
    database.days,
    async () => {
      const profile = await database.profile.get(localProfileId)
      if (!profile) {
        throw new Error("A review needs a profile")
      }

      const log: ReviewLog = {
        id: reviewId,
        cardId: card.id,
        at: now.getTime(),
        rating,
        mcqChoiceId,
        mcqCorrect,
        scheduledDays: next.scheduled_days,
        xp,
        fromQueue: true,
      }
      await database.progress.put(next)
      await database.reviews.put(log)

      let { streak, bestStreak, lastCompletedDate } = profile
      if (finishedSize !== null && lastCompletedDate !== localDate(now)) {
        const date = localDate(now)
        const settled = settleStreak(
          { streak, bestStreak, lastCompletedDate },
          { date, queueSize: finishedSize, completed: finishedSize, closed: false },
        )
        const saved = await database.reviews.toArray()
        const dayXp = saved
          .filter((review) => review.fromQueue && localDate(new Date(review.at)) === date)
          .reduce((total, review) => total + review.xp, 0)
        await database.days.put({
          date,
          queueSize: finishedSize,
          completed: finishedSize,
          xp: dayXp,
          goalMet: true,
        })
        streak = settled.streak
        bestStreak = settled.bestStreak
        lastCompletedDate = settled.lastCompletedDate
      }

      await database.profile.put({
        ...profile,
        xp: profile.xp + xp,
        streak,
        bestStreak,
        lastCompletedDate,
      })
    },
  )

  return next
}
