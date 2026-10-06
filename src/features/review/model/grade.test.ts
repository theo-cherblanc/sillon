import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { clozeMatches, gradeChoices, toRating } from "./grade.ts"

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
