import { useEffect, useState } from "react"
import { cards } from "../../../shared/content/cards.ts"
import { getDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { nextLocalMidnight } from "../../../shared/lib/dates.ts"
import { buildTodayQueue } from "../model/queue.ts"
import { formatDelay } from "../model/schedule.ts"
import { nextDueAt, type TodaySummary } from "../model/today.ts"

export function useToday(): { summary: TodaySummary | null; error: string | null } {
  const [summary, setSummary] = useState<TodaySummary | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const now = new Date()

    async function load() {
      try {
        const database = getDatabase()
        const profile = await ensureProfile(database, now.getTime())
        const progress = await database.progress.toArray()
        const seen = progress.map((row) => ({ cardId: row.cardId, due: row.due }))
        const dueBefore = nextLocalMidnight(now)
        const queue = buildTodayQueue({
          cardIds: cards.map((card) => card.id),
          seen,
          dueBefore,
          dailyGoal: profile.dailyGoal,
          newPerDay: profile.newPerDay,
        })
        const nextDue = nextDueAt(seen, dueBefore)
        if (cancelled) {
          return
        }
        setSummary({
          streak: profile.streak,
          xp: profile.xp,
          queueSize: queue.length,
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

  return { summary, error }
}
