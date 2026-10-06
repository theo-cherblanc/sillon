import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { decideSync } from "./sync.ts"

describe("decideSync", () => {
  it("sends the local memory when it is newer, or when nothing is stored remotely", () => {
    assert.equal(decideSync(20, 10), "push")
    assert.equal(decideSync(20, null), "push")
  })

  it("asks to take the remote memory when it is strictly newer, or when this browser has none", () => {
    assert.equal(decideSync(10, 20), "pull")
    assert.equal(decideSync(null, 20), "pull")
  })

  it("does nothing when the two copies have the same time, or when both are missing", () => {
    assert.equal(decideSync(10, 10), "keep")
    assert.equal(decideSync(null, null), "keep")
  })

  it("rejects a time that is not finite", () => {
    assert.throws(() => decideSync(Number.NaN, 1), /finite time/)
    assert.throws(() => decideSync(1, Number.POSITIVE_INFINITY), /finite time/)
  })
})
