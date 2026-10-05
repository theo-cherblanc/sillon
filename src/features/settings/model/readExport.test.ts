import assert from "node:assert/strict"
import { after, describe, it } from "node:test"
import Dexie from "dexie"
import fakeIndexedDB, { IDBKeyRange } from "fake-indexeddb"
import { SillonDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { readExport } from "./export.ts"

Dexie.dependencies.indexedDB = fakeIndexedDB
Dexie.dependencies.IDBKeyRange = IDBKeyRange

const database = new SillonDatabase("sillon-export-test")

describe("readExport", () => {
  after(async () => {
    await database.delete()
  })

  it("reads the profile without its local id", async () => {
    await ensureProfile(database, 1_700_000_000_000)
    await database.progress.put({
      cardId: "js.async.001",
      due: 5,
      stability: 1,
      difficulty: 5,
      elapsed_days: 0,
      scheduled_days: 0,
      learning_steps: 0,
      reps: 1,
      lapses: 0,
      state: 1,
      lastReview: 1,
      lastRating: "good",
      updatedAt: 1,
    })

    const file = await readExport(database, 1_700_000_100_000)
    assert.equal("id" in file.profile, false)
    assert.equal(file.profile.dailyGoal, 10)
    assert.deepEqual(
      file.progress.map((row) => row.cardId),
      ["js.async.001"],
    )
  })
})
