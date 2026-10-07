import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { eligibleCardIds } from "../../../shared/content/pack.ts"
import { buildTodayQueue, type SeenCard } from "./queue.ts"

const midnight = 100
const cardIds = ["b", "a", "c", "d", "e"]

function queue(seen: SeenCard[], dailyGoal = 10, newPerDay = 5) {
  return buildTodayQueue({
    cardIds,
    seen,
    dueBefore: midnight,
    dailyGoal,
    newPerDay,
  })
}

describe("buildTodayQueue", () => {
  it("reviews due cards before introducing new ones", () => {
    assert.deepEqual(
      queue(
        [
          { cardId: "b", due: 40 },
          { cardId: "a", due: 10 },
        ],
        4,
        5,
      ),
      ["a", "b", "c", "d"],
    )
  })

  it("stops new cards at the daily cap even when the goal is larger", () => {
    assert.deepEqual(queue([{ cardId: "a", due: 10 }], 10, 2), ["a", "b", "c"])
  })

  it("leaves no room for new cards when reviews already fill the goal", () => {
    assert.deepEqual(
      queue(
        [
          { cardId: "a", due: 10 },
          { cardId: "b", due: 20 },
          { cardId: "c", due: 30 },
        ],
        2,
        5,
      ),
      ["a", "b"],
    )
  })

  it("keeps a card scheduled for later out of the queue", () => {
    assert.deepEqual(queue([{ cardId: "a", due: midnight }]), ["b", "c", "d", "e"])
  })

  it("returns an empty queue when nothing is due and no card is new", () => {
    assert.deepEqual(
      queue(cardIds.map((cardId) => ({ cardId, due: midnight }))),
      [],
    )
  })

  it("ignores progress for a card that is no longer in the pack", () => {
    assert.deepEqual(queue([{ cardId: "missing", due: 1 }], 1, 5), ["a"])
  })

  it("returns nothing when the goal is zero", () => {
    assert.deepEqual(queue([], 0, 5), [])
  })

  it("keeps cards without a lesson, and waits for a lesson to be read", () => {
    const eligible = eligibleCardIds(
      [
        { id: "git.commit.001" },
        { id: "angular.what.001", lessonId: "angular.why.001" },
        { id: "js.async.001" },
      ],
      new Set(),
    )
    assert.deepEqual(
      buildTodayQueue({
        cardIds: eligible,
        seen: [],
        dueBefore: midnight,
        dailyGoal: 10,
        newPerDay: 5,
      }),
      ["git.commit.001", "js.async.001"],
    )
    assert.deepEqual(
      buildTodayQueue({
        cardIds: eligibleCardIds(
          [
            { id: "git.commit.001" },
            { id: "angular.what.001", lessonId: "angular.why.001" },
          ],
          new Set(["angular.why.001"]),
        ),
        seen: [],
        dueBefore: midnight,
        dailyGoal: 10,
        newPerDay: 5,
      }),
      ["angular.what.001", "git.commit.001"],
    )
  })
})
