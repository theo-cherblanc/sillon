import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { inlineParts, lessonBlocks } from "./markdown.ts"

describe("lessonBlocks", () => {
  it("splits headings, paragraphs, lists, and fences", () => {
    assert.deepEqual(
      lessonBlocks(`## L'idée

Un framework web.

- les composants
- les signals

\`\`\`ts
const n = 1
\`\`\`
`),
      [
        { kind: "heading", text: "L'idée" },
        { kind: "paragraph", text: "Un framework web." },
        { kind: "list", items: ["les composants", "les signals"] },
        { kind: "code", text: "const n = 1" },
      ],
    )
  })
})

describe("inlineParts", () => {
  it("keeps inline code apart from the surrounding text", () => {
    assert.deepEqual(inlineParts("Le mot `signals` reste en anglais."), [
      { kind: "text", text: "Le mot " },
      { kind: "inline", text: "signals" },
      { kind: "text", text: " reste en anglais." },
    ])
  })
})
