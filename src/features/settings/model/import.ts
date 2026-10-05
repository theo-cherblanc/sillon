import { localProfileId, type ProfileRow, type SillonDatabase } from "../../../shared/db/client.ts"
import type { CardProgress, CardState, DayLog, Profile, ReviewLog, StoredRating } from "../../../shared/db/types.ts"
import { dailyGoals } from "./goals.ts"
import { exportProgress, type ProgressFile } from "./export.ts"

const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/

export function parseProgressFile(value: unknown): ProgressFile {
  const file = record(value, "An import needs an export file")
  if (file.schemaVersion !== 1) {
    throw new Error("An import needs schema version 1")
  }

  const profile = profileFrom(file.profile)
  if (profile.schemaVersion !== file.schemaVersion) {
    throw new Error("An import needs schema version 1")
  }

  return exportProgress({
    profile,
    progress: progressFrom(file.progress),
    reviews: reviewsFrom(file.reviews),
    days: daysFrom(file.days),
    exportedAt: finite(file.exportedAt, "An import needs a finite time"),
  })
}

export async function replaceMemory(database: SillonDatabase, file: unknown): Promise<ProfileRow> {
  const parsed = parseProgressFile(file)
  const row: ProfileRow = { ...parsed.profile, id: localProfileId }

  return database.transaction("rw", database.profile, database.progress, database.reviews, database.days, async () => {
    await database.progress.clear()
    await database.reviews.clear()
    await database.days.clear()
    await database.profile.put(row)
    await database.progress.bulkPut(parsed.progress)
    await database.reviews.bulkPut(parsed.reviews)
    await database.days.bulkPut(parsed.days)
    return row
  })
}

function profileFrom(value: unknown): Profile {
  const profile = record(value, "An import needs a profile")
  const goals = dailyGoals(
    whole(profile.dailyGoal, "An import needs a daily goal"),
    whole(profile.newPerDay, "An import needs a new-card cap"),
  )
  const streak = whole(profile.streak, "An import needs a streak")
  const bestStreak = whole(profile.bestStreak, "An import needs a streak record")
  if (streak < 0 || bestStreak < 0) {
    throw new Error("An import needs a streak of zero or more")
  }
  if (bestStreak < streak) {
    throw new Error("An import cannot have a streak past its record")
  }

  const xp = whole(profile.xp, "An import needs an XP total")
  if (xp < 0) {
    throw new Error("An import needs an XP total of zero or more")
  }

  return {
    schemaVersion: 1,
    xp,
    streak,
    bestStreak,
    lastCompletedDate: dateOrNull(profile.lastCompletedDate, "An import needs a completion date"),
    dailyGoal: goals.dailyGoal,
    newPerDay: goals.newPerDay,
    createdAt: finite(profile.createdAt, "An import needs a finite creation time"),
  }
}

function progressFrom(value: unknown): CardProgress[] {
  const rows = list(value, "An import needs its cards").map((item) => {
    const row = record(item, "An import needs a card")
    const lastReview = row.lastReview === null ? null : finite(row.lastReview, "An import needs a review time")
    const lastRating = ratingOrNull(row.lastRating)
    if ((lastReview === null) !== (lastRating === null)) {
      throw new Error("An import needs a card's last review and rating together")
    }

    return {
      cardId: cardId(row.cardId),
      due: finite(row.due, "An import needs a due time"),
      stability: nonNegative(row.stability, "An import needs a stability"),
      difficulty: nonNegative(row.difficulty, "An import needs a difficulty"),
      elapsed_days: nonNegative(row.elapsed_days, "An import needs elapsed days"),
      scheduled_days: nonNegative(row.scheduled_days, "An import needs scheduled days"),
      learning_steps: count(row.learning_steps, "An import needs learning steps"),
      reps: count(row.reps, "An import needs a review count"),
      lapses: count(row.lapses, "An import needs a lapse count"),
      state: state(row.state),
      lastReview,
      lastRating,
      updatedAt: finite(row.updatedAt, "An import needs an update time"),
    }
  })
  unique(rows.map((row) => row.cardId), "An import has a repeated card")
  return rows
}

