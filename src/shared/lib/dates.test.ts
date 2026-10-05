import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { localDate, nextLocalMidnight } from "./dates.ts"

describe("localDate", () => {
  it("uses the local calendar day, including single-digit months", () => {
    assert.equal(localDate(new Date(2026, 0, 5, 15, 30)), "2026-01-05")
    assert.equal(localDate(new Date(2026, 9, 5, 23, 59, 59, 999)), "2026-10-05")
  })

  it("starts the new day at local midnight", () => {
    assert.equal(localDate(new Date(2026, 9, 6, 0, 0, 0, 0)), "2026-10-06")
  })

  it("rejects an invalid date", () => {
    assert.throws(() => localDate(new Date(Number.NaN)), /valid date/)
  })
})

describe("nextLocalMidnight", () => {
  it("is the first instant of the next local day", () => {
    const afternoon = new Date(2026, 9, 5, 15, 30)
    assert.equal(nextLocalMidnight(afternoon), new Date(2026, 9, 6).getTime())
    assert.ok(afternoon.getTime() < nextLocalMidnight(afternoon))
  })

  it("stays on tomorrow when the clock is one millisecond before midnight", () => {
    const justBefore = new Date(2026, 9, 5, 23, 59, 59, 999)
    assert.equal(nextLocalMidnight(justBefore), new Date(2026, 9, 6).getTime())
  })

  it("moves forward once midnight has arrived", () => {
    const midnight = new Date(2026, 9, 6, 0, 0, 0, 0)
    assert.equal(nextLocalMidnight(midnight), new Date(2026, 9, 7).getTime())
  })

  it("rejects an invalid date", () => {
    assert.throws(() => nextLocalMidnight(new Date(Number.NaN)), /valid date/)
  })
})
