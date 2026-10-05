import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { gradeChoices, toRating } from "./grade.ts"

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

  it("maps a reveal card the same way as a correct MCQ", () => {
    assert.equal(toRating("reveal", null, "guessed"), "again")
    assert.equal(toRating("reveal", null, "hesitated"), "hard")
    assert.equal(toRating("reveal", null, "knew"), "good")
  })
})
