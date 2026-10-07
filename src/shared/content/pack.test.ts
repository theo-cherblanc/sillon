import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { activeCards, cardsForLesson, eligibleCardIds, isActiveCard, readLessonIds } from "./pack.ts"

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

describe("cardsForLesson", () => {
  it("keeps the cards that name the lesson", () => {
    assert.deepEqual(
      cardsForLesson(
        [
          { id: "a", lessonId: "why" },
          { id: "b" },
          { id: "c", lessonId: "why" },
        ],
        "why",
      ).map((card) => card.id),
      ["a", "c"],
    )
  })
})

describe("eligibleCardIds", () => {
  it("keeps cards without a lesson, and cards whose lesson has been read", () => {
    assert.deepEqual(
      eligibleCardIds(
        [
          { id: "free" },
          { id: "locked", lessonId: "why" },
          { id: "open", lessonId: "why" },
          { id: "other", lessonId: "di" },
        ],
        new Set(["why"]),
      ),
      ["free", "locked", "open"],
    )
  })
})

describe("readLessonIds", () => {
  it("keeps only lessons that have a read time", () => {
    assert.deepEqual(
      [...readLessonIds([
        { lessonId: "why", readAt: 1 },
        { lessonId: "di", readAt: null },
      ])].sort(),
      ["why"],
    )
  })
})
