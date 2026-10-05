import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { dailyGoals, maxDailyCount } from "./goals.ts"

describe("dailyGoals", () => {
  it("keeps a whole daily goal and a new-card cap", () => {
    assert.deepEqual(dailyGoals(10, 5), { dailyGoal: 10, newPerDay: 5 })
    assert.deepEqual(dailyGoals(0, 0), { dailyGoal: 0, newPerDay: 0 })
  })

  it("rejects a goal outside the allowed range", () => {
    assert.throws(() => dailyGoals(-1, 5), /daily goal/)
    assert.throws(() => dailyGoals(1.5, 5), /daily goal/)
    assert.throws(() => dailyGoals(maxDailyCount + 1, 5), /daily goal/)
  })

  it("rejects a new-card cap outside the allowed range", () => {
    assert.throws(() => dailyGoals(10, -1), /new-card cap/)
  })
})
