import { localProfileId, type ProfileRow, type SillonDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import type { Profile } from "../../../shared/db/types.ts"

export const currentSchema = 1

type StoredProfile = Omit<Profile, "schemaVersion"> & {
  schemaVersion: number
}

export function migrate(from: StoredProfile, to: number): Profile {
  if (from.schemaVersion !== currentSchema || to !== currentSchema) {
    throw new Error("A migration can only stay on schema version 1")
  }
  return from as Profile
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
  if (next === stored) {
    return row
  }

  const saved: ProfileRow = { ...next, id: localProfileId }
  await database.profile.put(saved)
  return saved
}
