export function isActiveCard(card: { deprecated?: boolean }): boolean {
  return card.deprecated !== true
}

export function activeCards<T extends { deprecated?: boolean }>(cards: readonly T[]): T[] {
  return cards.filter(isActiveCard)
}

export function cardsForLesson<T extends { lessonId?: string }>(cards: readonly T[], lessonId: string): T[] {
  return cards.filter((card) => card.lessonId === lessonId)
}

export function eligibleCardIds(
  cards: readonly { id: string; lessonId?: string }[],
  readLessonIds: ReadonlySet<string>,
): string[] {
  return cards.filter((card) => !card.lessonId || readLessonIds.has(card.lessonId)).map((card) => card.id)
}

export function readLessonIds(rows: readonly { lessonId: string; readAt: number | null }[]): Set<string> {
  return new Set(rows.filter((row) => row.readAt !== null).map((row) => row.lessonId))
}
