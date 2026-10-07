import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { promptParts } from "./prompt.ts"

describe("promptParts", () => {
  it("keeps prose, inline code, and a fenced snippet apart", () => {
    assert.deepEqual(
      promptParts("Que vaut `x` ?\n\n```js\nconst x = 42\n```\n"),
      [
        { kind: "text", text: "Que vaut " },
        { kind: "inline", text: "x" },
        { kind: "text", text: " ?\n\n" },
        { kind: "code", text: "const x = 42", language: "js" },
        { kind: "text", text: "\n" },
      ],
    )
  })

  it("leaves a prompt without code as a single text part", () => {
    assert.deepEqual(promptParts("Bonjour"), [{ kind: "text", text: "Bonjour" }])
  })
})
