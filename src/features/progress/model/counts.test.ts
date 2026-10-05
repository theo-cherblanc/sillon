import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { countCards } from "./counts.ts"

const pack = ["new", "learning", "relearning", "review", "again"]

describe("countCards", () => {
  it("sorts unseen cards, learning cards, and cards that are up to date", () => {
    assert.deepEqual(
      countCards(pack, [
        { cardId: "learning", state: 1 },
        { cardId: "relearning", state: 3 },
        { cardId: "review", state: 2 },
        { cardId: "again", state: 0 },
        { cardId: "orphan", state: 2 },
      ]),
      { fresh: 2, learning: 2, review: 1 },
    )
  })

  it("counts a pack with no memory as all new", () => {
    assert.deepEqual(countCards(["a", "a", "b"], []), { fresh: 2, learning: 0, review: 0 })
  })

  it("rejects a state outside the scheduler", () => {
    assert.throws(
      () => countCards(["a"], [{ cardId: "a", state: 4 as 0 }]),
      /0, 1, 2, or 3/,
    )
  })
})
