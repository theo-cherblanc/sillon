import type { CardState } from "../../../shared/db/types.ts"

export type CardCounts = {
  fresh: number
  learning: number
  review: number
}

export function countCards(
  cardIds: readonly string[],
  seen: readonly { cardId: string; state: CardState }[],
): CardCounts {
  const known = [...new Set(cardIds)]
  const knownIds = new Set(known)
  const stateById = new Map<string, CardState>()
  for (const row of seen) {
    if (!knownIds.has(row.cardId)) {
      continue
    }
    if (row.state !== 0 && row.state !== 1 && row.state !== 2 && row.state !== 3) {
      throw new Error("A card state must be 0, 1, 2, or 3")
    }
    stateById.set(row.cardId, row.state)
  }

  const counts: CardCounts = { fresh: 0, learning: 0, review: 0 }
  for (const cardId of known) {
    const state = stateById.get(cardId)
    if (state === undefined || state === 0) {
      counts.fresh += 1
    } else if (state === 1 || state === 3) {
      counts.learning += 1
    } else {
      counts.review += 1
    }
  }
  return counts
}