function reviewsFrom(value: unknown): ReviewLog[] {
  const rows = list(value, "An import needs its reviews").map((item) => {
    const row = record(item, "An import needs a review")
    const xp = whole(row.xp, "An import needs review XP")
    if (xp < 0) {
      throw new Error("An import needs review XP of zero or more")
    }

    return {
      id: text(row.id, "An import needs a review id"),
      cardId: cardId(row.cardId),
      at: finite(row.at, "An import needs a review time"),
      rating: rating(row.rating),
      mcqChoiceId: row.mcqChoiceId === null ? null : text(row.mcqChoiceId, "An import needs a choice"),
      mcqCorrect: row.mcqCorrect === null ? null : flag(row.mcqCorrect, "An import needs a choice result"),
      scheduledDays: nonNegative(row.scheduledDays, "An import needs scheduled days"),
      xp,
      fromQueue: flag(row.fromQueue, "An import needs a queue mark"),
    }
  })
  unique(rows.map((row) => row.id), "An import has a repeated review")
  return rows
}

function daysFrom(value: unknown): DayLog[] {
  const rows = list(value, "An import needs its days").map((item) => {
    const row = record(item, "An import needs a day")
    const queueSize = count(row.queueSize, "An import needs a queue size")
    const completed = count(row.completed, "An import needs a completed count")
    if (completed > queueSize) {
      throw new Error("An import cannot complete more cards than the queue")
    }
    const xp = whole(row.xp, "An import needs the day's XP")
    if (xp < 0) {
      throw new Error("An import needs the day's XP of zero or more")
    }

    return {
      date: calendarDate(row.date, "An import needs a day date"),
      queueSize,
      completed,
      xp,
      goalMet: flag(row.goalMet, "An import needs a finished day"),
    }
  })
  unique(rows.map((row) => row.date), "An import has a repeated day")
  return rows
}

function unique(values: readonly string[], message: string) {
  if (new Set(values).size !== values.length) {
    throw new Error(message)
  }
}

function record(value: unknown, message: string): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(message)
  }
  return value as Record<string, unknown>
}

function list(value: unknown, message: string): unknown[] {
  if (!Array.isArray(value)) {
    throw new Error(message)
  }
  return value
}

function finite(value: unknown, message: string): number {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(message)
  }
  return value
}

function whole(value: unknown, message: string): number {
  const number = finite(value, message)
  if (!Number.isInteger(number)) {
    throw new Error(message)
  }
  return number
}

function nonNegative(value: unknown, message: string): number {
  const number = finite(value, message)
  if (number < 0) {
    throw new Error(message)
  }
  return number
}

function count(value: unknown, message: string): number {
  const number = whole(value, message)
  if (number < 0) {
    throw new Error(message)
  }
  return number
}

function text(value: unknown, message: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(message)
  }
  return value
}

function cardId(value: unknown): string {
  return text(value, "An import needs a card id")
}

function flag(value: unknown, message: string): boolean {
  if (typeof value !== "boolean") {
    throw new Error(message)
  }
  return value
}

function state(value: unknown): CardState {
  if (value !== 0 && value !== 1 && value !== 2 && value !== 3) {
    throw new Error("An import needs a card state")
  }
  return value
}

function rating(value: unknown): StoredRating {
  if (value !== "again" && value !== "hard" && value !== "good") {
    throw new Error("An import needs a rating")
  }
  return value
}

function ratingOrNull(value: unknown): StoredRating | null {
  if (value === null) {
    return null
  }
  return rating(value)
}

function dateOrNull(value: unknown, message: string): string | null {
  if (value === null) {
    return null
  }
  return calendarDate(value, message)
}

function calendarDate(value: unknown, message: string): string {
  if (typeof value !== "string" || !datePattern.test(value)) {
    throw new Error(message)
  }
  const [year, month, day] = value.split("-").map(Number)
  const parsed = new Date(Date.UTC(year, month - 1, day))
  if (parsed.getUTCFullYear() !== year || parsed.getUTCMonth() !== month - 1 || parsed.getUTCDate() !== day) {
    throw new Error(message)
  }
  return value
}
