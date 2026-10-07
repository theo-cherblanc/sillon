import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { decideSync, memoryFreshness, planSync } from "./sync.ts"

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

describe("memoryFreshness", () => {
  it("uses the latest review or card update, and the profile when nothing has moved", () => {
    assert.equal(
      memoryFreshness({
        profile: { createdAt: 5 },
        progress: [{ updatedAt: 8 }],
        reviews: [{ at: 12 }],
      }),
      12,
    )
    assert.equal(memoryFreshness({ profile: { createdAt: 5 }, progress: [], reviews: [] }), 5)
    assert.equal(
      memoryFreshness({
        profile: { createdAt: 5 },
        progress: [],
        reviews: [],
        lessons: [{ updatedAt: 9 }],
      }),
      9,
    )
  })
})

describe("planSync", () => {
  it("sends the local stamp when this browser is ahead", () => {
    assert.deepEqual(planSync(20, 10, 5), { action: "push", exportedAt: 20 })
  })

  it("falls back to the memory's own time when this browser has no stamp", () => {
    assert.deepEqual(planSync(null, null, 5), { action: "push", exportedAt: 5 })
    assert.deepEqual(planSync(null, 5, 5), { action: "keep", stamp: 5 })
  })

  it("pulls only when the remote copy is strictly newer", () => {
    assert.deepEqual(planSync(5, 9, 5), { action: "pull" })
  })
})
