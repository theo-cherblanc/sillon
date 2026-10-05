import type { Card } from "../../../shared/content/types.ts"

export type XpChoice = "again" | "guessed" | "hesitated" | "knew"

const pointsByChoice = {
  again: 0,
  guessed: 0,
  hesitated: 5,
  knew: 10,
} as const satisfies Record<XpChoice, number>

export function reviewXp(
  choice: XpChoice,
  difficulty: Card["difficulty"],
  fromQueue: boolean,
): number {
  if (!fromQueue) {
    return 0
  }

  if (!(choice in pointsByChoice)) {
    throw new Error(`The choice "${choice}" does not award XP`)
  }

  if (difficulty !== 1 && difficulty !== 2 && difficulty !== 3) {
    throw new Error("XP needs an author difficulty of 1, 2, or 3")
  }

  return pointsByChoice[choice] * difficulty
}
