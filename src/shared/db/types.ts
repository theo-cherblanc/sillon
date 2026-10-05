export type CardState = 0 | 1 | 2 | 3

export type StoredRating = "again" | "hard" | "good"

export type CardProgress = {
  cardId: string
  due: number
  stability: number
  difficulty: number
  elapsed_days: number
  scheduled_days: number
  learning_steps: number
  reps: number
  lapses: number
  state: CardState
  lastReview: number | null
  lastRating: StoredRating | null
  updatedAt: number
}

export type ReviewLog = {
  id: string
  cardId: string
  at: number
  rating: StoredRating
  mcqChoiceId: string | null
  mcqCorrect: boolean | null
  scheduledDays: number
  xp: number
  fromQueue: boolean
}

export type Profile = {
  schemaVersion: 1
  xp: number
  streak: number
  bestStreak: number
  lastCompletedDate: string | null
  dailyGoal: number
  newPerDay: number
  createdAt: number
}

export type DayLog = {
  date: string
  queueSize: number
  completed: number
  xp: number
  goalMet: boolean
}
