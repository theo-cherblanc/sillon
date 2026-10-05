import { localProfileId, type ProfileRow, type SillonDatabase } from "../../../shared/db/client.ts"
import type { DayLog } from "../../../shared/db/types.ts"
import { localDate } from "../../../shared/lib/dates.ts"
import { settleStreak, type StreakState } from "../../progress/index.ts"

export async function openDay(
  database: SillonDatabase,
  now: Date,
  queueSize: number,
): Promise<ProfileRow> {
  if (Number.isNaN(now.getTime())) {
    throw new Error("A day needs a valid date")
  }
  if (!Number.isInteger(queueSize) || queueSize < 0) {
    throw new Error("A day needs a queue size of zero or more")
  }

  const today = localDate(now)

  return database.transaction("rw", database.profile, database.days, database.reviews, async () => {
    const profile = await database.profile.get(localProfileId)
    if (!profile) {
      throw new Error("A day needs a profile")
    }

    const logs = await database.days.toArray()
    let state: StreakState = {
      streak: profile.streak,
      bestStreak: profile.bestStreak,
      lastCompletedDate: profile.lastCompletedDate,
    }
    const past = logs
      .filter(
        (log) => log.date < today && (state.lastCompletedDate === null || log.date > state.lastCompletedDate),
      )
      .sort((left, right) => left.date.localeCompare(right.date))

    for (const log of past) {
      state = settleStreak(state, {
        date: log.date,
        queueSize: log.queueSize,
        completed: log.completed,
        closed: true,
      })
    }

    if (state.lastCompletedDate !== today) {
      const existing = logs.find((log) => log.date === today)
      if (!existing?.goalMet) {
        const reviews = await database.reviews.toArray()
        const xp = reviews
          .filter((review) => review.fromQueue && localDate(new Date(review.at)) === today)
          .reduce((total, review) => total + review.xp, 0)
        const completed = existing?.completed ?? 0
        const day: DayLog = {
          date: today,
          queueSize: completed > queueSize ? existing?.queueSize ?? queueSize : queueSize,
          completed,
          xp,
          goalMet: false,
        }
        await database.days.put(day)
      }
    }

    const next: ProfileRow = {
      ...profile,
      streak: state.streak,
      bestStreak: state.bestStreak,
      lastCompletedDate: state.lastCompletedDate,
    }
    if (
      next.streak !== profile.streak ||
      next.bestStreak !== profile.bestStreak ||
      next.lastCompletedDate !== profile.lastCompletedDate
    ) {
      await database.profile.put(next)
    }
    return next
  })
}
