import { useEffect, useState } from "react"
import { cards } from "../../../shared/content/cards.ts"
import { lessons } from "../../../shared/content/lessons.ts"
import { readLessonIds } from "../../../shared/content/pack.ts"
import { getDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { catalogLessons, groupedLessons, type LessonGroup } from "../model/catalog.ts"

export function useLessons(): { groups: LessonGroup[] | null; error: string | null } {
  const [groups, setGroups] = useState<LessonGroup[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const database = getDatabase()
        await ensureProfile(database, Date.now())
        const saved = await database.lessons.toArray()
        const listed = catalogLessons(lessons, cards, readLessonIds(saved))
        if (!cancelled) {
          setGroups(groupedLessons(listed))
        }
      } catch {
        if (!cancelled) {
          setError("Les leçons n'ont pas pu être lues.")
        }
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  return { groups, error }
}
