export type BadgeId =
  | "first-streak"
  | "week-streak"
  | "xp-100"
  | "xp-1000"
  | "ten-cards"
  | "day-done"

export type Badge = {
  id: BadgeId
  label: string
  earned: boolean
}

export type BadgeSource = {
  bestStreak: number
  xp: number
  seen: number
  finishedDays: number
}

const catalog: { id: BadgeId; label: string; earned: (source: BadgeSource) => boolean }[] = [
  { id: "first-streak", label: "Première série", earned: (source) => source.bestStreak >= 1 },
  { id: "week-streak", label: "Sept jours", earned: (source) => source.bestStreak >= 7 },
  { id: "xp-100", label: "100 XP", earned: (source) => source.xp >= 100 },
  { id: "xp-1000", label: "1 000 XP", earned: (source) => source.xp >= 1000 },
  { id: "ten-cards", label: "Dix cartes", earned: (source) => source.seen >= 10 },
  { id: "day-done", label: "Journée bouclée", earned: (source) => source.finishedDays >= 1 },
]

export function earnedBadges(source: BadgeSource): Badge[] {
  for (const value of [source.bestStreak, source.xp, source.seen, source.finishedDays]) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error("A badge count must be a whole number")
    }
  }
  return catalog.map((badge) => ({
    id: badge.id,
    label: badge.label,
    earned: badge.earned(source),
  }))
}
