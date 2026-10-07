import type { Card } from "./types.ts"
import loaded from "./cards.json"
import { activeCards } from "./pack.ts"

const pack = loaded as Card[]

export const cards: readonly Card[] = activeCards(pack)
