import { useEffect, useState } from "react"
import { cards } from "../../../shared/content/cards.ts"
import { getDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import type { CardProgress } from "../../../shared/db/types.ts"
import { nextLocalMidnight } from "../../../shared/lib/dates.ts"
import { openDay } from "../model/openDay.ts"
import { buildTodayQueue } from "../model/queue.ts"
import { formatDelay } from "../model/schedule.ts"
import { nextDueAt, type TodaySummary } from "../model/today.ts"

export function useToday(): {
  summary: TodaySummary | null
  queue: readonly string[]
  progress: readonly CardProgress[]
  error: string | null
} {
  const [summary, setSummary] = useState<TodaySummary | null>(null)
  const [queue, setQueue] = useState<readonly string[]>([])
  const [progress, setProgress] = useState<readonly CardProgress[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const now = new Date()

    async function load() {
      try {
        const database = getDatabase()
        const profile = await ensureProfile(database, now.getTime())
        const saved = await database.progress.toArray()
        const seen = saved.map((row) => ({ cardId: row.cardId, due: row.due }))
        const dueBefore = nextLocalMidnight(now)
        const cardIds = buildTodayQueue({
          cardIds: cards.map((card) => card.id),
          seen,
          dueBefore,
          dailyGoal: profile.dailyGoal,
          newPerDay: profile.newPerDay,
        })
        const opened = await openDay(database, now, cardIds.length)
        const nextDue = nextDueAt(seen, dueBefore)
        if (cancelled) {
          return
        }
        setQueue(cardIds)
        setProgress(saved)
        setSummary({
          streak: opened.streak,
          xp: opened.xp,
          queueSize: cardIds.length,
          nextDueLabel:
            nextDue === null ? null : formatDelay((nextDue - now.getTime()) / 60_000),
        })
      } catch {
        if (!cancelled) {
          setError("La progression n'a pas pu être lue.")
        }
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  return { summary, queue, progress, error }
}
