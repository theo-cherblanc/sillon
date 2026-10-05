export type SeenCard = {
  cardId: string
  due: number
}

export function buildTodayQueue({
  cardIds,
  seen,
  dueBefore,
  dailyGoal,
  newPerDay,
}: {
  cardIds: readonly string[]
  seen: readonly SeenCard[]
  dueBefore: number
  dailyGoal: number
  newPerDay: number
}): string[] {
  if (dailyGoal <= 0) {
    return []
  }

  const knownIds = [...new Set(cardIds)]
  const known = new Set(knownIds)
  const seenById = new Map<string, SeenCard>()
  for (const entry of seen) {
    if (known.has(entry.cardId)) {
      seenById.set(entry.cardId, entry)
    }
  }

  const due = [...seenById.values()]
    .filter((entry) => entry.due < dueBefore)
    .sort((a, b) => a.due - b.due || a.cardId.localeCompare(b.cardId))
    .slice(0, dailyGoal)
    .map((entry) => entry.cardId)

  const roomForNew = Math.min(Math.max(newPerDay, 0), dailyGoal - due.length)
  const fresh = knownIds
    .filter((id) => !seenById.has(id))
    .sort((a, b) => a.localeCompare(b))
    .slice(0, roomForNew)

  return [...due, ...fresh]
}
