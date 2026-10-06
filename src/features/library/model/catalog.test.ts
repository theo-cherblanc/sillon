import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { cardLabel, libraryMark, libraryTags, matchingTag } from "./catalog.ts"

describe("cardLabel", () => {
  it("uses the first line and drops the backticks", () => {
    assert.equal(cardLabel("Que vaut `null == undefined` ?\n\nSuite"), "Que vaut null == undefined ?")
  })

  it("names an empty prompt", () => {
    assert.equal(cardLabel(" \n "), "Carte")
  })
})

describe("libraryMark", () => {
  const cutoff = 100

  it("treats an unseen card as new", () => {
    assert.equal(libraryMark(null, cutoff), "new")
    assert.equal(libraryMark({ state: 0, due: 0 }, cutoff), "new")
  })

  it("keeps a card in learning, including one being relearned", () => {
    assert.equal(libraryMark({ state: 1, due: 0 }, cutoff), "learning")
    assert.equal(libraryMark({ state: 3, due: 0 }, cutoff), "learning")
  })

  it("marks a review card due before the cutoff, and ready at the cutoff", () => {
    assert.equal(libraryMark({ state: 2, due: 99 }, cutoff), "due")
    assert.equal(libraryMark({ state: 2, due: 100 }, cutoff), "ready")
  })

  it("rejects a cutoff that is not a real instant", () => {
    assert.throws(() => libraryMark(null, Number.NaN), /finite cutoff/)
  })
})

describe("libraryTags", () => {
  it("lists each tag once, in French order", () => {
    assert.deepEqual(libraryTags([["git", "http"], ["git", "architecture"]]), ["architecture", "git", "http"])
  })
})

describe("matchingTag", () => {
  const cards = [
    { id: "a", tags: ["git"] },
    { id: "b", tags: ["http", "git"] },
  ]

  it("keeps every card when no tag is chosen", () => {
    assert.deepEqual(
      matchingTag(cards, null).map((card) => card.id),
      ["a", "b"],
    )
  })

  it("keeps the cards that carry the tag", () => {
    assert.deepEqual(
      matchingTag(cards, "http").map((card) => card.id),
      ["b"],
    )
  })
})
