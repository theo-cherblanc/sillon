import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { lastExportNote, readLastExport, rememberExport } from "./lastExport.ts"

function memory() {
  const values = new Map<string, string>()
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => {
      values.set(key, value)
    },
  }
}

describe("lastExportNote", () => {
  it("says when nothing has been exported", () => {
    assert.equal(lastExportNote(null), "Pas encore d'export")
  })

  it("names the calendar day of the last export", () => {
    assert.equal(lastExportNote("2026-10-06"), "Dernier export le 2026-10-06")
  })

  it("rejects a day that is not a calendar date", () => {
    assert.throws(() => lastExportNote("hier"), /calendar day/)
  })
})

describe("rememberExport", () => {
  it("keeps the day for the next visit", () => {
    const store = memory()
    rememberExport(store, "2026-10-06")
    assert.equal(readLastExport(store), "2026-10-06")
  })

  it("ignores a stored value that is not a calendar day", () => {
    const store = memory()
    store.setItem("sillon.lastExport", "hier")
    assert.equal(readLastExport(store), null)
  })

  it("rejects a day that is not a calendar date", () => {
    assert.throws(() => rememberExport(memory(), "2026-1-6"), /calendar day/)
  })
})
