import { useEffect, useState } from "react"
import { cards } from "../../../shared/content/cards.ts"
import { getDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { nextLocalMidnight } from "../../../shared/lib/dates.ts"
import { cardLabel, libraryMark, libraryTags, type LibraryMark } from "../model/catalog.ts"

export type LibraryCard = {
  id: string
  label: string
  tags: readonly string[]
  mark: LibraryMark
}

export function useLibrary(): {
  cards: LibraryCard[] | null
  tags: string[]
  error: string | null
} {
  const [cardsInPack, setCardsInPack] = useState<LibraryCard[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const database = getDatabase()
        await ensureProfile(database, Date.now())
        const saved = await database.progress.toArray()
        const byId = new Map(saved.map((row) => [row.cardId, row]))
        const dueBefore = nextLocalMidnight(new Date())
        const listed = cards
          .map((card) => {
            const progress = byId.get(card.id)
            return {
              id: card.id,
              label: cardLabel(card.prompt),
              tags: card.tags,
              mark: libraryMark(progress ? { state: progress.state, due: progress.due } : null, dueBefore),
            }
          })
          .sort((left, right) => left.label.localeCompare(right.label, "fr"))
        if (!cancelled) {
          setCardsInPack(listed)
        }
      } catch {
        if (!cancelled) {
          setError("Les cartes n'ont pas pu être lues.")
        }
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  return {
    cards: cardsInPack,
    tags: cardsInPack ? libraryTags(cardsInPack.map((card) => card.tags)) : [],
    error,
  }
}
