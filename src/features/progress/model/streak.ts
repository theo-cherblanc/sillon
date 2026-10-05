export type StreakState = {
  streak: number
  bestStreak: number
  lastCompletedDate: string | null
}

export type StreakDay = {
  date: string
  queueSize: number
  completed: number
  closed: boolean
}

const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/

function assertDate(date: string) {
  const match = datePattern.exec(date)
  if (!match) {
    throw new Error("A streak date must be YYYY-MM-DD")
  }

  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  const parsed = new Date(Date.UTC(year, month - 1, day))
  if (
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    throw new Error("A streak date must be YYYY-MM-DD")
  }
}

function assertCount(value: number, name: string) {
  if (!Number.isInteger(value) || value < 0) {
    throw new Error(`A streak day needs a ${name} of zero or more`)
  }
}

function assertState(current: StreakState) {
  if (
    !Number.isInteger(current.streak) ||
    current.streak < 0 ||
    !Number.isInteger(current.bestStreak) ||
    current.bestStreak < 0
  ) {
    throw new Error("A streak and its record need whole numbers of zero or more")
  }

  if (current.bestStreak < current.streak) {
    throw new Error("A streak cannot exceed its record")
  }

  if (current.lastCompletedDate !== null) {
    assertDate(current.lastCompletedDate)
  }
}

function finished(day: StreakDay) {
  return day.queueSize > 0 && day.completed === day.queueSize
}

export function settleStreak(current: StreakState, day: StreakDay): StreakState {
  assertState(current)
  assertDate(day.date)
  assertCount(day.queueSize, "queue size")
  assertCount(day.completed, "completed count")

  if (day.completed > day.queueSize) {
    throw new Error("A streak day cannot complete more cards than the queue")
  }

  if (current.lastCompletedDate !== null && day.date < current.lastCompletedDate) {
    throw new Error("A streak day cannot be settled before the last completion")
  }

  if (current.lastCompletedDate === day.date) {
    return current
  }

  if (finished(day)) {
    const streak = current.streak + 1
    return {
      streak,
      bestStreak: Math.max(current.bestStreak, streak),
      lastCompletedDate: day.date,
    }
  }

  if (!day.closed || day.queueSize === 0) {
    return current
  }

  return {
    streak: 0,
    bestStreak: current.bestStreak,
    lastCompletedDate: current.lastCompletedDate,
  }
}
