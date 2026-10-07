import { localProfileId, type ProfileRow, type SillonDatabase } from "./client.ts"

export const defaultDailyGoal = 10
export const defaultNewPerDay = 5

export async function ensureProfile(
  database: SillonDatabase,
  createdAt: number,
): Promise<ProfileRow> {
  if (!Number.isFinite(createdAt)) {
    throw new Error("A profile needs a finite creation time")
  }

  try {
    return await database.transaction("rw", database.profile, async () => {
      const existing = await database.profile.get(localProfileId)
      if (existing) {
        return existing
      }

      const profile: ProfileRow = {
        id: localProfileId,
        schemaVersion: 2,
        xp: 0,
        streak: 0,
        bestStreak: 0,
        lastCompletedDate: null,
        dailyGoal: defaultDailyGoal,
        newPerDay: defaultNewPerDay,
        createdAt,
      }
      await database.profile.add(profile)
      return profile
    })
  } catch (error) {
    if (!(error instanceof Error) || error.name !== "ConstraintError") {
      throw error
    }

    const existing = await database.profile.get(localProfileId)
    if (!existing) {
      throw error
    }
    return existing
  }
}
