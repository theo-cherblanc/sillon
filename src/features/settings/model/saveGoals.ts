import { localProfileId, type ProfileRow, type SillonDatabase } from "../../../shared/db/client.ts"
import { dailyGoals } from "./goals.ts"

export async function saveDailyGoals(
  database: SillonDatabase,
  dailyGoal: number,
  newPerDay: number,
): Promise<ProfileRow> {
  const goals = dailyGoals(dailyGoal, newPerDay)
  return database.transaction("rw", database.profile, async () => {
    const profile = await database.profile.get(localProfileId)
    if (!profile) {
      throw new Error("Goals need a profile")
    }
    const next = { ...profile, ...goals }
    await database.profile.put(next)
    return next
  })
}
