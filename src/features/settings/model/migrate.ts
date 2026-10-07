import { localProfileId, type ProfileRow, type SillonDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { currentSchema, type Profile } from "../../../shared/db/types.ts"

export { currentSchema }

export type StoredProfile = Omit<Profile, "schemaVersion"> & {
  schemaVersion: number
}

export function migrate(from: StoredProfile, to: number): Profile {
  if (to !== currentSchema) {
    throw new Error("A migration can only target schema version 2")
  }
  if (from.schemaVersion === currentSchema) {
    return from as Profile
  }
  if (from.schemaVersion === 1) {
    return { ...from, schemaVersion: currentSchema }
  }
  throw new Error("An unknown schema cannot be opened")
}

export async function openMemory(database: SillonDatabase, createdAt: number): Promise<ProfileRow> {
  const row = await ensureProfile(database, createdAt)
  const stored: StoredProfile = {
    schemaVersion: row.schemaVersion,
    xp: row.xp,
    streak: row.streak,
    bestStreak: row.bestStreak,
    lastCompletedDate: row.lastCompletedDate,
    dailyGoal: row.dailyGoal,
    newPerDay: row.newPerDay,
    createdAt: row.createdAt,
  }
  const next = migrate(stored, currentSchema)
  if (next.schemaVersion === row.schemaVersion) {
    return row
  }

  const saved: ProfileRow = { ...next, id: localProfileId }
  await database.profile.put(saved)
  return saved
}
