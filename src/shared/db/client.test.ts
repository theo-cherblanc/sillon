import assert from "node:assert/strict"
import { after, describe, it } from "node:test"
import Dexie from "dexie"
import fakeIndexedDB, { IDBKeyRange } from "fake-indexeddb"
import { localProfileId, SillonDatabase } from "./client.ts"
import type { CardProgress, DayLog, Profile, ReviewLog } from "./types.ts"

Dexie.dependencies.indexedDB = fakeIndexedDB
Dexie.dependencies.IDBKeyRange = IDBKeyRange

const database = new SillonDatabase("sillon-test")

const profile: Profile = {
  schemaVersion: 2,
  xp: 0,
  streak: 0,
  bestStreak: 0,
  lastCompletedDate: null,
  dailyGoal: 10,
  newPerDay: 5,
  createdAt: 1,
}

const progress: CardProgress = {
  cardId: "js.closures.003",
  due: 1_700_000_000_000,
  stability: 4,
  difficulty: 5.2,
  elapsed_days: 3,
  scheduled_days: 4,
  learning_steps: 0,
  reps: 2,
  lapses: 0,
  state: 2,
  lastReview: 1_699_000_000_000,
  lastRating: "good",
  updatedAt: 1_700_000_000_000,
}

const review: ReviewLog = {
  id: "review-1",
  cardId: "js.closures.003",
  at: 1_700_000_000_000,
  rating: "good",
  mcqChoiceId: "b",
  mcqCorrect: true,
  scheduledDays: 4,
  xp: 20,
  fromQueue: true,
}

const day: DayLog = {
  date: "2026-10-05",
  queueSize: 10,
  completed: 10,
  xp: 20,
  goalMet: true,
}

describe("SillonDatabase", () => {
  after(async () => {
    await database.delete()
  })

  it("stores the profile, card progress, reviews, and days", async () => {
    await database.open()
    assert.equal(database.verno, 2)
    assert.deepEqual(
      database.tables.map((table) => table.name).sort(),
      ["days", "lessons", "profile", "progress", "reviews"],
    )

    await database.profile.put({ ...profile, id: localProfileId })
    await database.progress.put(progress)
    await database.reviews.put(review)
    await database.days.put(day)

    assert.deepEqual(await database.profile.get(localProfileId), {
      ...profile,
      id: localProfileId,
    })
    assert.deepEqual(await database.progress.get(progress.cardId), progress)
    assert.deepEqual(await database.reviews.get(review.id), review)
    assert.deepEqual(await database.days.get(day.date), day)
  })
})
