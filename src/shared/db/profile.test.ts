import assert from "node:assert/strict"
import { after, describe, it } from "node:test"
import Dexie from "dexie"
import fakeIndexedDB, { IDBKeyRange } from "fake-indexeddb"
import { localProfileId, SillonDatabase } from "./client.ts"
import { defaultDailyGoal, defaultNewPerDay, ensureProfile } from "./profile.ts"

Dexie.dependencies.indexedDB = fakeIndexedDB
Dexie.dependencies.IDBKeyRange = IDBKeyRange

const database = new SillonDatabase("sillon-profile-test")
const createdAt = 1_700_000_000_000

describe("ensureProfile", () => {
  after(async () => {
    await database.delete()
  })

  it("writes the default profile once and keeps later changes", async () => {
    assert.deepEqual(await ensureProfile(database, createdAt), {
      id: localProfileId,
      schemaVersion: 1,
      xp: 0,
      streak: 0,
      bestStreak: 0,
      lastCompletedDate: null,
      dailyGoal: defaultDailyGoal,
      newPerDay: defaultNewPerDay,
      createdAt,
    })

    await database.profile.update(localProfileId, {
      xp: 40,
      dailyGoal: 20,
      newPerDay: 1,
    })

    const profile = await ensureProfile(database, createdAt + 5_000)
    assert.equal(profile.xp, 40)
    assert.equal(profile.dailyGoal, 20)
    assert.equal(profile.newPerDay, 1)
    assert.equal(profile.createdAt, createdAt)
    assert.equal(await database.profile.count(), 1)
  })

  it("rejects a creation time that is not a real instant", async () => {
    await assert.rejects(() => ensureProfile(database, Number.NaN), /finite creation time/)
  })
})
