import assert from "node:assert/strict"
import { after, describe, it } from "node:test"
import Dexie from "dexie"
import fakeIndexedDB, { IDBKeyRange } from "fake-indexeddb"
import { localProfileId, SillonDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { saveDailyGoals } from "./saveGoals.ts"

Dexie.dependencies.indexedDB = fakeIndexedDB
Dexie.dependencies.IDBKeyRange = IDBKeyRange

const database = new SillonDatabase("sillon-goals-test")

describe("saveDailyGoals", () => {
  after(async () => {
    await database.delete()
  })

  it("changes the goal and the new-card cap without touching the streak", async () => {
    const profile = await ensureProfile(database, 1_700_000_000_000)
    await database.profile.put({ ...profile, streak: 3, xp: 40 })

    const saved = await saveDailyGoals(database, 8, 2)
    assert.equal(saved.dailyGoal, 8)
    assert.equal(saved.newPerDay, 2)
    assert.equal(saved.streak, 3)
    assert.equal(saved.xp, 40)
    assert.equal((await database.profile.get(localProfileId))?.dailyGoal, 8)
  })

  it("rejects a goal that is not a whole number", async () => {
    await assert.rejects(() => saveDailyGoals(database, 8.5, 2), /daily goal/)
  })
})
