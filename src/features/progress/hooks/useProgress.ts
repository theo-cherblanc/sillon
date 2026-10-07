import { useEffect, useState } from "react"
import { cards } from "../../../shared/content/cards.ts"
import { eligibleCardIds, readLessonIds } from "../../../shared/content/pack.ts"
import { getDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { countCards, type CardCounts } from "../model/counts.ts"

export type ProgressSummary = CardCounts & {
  streak: number
  bestStreak: number
  xp: number
  finishedDays: number
}

export function useProgress(): { summary: ProgressSummary | null; error: string | null } {
  const [summary, setSummary] = useState<ProgressSummary | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const database = getDatabase()
        const profile = await ensureProfile(database, Date.now())
        const saved = await database.progress.toArray()
        const days = await database.days.toArray()
        const eligible = eligibleCardIds(cards, readLessonIds(await database.lessons.toArray()))
        const counts = countCards(
          eligible,
          saved.map((row) => ({ cardId: row.cardId, state: row.state })),
        )
        if (cancelled) {
          return
        }
        setSummary({
          streak: profile.streak,
          bestStreak: profile.bestStreak,
          xp: profile.xp,
          finishedDays: days.filter((day) => day.goalMet).length,
          ...counts,
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
