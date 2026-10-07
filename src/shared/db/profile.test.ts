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
      schemaVersion: 2,
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

  it("keeps a single profile when the first launch is requested twice", async () => {
    const race = new SillonDatabase("sillon-profile-race")
    try {
      const [first, second] = await Promise.all([
        ensureProfile(race, 10),
        ensureProfile(race, 20),
      ])
      assert.equal(first.createdAt, second.createdAt)
      assert.equal(await race.profile.count(), 1)
    } finally {
      await race.delete()
    }
  })
})
