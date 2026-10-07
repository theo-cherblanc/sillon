import assert from "node:assert/strict"
import { describe, it } from "node:test"
import type { Lesson } from "../../../shared/content/types.ts"
import { catalogLessons, groupedLessons } from "./catalog.ts"

const why: Lesson = {
  id: "angular.why.001",
  topic: "angular",
  order: 1,
  title: "Qu'est-ce qu'Angular ?",
  level: 1,
  minutes: 6,
  source: ["https://angular.dev/overview"],
  prerequisites: [],
  body: "body",
}

describe("catalogLessons", () => {
  it("orders by topic then order, and counts the linked cards", () => {
    const listed = catalogLessons(
      [{ ...why, order: 2, id: "angular.di.001", title: "Injecter" }, why],
      [{ lessonId: "angular.why.001" }, { lessonId: "angular.why.001" }, {}],
      new Set(["angular.why.001"]),
    )
    assert.deepEqual(
      listed.map((item) => ({ id: item.id, cardCount: item.cardCount, read: item.read })),
      [
        { id: "angular.why.001", cardCount: 2, read: true },
        { id: "angular.di.001", cardCount: 0, read: false },
      ],
    )
  })
})

describe("groupedLessons", () => {
  it("keeps consecutive lessons of the same topic together", () => {
    const listed = catalogLessons([why], [], new Set())
    assert.deepEqual(
      groupedLessons(listed).map((group) => group.label),
      ["Angular"],
    )
  })
})
