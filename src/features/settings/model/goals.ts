export const maxDailyCount = 100

export function dailyGoals(dailyGoal: number, newPerDay: number): { dailyGoal: number; newPerDay: number } {
  assertCount(dailyGoal, "daily goal")
  assertCount(newPerDay, "new-card cap")
  return { dailyGoal, newPerDay }
}

function assertCount(value: number, name: string) {
  if (!Number.isInteger(value) || value < 0 || value > maxDailyCount) {
    throw new Error(`A ${name} must be a whole number from 0 to ${maxDailyCount}`)
  }
}
