import type { Card } from "./types.ts"
import loaded from "./cards.json"

export const cards = loaded as readonly Card[]
