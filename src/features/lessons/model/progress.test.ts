import assert from "node:assert/strict"
import { after, describe, it } from "node:test"
import Dexie from "dexie"
import fakeIndexedDB, { IDBKeyRange } from "fake-indexeddb"
import { SillonDatabase } from "../../../shared/db/client.ts"
import { markLessonRead } from "./progress.ts"

Dexie.dependencies.indexedDB = fakeIndexedDB
Dexie.dependencies.IDBKeyRange = IDBKeyRange

const database = new SillonDatabase("sillon-lesson-progress-test")

describe("markLessonRead", () => {
  after(async () => {
    await database.delete()
  })

  it("writes a read time once", async () => {
    const first = await markLessonRead(database, "angular.why.001", 10)
    const second = await markLessonRead(database, "angular.why.001", 20)
    assert.deepEqual(first, { lessonId: "angular.why.001", readAt: 10, updatedAt: 10 })
    assert.deepEqual(second, first)
    assert.deepEqual(await database.lessons.get("angular.why.001"), first)
  })

  it("rejects a time that is not finite", async () => {
    await assert.rejects(() => markLessonRead(database, "angular.why.001", Number.NaN), /finite time/)
  })
})
