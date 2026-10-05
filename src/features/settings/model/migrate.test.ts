import assert from "node:assert/strict"
import { after, describe, it } from "node:test"
import Dexie from "dexie"
import fakeIndexedDB, { IDBKeyRange } from "fake-indexeddb"
import { localProfileId, SillonDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import type { Profile } from "../../../shared/db/types.ts"
import { migrate, openMemory } from "./migrate.ts"

Dexie.dependencies.indexedDB = fakeIndexedDB
Dexie.dependencies.IDBKeyRange = IDBKeyRange

const database = new SillonDatabase("sillon-migrate-test")

const profile: Profile = {
  schemaVersion: 1,
  xp: 310,
  streak: 1,
  bestStreak: 1,
  lastCompletedDate: "2026-10-05",
  dailyGoal: 10,
  newPerDay: 5,
  createdAt: 1_791_192_709_424,
}

describe("migrate", () => {
  it("leaves a version 1 profile untouched", () => {
    assert.equal(migrate(profile, 1), profile)
  })

  it("rejects a step away from version 1", () => {
    assert.throws(() => migrate(profile, 2), /schema version 1/)
    assert.throws(() => migrate({ ...profile, schemaVersion: 2 }, 1), /schema version 1/)
  })
})

describe("openMemory", () => {
  after(async () => {
    await database.delete()
  })

  it("does not rewrite a profile that is already on version 1", async () => {
    const existing = await ensureProfile(database, 1_700_000_000_000)
    await database.profile.put({ ...existing, ...profile })

    const opened = await openMemory(database, 1_800_000_000_000)
    assert.equal(opened.schemaVersion, 1)
    assert.equal(opened.xp, 310)
    assert.equal(opened.createdAt, profile.createdAt)
    assert.deepEqual(await database.profile.get(localProfileId), { ...profile, id: localProfileId })
  })
})
