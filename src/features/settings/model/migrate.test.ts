import assert from "node:assert/strict"
import { after, describe, it } from "node:test"
import Dexie from "dexie"
import fakeIndexedDB, { IDBKeyRange } from "fake-indexeddb"
import { localProfileId, SillonDatabase, type ProfileRow } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { currentSchema, type Profile } from "../../../shared/db/types.ts"
import { migrate, openMemory } from "./migrate.ts"

Dexie.dependencies.indexedDB = fakeIndexedDB
Dexie.dependencies.IDBKeyRange = IDBKeyRange

const database = new SillonDatabase("sillon-migrate-test")

const profile: Profile = {
  schemaVersion: currentSchema,
  xp: 310,
  streak: 1,
  bestStreak: 1,
  lastCompletedDate: "2026-10-05",
  dailyGoal: 10,
  newPerDay: 5,
  createdAt: 1_791_192_709_424,
}

describe("migrate", () => {
  it("leaves a version 2 profile untouched", () => {
    assert.deepEqual(migrate(profile, currentSchema), profile)
  })

  it("opens a version 1 profile as version 2", () => {
    assert.deepEqual(migrate({ ...profile, schemaVersion: 1 }, currentSchema), profile)
  })

  it("rejects an unknown schema", () => {
    assert.throws(() => migrate(profile, 3), /schema version 2/)
    assert.throws(() => migrate({ ...profile, schemaVersion: 3 }, currentSchema), /unknown schema/)
  })
})

describe("openMemory", () => {
  after(async () => {
    await database.delete()
  })

  it("rewrites a version 1 profile to version 2", async () => {
    const existing = await ensureProfile(database, 1_700_000_000_000)
    await database.profile.put({ ...existing, ...profile, schemaVersion: 1 } as unknown as ProfileRow)

    const opened = await openMemory(database, 1_800_000_000_000)
    assert.equal(opened.schemaVersion, currentSchema)
    assert.equal(opened.xp, 310)
    assert.equal(opened.createdAt, profile.createdAt)
    assert.deepEqual(await database.profile.get(localProfileId), { ...profile, id: localProfileId })
  })
})
