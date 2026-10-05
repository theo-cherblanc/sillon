import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { nextDueAt, todayStatus } from "./today.ts"

const midnight = 100

describe("nextDueAt", () => {
  it("picks the earliest card that is not due yet", () => {
    assert.equal(
      nextDueAt(
        [
          { cardId: "due", due: 40 },
          { cardId: "later", due: 180 },
          { cardId: "sooner", due: midnight },
        ],
        midnight,
      ),
      midnight,
    )
  })

  it("returns nothing when every seen card is already due", () => {
    assert.equal(nextDueAt([{ cardId: "due", due: 40 }], midnight), null)
  })
})

describe("todayStatus", () => {
  it("counts the cards waiting in the queue", () => {
    assert.equal(todayStatus({ streak: 0, xp: 0, queueSize: 5, nextDueLabel: null }), "5 cartes")
    assert.equal(todayStatus({ streak: 0, xp: 0, queueSize: 1, nextDueLabel: null }), "1 carte")
  })

  it("names the next card when nothing is due", () => {
    assert.equal(
      todayStatus({ streak: 2, xp: 10, queueSize: 0, nextDueLabel: "dans 4 jours" }),
      "Rien n'est dû. Prochaine carte : dans 4 jours.",
    )
  })

  it("stays quiet when no card is scheduled later", () => {
    assert.equal(
      todayStatus({ streak: 2, xp: 10, queueSize: 0, nextDueLabel: null }),
      "Rien n'est dû.",
    )
  })
})
