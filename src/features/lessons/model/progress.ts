import type { SillonDatabase } from "../../../shared/db/client.ts"
import type { LessonProgress } from "../../../shared/db/types.ts"

export async function markLessonRead(
  database: SillonDatabase,
  lessonId: string,
  at: number,
): Promise<LessonProgress> {
  if (!Number.isFinite(at)) {
    throw new Error("A lesson needs a finite time")
  }

  const existing = await database.lessons.get(lessonId)
  if (existing?.readAt !== null && existing?.readAt !== undefined) {
    return existing
  }

  const row: LessonProgress = { lessonId, readAt: at, updatedAt: at }
  await database.lessons.put(row)
  return row
}
