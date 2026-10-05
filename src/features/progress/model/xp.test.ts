import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { reviewXp } from "./xp.ts"

describe("reviewXp", () => {
  it("awards nothing for again or a guess", () => {
    assert.equal(reviewXp("again", 3, true), 0)
    assert.equal(reviewXp("guessed", 3, true), 0)
  })

  it("awards five times the difficulty when the answer was hesitant", () => {
    assert.equal(reviewXp("hesitated", 1, true), 5)
    assert.equal(reviewXp("hesitated", 2, true), 10)
    assert.equal(reviewXp("hesitated", 3, true), 15)
  })

  it("awards ten times the difficulty when the answer was known", () => {
    assert.equal(reviewXp("knew", 1, true), 10)
    assert.equal(reviewXp("knew", 2, true), 20)
    assert.equal(reviewXp("knew", 3, true), 30)
  })

  it("awards nothing outside the day's queue", () => {
    assert.equal(reviewXp("knew", 3, false), 0)
  })

  it("rejects a choice or a difficulty outside the scale", () => {
    assert.throws(() => reviewXp("easy" as "knew", 2, true), /does not award XP/)
    assert.throws(() => reviewXp("knew", 4 as 1, true), /author difficulty/)
  })
})
