import type { CardState } from "../../../shared/db/types.ts"

export type LibraryMark = "new" | "learning" | "due" | "ready"

export function cardLabel(prompt: string): string {
  const line = prompt
    .split("\n")
    .map((part) => part.trim())
    .find((part) => part.length > 0)
  if (!line) {
    return "Carte"
  }
  const label = line.replaceAll("`", "")
  return label.length > 0 ? label : "Carte"
}

export function libraryMark(
  progress: { state: CardState; due: number } | null,
  dueBefore: number,
): LibraryMark {
  if (!Number.isFinite(dueBefore)) {
    throw new Error("A library needs a finite cutoff")
  }
  if (!progress || progress.state === 0) {
    return "new"
  }
  if (progress.state === 1 || progress.state === 3) {
    return "learning"
  }
  if (progress.state === 2) {
    return progress.due < dueBefore ? "due" : "ready"
  }
  throw new Error("A card state must be 0, 1, 2, or 3")
}

export function libraryTags(groups: readonly (readonly string[])[]): string[] {
  return [...new Set(groups.flat())].sort((left, right) => left.localeCompare(right, "fr"))
}

export function matchingTag<T extends { tags: readonly string[] }>(
  cards: readonly T[],
  tag: string | null,
): T[] {
  if (tag === null) {
    return [...cards]
  }
  return cards.filter((card) => card.tags.includes(tag))
}

export function matchingLibrary<T extends { tags: readonly string[]; mark: LibraryMark; label: string }>(
  cards: readonly T[],
  filter: { tag: string | null; mark: LibraryMark | null; query: string },
): T[] {
  const needle = foldQuery(filter.query)
  return cards.filter((card) => {
    if (filter.tag !== null && !card.tags.includes(filter.tag)) {
      return false
    }
    if (filter.mark !== null && card.mark !== filter.mark) {
      return false
    }
    if (needle.length > 0 && !foldQuery(card.label).includes(needle)) {
      return false
    }
    return true
  })
}

function foldQuery(value: string): string {
  return value.trim().toLocaleLowerCase("fr")
}
