import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { highlightTokens, languageAlias } from "./highlight.ts"

describe("languageAlias", () => {
  it("maps the fence tags we actually write", () => {
    assert.equal(languageAlias("ts"), "typescript")
    assert.equal(languageAlias("js"), "javascript")
    assert.equal(languageAlias("html"), "markup")
    assert.equal(languageAlias(""), "typescript")
  })
})

describe("highlightTokens", () => {
  it("marks TypeScript keywords apart from the rest", () => {
    const tokens = highlightTokens("const n = 1", "ts")
    assert.equal(
      tokens.some((token) => token.kind === "keyword" && token.text === "const"),
      true,
    )
    assert.equal(
      tokens.some((token) => token.kind === "number" && token.text === "1"),
      true,
    )
    assert.equal(tokens.map((token) => token.text).join(""), "const n = 1")
  })

  it("keeps the source when nothing is a token", () => {
    assert.deepEqual(highlightTokens("   ", "ts"), [{ text: "   ", kind: "plain" }])
  })
})
