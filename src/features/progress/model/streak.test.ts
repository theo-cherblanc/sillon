import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { settleStreak, type StreakDay, type StreakState } from "./streak.ts"

const fresh: StreakState = { streak: 0, bestStreak: 0, lastCompletedDate: null }

function day(
  date: string,
  queueSize: number,
  completed: number,
  closed = false,
): StreakDay {
  return { date, queueSize, completed, closed }
}

describe("settleStreak", () => {
  it("adds one when the day's queue is finished and keeps the record", () => {
    const monday = settleStreak(fresh, day("2026-10-05", 10, 10))
    assert.deepEqual(monday, {
      streak: 1,
      bestStreak: 1,
      lastCompletedDate: "2026-10-05",
    })

    const tuesday = settleStreak(monday, day("2026-10-06", 4, 4))
    assert.deepEqual(tuesday, {
      streak: 2,
      bestStreak: 2,
      lastCompletedDate: "2026-10-06",
    })
  })

  it("does not count the same day twice", () => {
    const done = settleStreak(fresh, day("2026-10-05", 10, 10))
    assert.deepEqual(settleStreak(done, day("2026-10-05", 10, 10, true)), done)
  })

  it("keeps the streak across an empty day", () => {
    const monday = settleStreak(fresh, day("2026-10-05", 3, 3))
    const tuesday = settleStreak(monday, day("2026-10-06", 0, 0, true))
    const wednesday = settleStreak(tuesday, day("2026-10-07", 2, 2))

    assert.equal(tuesday.streak, 1)
    assert.deepEqual(wednesday, {
      streak: 2,
      bestStreak: 2,
      lastCompletedDate: "2026-10-07",
    })
  })

  it("waits until midnight before an unfinished queue breaks the streak", () => {
    const monday = settleStreak(
      { streak: 4, bestStreak: 4, lastCompletedDate: "2026-10-04" },
      day("2026-10-05", 10, 3),
    )
    assert.equal(monday.streak, 4)

    const closed = settleStreak(monday, day("2026-10-05", 10, 3, true))
    assert.deepEqual(closed, {
      streak: 0,
      bestStreak: 4,
      lastCompletedDate: "2026-10-04",
    })

    const restarted = settleStreak(closed, day("2026-10-06", 2, 2))
    assert.deepEqual(restarted, {
      streak: 1,
      bestStreak: 4,
      lastCompletedDate: "2026-10-06",
    })
  })

  it("rejects a day settled before the last completion", () => {
    const done = settleStreak(fresh, day("2026-10-05", 1, 1))
    assert.throws(
      () => settleStreak(done, day("2026-10-04", 1, 1)),
      /before the last completion/,
    )
  })

  it("rejects a day that completes more cards than it queued", () => {
    assert.throws(() => settleStreak(fresh, day("2026-10-05", 2, 3)), /more cards than the queue/)
  })
})
