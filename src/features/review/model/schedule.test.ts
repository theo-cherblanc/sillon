import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { createEmptyCard, State, type Card } from "ts-fsrs"
import { formatDelay, previewDelays } from "./schedule.ts"

const now = new Date("2026-10-05T08:00:00.000Z")

function reviewCard(stability: number, difficulty: number): Card {
  const elapsed = 1
  return {
    ...createEmptyCard(now),
    due: now,
    stability,
    difficulty,
    scheduled_days: elapsed,
    elapsed_days: elapsed,
    reps: 2,
    lapses: 0,
    state: State.Review,
    last_review: new Date(now.getTime() - elapsed * 86_400_000),
  }
}

describe("formatDelay", () => {
  it("says less than a minute when the gap is under thirty seconds", () => {
    assert.equal(formatDelay(0.4), "dans moins d'une minute")
  })

  it("uses the singular for one minute and one hour", () => {
    assert.equal(formatDelay(1), "dans 1 minute")
    assert.equal(formatDelay(60), "dans 1 heure")
  })

  it("uses the plural for several minutes or hours", () => {
    assert.equal(formatDelay(10), "dans 10 minutes")
    assert.equal(formatDelay(120), "dans 2 heures")
  })

  it("says tomorrow for a one-day gap", () => {
    assert.equal(formatDelay(24 * 60), "demain")
  })

  it("counts later days", () => {
    assert.equal(formatDelay(4 * 24 * 60), "dans 4 jours")
    assert.equal(formatDelay(12 * 24 * 60), "dans 12 jours")
  })

  it("rejects a delay that is not a future duration", () => {
    assert.throws(() => formatDelay(Number.NaN), /finite number of minutes/)
    assert.throws(() => formatDelay(-1), /finite number of minutes/)
  })
})

describe("previewDelays", () => {
  it("shows the first learning steps on a new card", () => {
    assert.deepEqual(previewDelays(null, now), {
      again: "dans 1 minute",
      hard: "dans 6 minutes",
      good: "dans 10 minutes",
    })
  })

  it("shows tomorrow when a weak card is rated hard", () => {
    assert.deepEqual(previewDelays(reviewCard(0.1, 5), now), {
      again: "dans 10 minutes",
      hard: "demain",
      good: "dans 2 jours",
    })
  })

  it("shows a four-day delay when a steadier card is rated good", () => {
    assert.deepEqual(previewDelays(reviewCard(1, 5), now), {
      again: "dans 10 minutes",
      hard: "dans 3 jours",
      good: "dans 4 jours",
    })
  })

  it("rejects a preview without a valid date", () => {
    assert.throws(() => previewDelays(null, new Date(Number.NaN)), /valid date/)
  })
})
