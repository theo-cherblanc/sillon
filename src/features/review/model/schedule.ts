import { createEmptyCard, fsrs, Rating, type Card, type Grade } from "ts-fsrs"

const scheduler = fsrs({ enable_fuzz: false })

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
