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

export function stepsMatch(given: readonly string[], expected: readonly string[]): boolean {
  if (expected.length < 2) {
    throw new Error("An order needs at least two steps")
  }
  const steps = expected.map((step) => step.trim())
  if (steps.some((step) => step.length === 0)) {
    throw new Error("An order needs a text for each step")
  }
  if (new Set(steps).size !== steps.length) {
    throw new Error("An order needs distinct steps")
  }
  return given.length === steps.length && given.every((step, index) => step.trim() === steps[index])
}

export function shuffledSteps(steps: readonly string[], random: () => number): string[] {
  if (steps.length < 2) {
    throw new Error("An order needs at least two steps")
  }
  if (new Set(steps).size !== steps.length) {
    throw new Error("An order needs distinct steps")
  }

  const next = [...steps]
  for (let index = next.length - 1; index > 0; index -= 1) {
    const roll = random()
    if (roll < 0 || roll >= 1) {
      throw new Error("A shuffle needs a number from 0 inclusive to 1 exclusive")
    }
    const swap = Math.floor(roll * (index + 1))
    const current = next[index]
    next[index] = next[swap]
    next[swap] = current
  }

  if (next.every((step, index) => step === steps[index])) {
    const first = next[0]
    next[0] = next[1]
    next[1] = first
  }
  return next
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
        : type === "order"
          ? "An order grade needs to know whether the steps were sorted"
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
