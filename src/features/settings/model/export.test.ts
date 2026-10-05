import assert from "node:assert/strict"
import { describe, it } from "node:test"
import type { CardProgress, Profile } from "../../../shared/db/types.ts"
import { exportProgress } from "./export.ts"

const profile: Profile = {
  schemaVersion: 1,
  xp: 20,
  streak: 2,
  bestStreak: 4,
  lastCompletedDate: "2026-10-05",
  dailyGoal: 10,
  newPerDay: 5,
  createdAt: 1_700_000_000_000,
}

const later: CardProgress = {
  cardId: "js.types.001",
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
  lastRating: "good",
  updatedAt: 10,
}

const earlier: CardProgress = { ...later, cardId: "js.async.001", due: 5 }

describe("exportProgress", () => {
  it("keeps the memory and leaves the card text out", () => {
    const file = exportProgress({
      profile,
      progress: [later, earlier],
      reviews: [],
      days: [
        { date: "2026-10-05", queueSize: 2, completed: 2, xp: 20, goalMet: true },
        { date: "2026-10-04", queueSize: 0, completed: 0, xp: 0, goalMet: false },
      ],
      exportedAt: 1_700_000_100_000,
    })

    assert.equal(file.schemaVersion, 1)
    assert.equal(file.exportedAt, 1_700_000_100_000)
    assert.deepEqual(file.profile, profile)
    assert.deepEqual(
      file.progress.map((row) => row.cardId),
      ["js.async.001", "js.types.001"],
    )
    assert.deepEqual(
      file.days.map((day) => day.date),
      ["2026-10-04", "2026-10-05"],
    )
    assert.equal("cards" in file, false)
  })

  it("rejects an export without a finite time", () => {
    assert.throws(
      () => exportProgress({ profile, progress: [], reviews: [], days: [], exportedAt: Number.NaN }),
      /finite time/,
    )
  })
})
