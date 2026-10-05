import assert from "node:assert/strict"
import { after, describe, it } from "node:test"
import Dexie from "dexie"
import fakeIndexedDB, { IDBKeyRange } from "fake-indexeddb"
import { localProfileId, SillonDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import type { CardProgress, Profile } from "../../../shared/db/types.ts"
import { exportProgress } from "./export.ts"
import { parseProgressFile, replaceMemory } from "./import.ts"

Dexie.dependencies.indexedDB = fakeIndexedDB
Dexie.dependencies.IDBKeyRange = IDBKeyRange

const database = new SillonDatabase("sillon-import-test")

const profile: Profile = {
  schemaVersion: 1,
  xp: 7,
  streak: 1,
  bestStreak: 2,
  lastCompletedDate: "2026-10-04",
  dailyGoal: 4,
  newPerDay: 1,
  createdAt: 1_700_000_000_000,
}

const kept: CardProgress = {
  cardId: "missing.card",
  due: 20,
  stability: 1,
  difficulty: 5,
  elapsed_days: 0,
  scheduled_days: 0,
  learning_steps: 0,
  reps: 1,
  lapses: 0,
  state: 1,
  lastReview: 10,
  lastRating: "hard",
  updatedAt: 10,
}

function file() {
  return exportProgress({
    profile,
    progress: [kept],
    reviews: [],
    days: [{ date: "2026-10-04", queueSize: 1, completed: 1, xp: 7, goalMet: true }],
    exportedAt: 1_700_000_100_000,
  })
}

describe("parseProgressFile", () => {
  it("keeps an unknown card and drops nothing the export stored", () => {
    const parsed = parseProgressFile(JSON.parse(JSON.stringify(file())))
    assert.equal(parsed.schemaVersion, 1)
    assert.equal(parsed.profile.xp, 7)
    assert.deepEqual(
      parsed.progress.map((row) => row.cardId),
      ["missing.card"],
    )
  })

  it("rejects a file from another schema", () => {
    assert.throws(() => parseProgressFile({ ...file(), schemaVersion: 2 }), /schema version 1/)
  })

  it("rejects a repeated card", () => {
    const broken = file()
    broken.progress.push({ ...kept })
    assert.throws(() => parseProgressFile(broken), /repeated card/)
  })
})

describe("replaceMemory", () => {
  after(async () => {
    await database.delete()
  })

  it("replaces the profile, cards, reviews, and days", async () => {
    const existing = await ensureProfile(database, 1_700_000_000_000)
    await database.profile.put({ ...existing, xp: 40, streak: 3, bestStreak: 3, dailyGoal: 10 })
    await database.progress.put({ ...kept, cardId: "js.async.001" })
    await database.reviews.put({
      id: "old-review",
      cardId: "js.async.001",
      at: 1,
      rating: "good",
      mcqChoiceId: null,
      mcqCorrect: null,
      scheduledDays: 1,
      xp: 10,
      fromQueue: true,
    })
    await database.days.put({ date: "2026-10-05", queueSize: 10, completed: 10, xp: 40, goalMet: true })

    const saved = await replaceMemory(database, file())
    assert.equal(saved.id, localProfileId)
    assert.equal(saved.xp, 7)
    assert.equal(saved.dailyGoal, 4)
    assert.deepEqual(
      (await database.progress.toArray()).map((row) => row.cardId),
      ["missing.card"],
    )
    assert.equal(await database.reviews.count(), 0)
    assert.deepEqual(
      (await database.days.toArray()).map((day) => day.date),
      ["2026-10-04"],
    )
  })

  it("leaves the memory in place when the file is not an export", async () => {
    await assert.rejects(() => replaceMemory(database, { schemaVersion: 2 }), /schema version 1/)
    assert.deepEqual(
      (await database.progress.toArray()).map((row) => row.cardId),
      ["missing.card"],
    )
    assert.equal((await database.profile.get(localProfileId))?.xp, 7)
  })
})
