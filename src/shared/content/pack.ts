export function isActiveCard(card: { deprecated?: boolean }): boolean {
  return card.deprecated !== true
}

export function activeCards<T extends { deprecated?: boolean }>(cards: readonly T[]): T[] {
  return cards.filter(isActiveCard)
}
