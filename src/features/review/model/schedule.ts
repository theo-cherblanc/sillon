import { createEmptyCard, fsrs, Rating, State, type Card, type Grade } from "ts-fsrs"
import type { CardProgress, CardState, StoredRating } from "../../../shared/db/types.ts"

const scheduler = fsrs({ enable_fuzz: false })

const fsrsRating = {
  again: Rating.Again,
  hard: Rating.Hard,
  good: Rating.Good,
} as const satisfies Record<StoredRating, Grade>

export type DelayPreview = {
  again: string
  hard: string
  good: string
}

const minute = 1
const hour = 60
const day = 24 * hour

export function formatDelay(minutes: number): string {
  if (!Number.isFinite(minutes) || minutes < 0) {
    throw new Error("A delay needs a finite number of minutes from now")
  }

  const rounded = Math.round(minutes)
  if (rounded < minute) {
    return "dans moins d'une minute"
  }
  if (rounded < hour) {
    return rounded === 1 ? "dans 1 minute" : `dans ${rounded} minutes`
  }
  if (rounded < day) {
    const hours = Math.round(rounded / hour)
    return hours === 1 ? "dans 1 heure" : `dans ${hours} heures`
  }

  const days = Math.round(rounded / day)
  if (days <= 1) {
    return "demain"
  }
  return `dans ${days} jours`
}

export function previewDelays(card: Card | null, now: Date): DelayPreview {
  if (Number.isNaN(now.getTime())) {
    throw new Error("A preview needs a valid date")
  }

  const current: Card = card ?? createEmptyCard(now)
  const preview = scheduler.repeat(current, now)
  const label = (grade: Grade) => {
    const due = preview[grade].card.due.getTime()
    return formatDelay((due - now.getTime()) / 60_000)
  }

  return {
    again: label(Rating.Again),
    hard: label(Rating.Hard),
    good: label(Rating.Good),
  }
}

function toSchedulerCard(progress: CardProgress, now: Date): Card {
  return {
    ...createEmptyCard(now),
    due: new Date(progress.due),
    stability: progress.stability,
    difficulty: progress.difficulty,
    elapsed_days: progress.elapsed_days,
    scheduled_days: progress.scheduled_days,
    learning_steps: progress.learning_steps,
    reps: progress.reps,
    lapses: progress.lapses,
    state: progress.state as State,
    last_review: progress.lastReview === null ? undefined : new Date(progress.lastReview),
  }
}

export function previewForProgress(progress: CardProgress | null, now: Date): DelayPreview {
  if (progress === null) {
    return previewDelays(null, now)
  }

  return previewDelays(toSchedulerCard(progress, now), now)
}

export function scheduleReview(
  progress: CardProgress | null,
  cardId: string,
  rating: StoredRating,
  now: Date,
): CardProgress {
  if (Number.isNaN(now.getTime())) {
    throw new Error("A review needs a valid date")
  }

  const current = progress ? toSchedulerCard(progress, now) : createEmptyCard(now)
  const next = scheduler.next(current, now, fsrsRating[rating]).card

  return {
    cardId,
    due: next.due.getTime(),
    stability: next.stability,
    difficulty: next.difficulty,
    elapsed_days: next.elapsed_days,
    scheduled_days: next.scheduled_days,
    learning_steps: next.learning_steps,
    reps: next.reps,
    lapses: next.lapses,
    state: next.state as CardState,
    lastReview: next.last_review?.getTime() ?? now.getTime(),
    lastRating: rating,
    updatedAt: now.getTime(),
  }
}
