import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { activeCards, isActiveCard } from "./pack.ts"

describe("isActiveCard", () => {
  it("keeps a card that is not retired", () => {
    assert.equal(isActiveCard({}), true)
    assert.equal(isActiveCard({ deprecated: false }), true)
  })

  it("drops a retired card", () => {
    assert.equal(isActiveCard({ deprecated: true }), false)
  })
})

describe("activeCards", () => {
  it("keeps the living cards in order", () => {
    assert.deepEqual(
      activeCards([{ id: "a" }, { id: "b", deprecated: true }, { id: "c", deprecated: false }]).map(
        (card) => card.id,
      ),
      ["a", "c"],
    )
  })
})
