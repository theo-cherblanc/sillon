import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { nextDueAt, soonestDue, todayStatus } from "./today.ts"

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

describe("soonestDue", () => {
  it("keeps the three cards that come back first", () => {
    assert.deepEqual(
      soonestDue(
        [
          { cardId: "later", due: 300 },
          { cardId: "second", due: 20 },
          { cardId: "first", due: 10 },
          { cardId: "third", due: 20 },
        ],
        3,
      ),
      [
        { cardId: "first", due: 10 },
        { cardId: "second", due: 20 },
        { cardId: "third", due: 20 },
      ],
    )
  })

  it("returns every card when fewer than three are known", () => {
    assert.deepEqual(soonestDue([{ cardId: "only", due: 5 }], 3), [{ cardId: "only", due: 5 }])
  })

  it("rejects a summary that asks for no card", () => {
    assert.throws(() => soonestDue([], 0), /at least one/)
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
