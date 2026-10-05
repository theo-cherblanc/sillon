import type { SeenCard } from "./queue.ts"

export type TodaySummary = {
  streak: number
  xp: number
  queueSize: number
  nextDueLabel: string | null
}

export function soonestDue(seen: readonly SeenCard[], limit: number): SeenCard[] {
  if (!Number.isInteger(limit) || limit < 1) {
    throw new Error("A summary needs at least one upcoming card")
  }

  return [...seen].sort((left, right) => left.due - right.due || left.cardId.localeCompare(right.cardId)).slice(0, limit)
}

export function nextDueAt(seen: readonly SeenCard[], dueBefore: number): number | null {
  let next: number | null = null
  for (const entry of seen) {
    if (entry.due < dueBefore) {
      continue
    }
    if (next === null || entry.due < next) {
      next = entry.due
    }
  }
  return next
}

export function todayStatus(summary: TodaySummary): string {
  if (summary.queueSize > 0) {
    return summary.queueSize === 1 ? "1 carte" : `${summary.queueSize} cartes`
  }
  if (summary.nextDueLabel) {
    return `Rien n'est dû. Prochaine carte : ${summary.nextDueLabel}.`
  }
  return "Rien n'est dû."
}
