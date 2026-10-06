import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { earnedBadges, type BadgeSource } from "./badges.ts"

const empty: BadgeSource = { bestStreak: 0, xp: 0, seen: 0, finishedDays: 0 }

describe("earnedBadges", () => {
  it("keeps every badge unearned at the start", () => {
    const badges = earnedBadges(empty)
    assert.deepEqual(
      badges.map((badge) => badge.id),
      ["first-streak", "week-streak", "xp-100", "xp-1000", "ten-cards", "day-done"],
    )
    assert.equal(badges.every((badge) => !badge.earned), true)
  })

  it("earns a badge once its count is reached, and not one short", () => {
    assert.equal(earnedBadges({ ...empty, bestStreak: 1 }).find((badge) => badge.id === "first-streak")?.earned, true)
    assert.equal(earnedBadges({ ...empty, bestStreak: 6 }).find((badge) => badge.id === "week-streak")?.earned, false)
    assert.equal(earnedBadges({ ...empty, bestStreak: 7 }).find((badge) => badge.id === "week-streak")?.earned, true)
    assert.equal(earnedBadges({ ...empty, xp: 99 }).find((badge) => badge.id === "xp-100")?.earned, false)
    assert.equal(earnedBadges({ ...empty, xp: 100 }).find((badge) => badge.id === "xp-100")?.earned, true)
    assert.equal(earnedBadges({ ...empty, xp: 999 }).find((badge) => badge.id === "xp-1000")?.earned, false)
    assert.equal(earnedBadges({ ...empty, xp: 1000 }).find((badge) => badge.id === "xp-1000")?.earned, true)
    assert.equal(earnedBadges({ ...empty, seen: 9 }).find((badge) => badge.id === "ten-cards")?.earned, false)
    assert.equal(earnedBadges({ ...empty, seen: 10 }).find((badge) => badge.id === "ten-cards")?.earned, true)
    assert.equal(earnedBadges({ ...empty, finishedDays: 1 }).find((badge) => badge.id === "day-done")?.earned, true)
  })

  it("rejects a count that is not a whole number", () => {
    assert.throws(() => earnedBadges({ ...empty, xp: -1 }), /whole number/)
    assert.throws(() => earnedBadges({ ...empty, seen: 1.5 }), /whole number/)
  })
})
