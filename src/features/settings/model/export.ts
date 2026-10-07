import { localProfileId, type SillonDatabase } from "../../../shared/db/client.ts"
import type { CardProgress, DayLog, LessonProgress, Profile, ReviewLog } from "../../../shared/db/types.ts"

export type ProgressFile = {
  schemaVersion: Profile["schemaVersion"]
  exportedAt: number
  profile: Profile
  progress: CardProgress[]
  reviews: ReviewLog[]
  days: DayLog[]
  lessons: LessonProgress[]
}

export function exportProgress({
  profile,
  progress,
  reviews,
  days,
  lessons = [],
  exportedAt,
}: {
  profile: Profile
  progress: readonly CardProgress[]
  reviews: readonly ReviewLog[]
  days: readonly DayLog[]
  lessons?: readonly LessonProgress[]
  exportedAt: number
}): ProgressFile {
  if (!Number.isFinite(exportedAt)) {
    throw new Error("An export needs a finite time")
  }

  return {
    schemaVersion: profile.schemaVersion,
    exportedAt,
    profile,
    progress: [...progress].sort((left, right) => left.cardId.localeCompare(right.cardId)),
    reviews: [...reviews].sort((left, right) => left.at - right.at || left.id.localeCompare(right.id)),
    days: [...days].sort((left, right) => left.date.localeCompare(right.date)),
    lessons: [...lessons].sort((left, right) => left.lessonId.localeCompare(right.lessonId)),
  }
}

export async function readExport(database: SillonDatabase, exportedAt: number): Promise<ProgressFile> {
  const profile = await database.profile.get(localProfileId)
  if (!profile) {
    throw new Error("An export needs a profile")
  }

  const stored: Profile = {
    schemaVersion: profile.schemaVersion,
    xp: profile.xp,
    streak: profile.streak,
    bestStreak: profile.bestStreak,
    lastCompletedDate: profile.lastCompletedDate,
    dailyGoal: profile.dailyGoal,
    newPerDay: profile.newPerDay,
    createdAt: profile.createdAt,
  }
  return exportProgress({
    profile: stored,
    progress: await database.progress.toArray(),
    reviews: await database.reviews.toArray(),
    days: await database.days.toArray(),
    lessons: await database.lessons.toArray(),
    exportedAt,
  })
}
