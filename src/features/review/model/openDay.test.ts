import assert from "node:assert/strict"
import { after, describe, it } from "node:test"
import Dexie from "dexie"
import fakeIndexedDB, { IDBKeyRange } from "fake-indexeddb"
import { localProfileId, SillonDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { localDate } from "../../../shared/lib/dates.ts"
import { openDay } from "./openDay.ts"

Dexie.dependencies.indexedDB = fakeIndexedDB
Dexie.dependencies.IDBKeyRange = IDBKeyRange

const database = new SillonDatabase("sillon-open-day-test")
const monday = new Date(2026, 9, 5, 21, 0, 0)
const tuesday = new Date(2026, 9, 6, 8, 0, 0)

describe("openDay", () => {
  after(async () => {
    await database.delete()
  })

  it("breaks the streak after midnight when yesterday's queue was left unfinished", async () => {
    const profile = await ensureProfile(database, monday.getTime())
    await database.profile.put({
      ...profile,
      streak: 4,
      bestStreak: 4,
      lastCompletedDate: "2026-10-04",
    })
    await database.days.put({
      date: "2026-10-05",
      queueSize: 10,
      completed: 3,
      xp: 15,
      goalMet: false,
    })

    const opened = await openDay(database, tuesday, 2)
    assert.equal(opened.streak, 0)
    assert.equal(opened.bestStreak, 4)
    assert.equal(opened.lastCompletedDate, "2026-10-04")
    assert.equal((await database.days.get(localDate(tuesday)))?.queueSize, 2)
  })

  it("keeps the streak when yesterday's queue was empty", async () => {
    const profile = await database.profile.get(localProfileId)
    assert.ok(profile)
    await database.profile.put({
      ...profile,
      streak: 4,
      bestStreak: 4,
      lastCompletedDate: "2026-10-04",
    })
    await database.days.put({
      date: "2026-10-05",
      queueSize: 0,
      completed: 0,
      xp: 0,
      goalMet: false,
    })

    const opened = await openDay(database, tuesday, 1)
    assert.equal(opened.streak, 4)
    assert.equal(opened.bestStreak, 4)
  })

  it("waits until the next day before an unfinished queue breaks the streak", async () => {
    const profile = await database.profile.get(localProfileId)
    assert.ok(profile)
    await database.profile.put({
      ...profile,
      streak: 4,
      bestStreak: 4,
      lastCompletedDate: "2026-10-04",
    })
    await database.days.clear()
    await database.days.put({
      date: localDate(monday),
      queueSize: 10,
      completed: 3,
      xp: 15,
      goalMet: false,
    })

    const opened = await openDay(database, monday, 10)
    assert.equal(opened.streak, 4)
    assert.equal((await database.days.get(localDate(monday)))?.completed, 3)
  })

  it("leaves the streak alone when no earlier day was recorded", async () => {
    const profile = await database.profile.get(localProfileId)
    assert.ok(profile)
    await database.profile.put({
      ...profile,
      streak: 2,
      bestStreak: 2,
      lastCompletedDate: "2026-10-04",
    })
    await database.days.clear()

    const opened = await openDay(database, tuesday, 0)
    assert.equal(opened.streak, 2)
    assert.deepEqual(await database.days.get(localDate(tuesday)), {
      date: localDate(tuesday),
      queueSize: 0,
      completed: 0,
      xp: 0,
      goalMet: false,
    })
  })

  it("rejects a day without a valid date", async () => {
    await assert.rejects(() => openDay(database, new Date(Number.NaN), 1), /valid date/)
  })
})
