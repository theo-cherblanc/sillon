import type { Card } from "../../../shared/content/types.ts"

export type Rating = "again" | "hard" | "good"
export type SelfAssessment = "guessed" | "hesitated" | "knew"
export type GradeChoice = SelfAssessment | "again"
export type GradedCardType = Card["type"]

const ratingByAssessment = {
  guessed: "again",
  hesitated: "hard",
  knew: "good",
} as const satisfies Record<SelfAssessment, Rating>

export function clozeMatches(typed: string, expected: string): boolean {
  if (expected.trim().length === 0) {
    throw new Error("A cloze needs an expected answer")
  }
  return typed.trim() === expected.trim()
}

export function gradeChoices(
  type: GradedCardType,
  mcqCorrect: boolean | null,
): GradeChoice[] {
  if (type === "reveal") {
    if (mcqCorrect !== null) {
      throw new Error("A reveal card has no automatic correction")
    }
    return ["guessed", "hesitated", "knew"]
  }

  if (mcqCorrect === null) {
    throw new Error(
      type === "cloze"
        ? "A cloze grade needs to know whether the hole was filled"
        : "An MCQ grade needs to know whether the answer was correct",
    )
  }

  if (!mcqCorrect) {
    return ["again"]
  }

  return ["guessed", "hesitated", "knew"]
}

export function toRating(
  type: GradedCardType,
  mcqCorrect: boolean | null,
  choice: GradeChoice,
): Rating {
  if (!gradeChoices(type, mcqCorrect).includes(choice)) {
    throw new Error(`The choice "${choice}" is not available for this answer`)
  }

  if (choice === "again") {
    return "again"
  }

  return ratingByAssessment[choice]
}
