import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { bugMatches, clozeMatches, gradeChoices, shuffledSteps, stepsMatch, toRating } from "./grade.ts"

describe("gradeChoices", () => {
  it("offers three self-assessments after a correct MCQ", () => {
    assert.deepEqual(gradeChoices("mcq", true), ["guessed", "hesitated", "knew"])
  })

  it("offers only again after a wrong MCQ", () => {
    assert.deepEqual(gradeChoices("mcq", false), ["again"])
  })

  it("offers three self-assessments on a reveal card", () => {
    assert.deepEqual(gradeChoices("reveal", null), ["guessed", "hesitated", "knew"])
  })

  it("rejects a reveal card that claims an automatic result", () => {
    assert.throws(() => gradeChoices("reveal", true), /no automatic correction/)
  })

  it("rejects an MCQ graded without a result", () => {
    assert.throws(() => gradeChoices("mcq", null), /whether the answer was correct/)
  })

  it("offers three self-assessments when the hole is filled, and only again when it is not", () => {
    assert.deepEqual(gradeChoices("cloze", true), ["guessed", "hesitated", "knew"])
    assert.deepEqual(gradeChoices("cloze", false), ["again"])
  })

  it("rejects a cloze graded before the hole is checked", () => {
    assert.throws(() => gradeChoices("cloze", null), /whether the hole was filled/)
  })

  it("offers three self-assessments when the steps are sorted, and only again when they are not", () => {
    assert.deepEqual(gradeChoices("order", true), ["guessed", "hesitated", "knew"])
    assert.deepEqual(gradeChoices("order", false), ["again"])
  })

  it("rejects an order graded before the steps are checked", () => {
    assert.throws(() => gradeChoices("order", null), /whether the steps were sorted/)
  })

  it("offers three self-assessments when the faulty line is found, and only again when it is not", () => {
    assert.deepEqual(gradeChoices("bug", true), ["guessed", "hesitated", "knew"])
    assert.deepEqual(gradeChoices("bug", false), ["again"])
  })

  it("rejects a bug graded before a line is chosen", () => {
    assert.throws(() => gradeChoices("bug", null), /whether the line was found/)
  })
})

describe("stepsMatch", () => {
  const expected = ["git add", "git commit", "git push"]

  it("accepts the steps in the expected order, ignoring space at the ends", () => {
    assert.equal(stepsMatch([" git add ", "git commit", "git push"], expected), true)
  })

  it("rejects a swap, a change of case, or a list of the wrong length", () => {
    assert.equal(stepsMatch(["git commit", "git add", "git push"], expected), false)
    assert.equal(stepsMatch(["Git add", "git commit", "git push"], expected), false)
    assert.equal(stepsMatch(["git add", "git commit"], expected), false)
  })

  it("rejects an order with fewer than two steps", () => {
    assert.throws(() => stepsMatch(["git add"], ["git add"]), /at least two steps/)
  })

  it("rejects an empty step or a repeated step", () => {
    assert.throws(() => stepsMatch(["git add", ""], ["git add", "  "]), /text for each step/)
    assert.throws(() => stepsMatch(["git add", "git add"], ["git add", "git add"]), /distinct steps/)
  })
})

describe("bugMatches", () => {
  it("accepts the faulty line and rejects another line", () => {
    assert.equal(bugMatches(2, 2), true)
    assert.equal(bugMatches(1, 2), false)
  })

  it("rejects a card without a real line number", () => {
    assert.throws(() => bugMatches(1, 0), /line number/)
  })
})

describe("shuffledSteps", () => {
  const steps = ["git add", "git commit", "git push"]

  it("keeps every step and avoids the original order", () => {
    for (const random of [() => 0, () => 0.999]) {
      const shuffled = shuffledSteps(steps, random)
      assert.deepEqual([...shuffled].sort(), [...steps].sort())
      assert.notDeepEqual(shuffled, steps)
    }
  })

  it("rejects a shuffle that is not a fraction below 1", () => {
    assert.throws(() => shuffledSteps(steps, () => 1), /0 inclusive to 1 exclusive/)
  })
})

describe("clozeMatches", () => {
  it("accepts the expected text, ignoring space at the ends", () => {
    assert.equal(clozeMatches("  const  ", "const"), true)
  })

  it("rejects a different token, including a change of case or inner space", () => {
    assert.equal(clozeMatches("let", "const"), false)
    assert.equal(clozeMatches("Const", "const"), false)
    assert.equal(clozeMatches("a + b", "a+b"), false)
  })

  it("treats an empty hole as a miss", () => {
    assert.equal(clozeMatches("   ", "const"), false)
  })

  it("rejects a hole with nothing expected", () => {
    assert.throws(() => clozeMatches("const", "  "), /expected answer/)
  })
})

describe("toRating", () => {
  it("maps a correct MCQ onto again, hard, and good", () => {
    assert.equal(toRating("mcq", true, "guessed"), "again")
    assert.equal(toRating("mcq", true, "hesitated"), "hard")
    assert.equal(toRating("mcq", true, "knew"), "good")
  })

  it("refuses a self-assessment after a wrong MCQ", () => {
    assert.equal(toRating("mcq", false, "again"), "again")
    assert.throws(() => toRating("mcq", false, "knew"), /not available/)
  })

  it("maps a found bug the same way as a correct MCQ", () => {
    assert.equal(toRating("bug", true, "knew"), "good")
    assert.equal(toRating("bug", false, "again"), "again")
    assert.throws(() => toRating("bug", false, "knew"), /not available/)
  })

  it("maps a sorted order the same way as a correct MCQ", () => {
    assert.equal(toRating("order", true, "knew"), "good")
    assert.equal(toRating("order", false, "again"), "again")
    assert.throws(() => toRating("order", false, "knew"), /not available/)
  })

  it("maps a filled hole the same way as a correct MCQ", () => {
    assert.equal(toRating("cloze", true, "knew"), "good")
    assert.equal(toRating("cloze", false, "again"), "again")
    assert.throws(() => toRating("cloze", false, "knew"), /not available/)
  })

  it("maps a reveal card the same way as a correct MCQ", () => {
    assert.equal(toRating("reveal", null, "guessed"), "again")
    assert.equal(toRating("reveal", null, "hesitated"), "hard")
    assert.equal(toRating("reveal", null, "knew"), "good")
  })
})
