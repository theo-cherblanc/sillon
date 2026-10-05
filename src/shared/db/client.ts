import Dexie, { type EntityTable } from "dexie"
import type { CardProgress, DayLog, Profile, ReviewLog } from "./types.ts"

export const localProfileId = "local"

export type ProfileRow = Profile & {
  id: typeof localProfileId
}

export class SillonDatabase extends Dexie {
  profile!: EntityTable<ProfileRow, "id">
  progress!: EntityTable<CardProgress, "cardId">
  reviews!: EntityTable<ReviewLog, "id">
  days!: EntityTable<DayLog, "date">

  constructor(name = "sillon") {
    super(name)
    this.version(1).stores({
      profile: "id",
      progress: "cardId",
      reviews: "id",
      days: "date",
    })
  }
}

let current: SillonDatabase | null = null

export function getDatabase() {
  current ??= new SillonDatabase()
  return current
}
