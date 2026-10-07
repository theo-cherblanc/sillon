import assert from "node:assert/strict"
import { after, describe, it } from "node:test"
import Dexie from "dexie"
import fakeIndexedDB, { IDBKeyRange } from "fake-indexeddb"
import type { Card } from "../../../shared/content/types.ts"
import { localProfileId, SillonDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { localDate } from "../../../shared/lib/dates.ts"
import { recordGrade } from "./record.ts"

Dexie.dependencies.indexedDB = fakeIndexedDB
Dexie.dependencies.IDBKeyRange = IDBKeyRange

const database = new SillonDatabase("sillon-record-test")
const now = new Date("2026-10-05T08:00:00.000Z")

const card: Card = {
  id: "js.async.001",
  type: "mcq",
  topic: "javascript",
  tags: ["async"],
  difficulty: 2,
  prompt: "Question",
  explanation: "Parce que.",
  choices: [{ id: "b", text: "A, puis C, puis B" }],
  correctChoiceId: "b",
}

describe("recordGrade", () => {
  after(async () => {
    await database.delete()
  })

  it("saves the next due time, the review, and the XP", async () => {
    await ensureProfile(database, now.getTime())
    const next = await recordGrade(database, {
      card,
      progress: null,
      choice: "knew",
      mcqChoiceId: "b",
      mcqCorrect: true,
      now,
      reviewId: "review-1",
    })

    assert.equal(next.due, now.getTime() + 10 * 60_000)
    assert.deepEqual(await database.progress.get(card.id), next)
    assert.equal((await database.reviews.get("review-1"))?.xp, 20)
    assert.equal((await database.profile.get(localProfileId))?.xp, 20)
    assert.equal((await database.profile.get(localProfileId))?.streak, 0)
    assert.equal(await database.days.count(), 0)
  })

  it("adds XP on top of the profile instead of replacing it", async () => {
    await recordGrade(database, {
      card,
      progress: await database.progress.get(card.id) ?? null,
      choice: "hesitated",
      mcqChoiceId: "b",
      mcqCorrect: true,
      now: new Date(now.getTime() + 60_000),
      reviewId: "review-2",
    })

    assert.equal((await database.profile.get(localProfileId))?.xp, 30)
    assert.equal(await database.reviews.count(), 2)
    assert.equal((await database.profile.get(localProfileId))?.streak, 0)
  })
})

describe("recordGrade for a card opened from the library", () => {
  const opened = new SillonDatabase("sillon-record-library-test")
  const extra: Card = { ...card, id: "js.async.003" }

  after(async () => {
    await opened.delete()
  })

  it("schedules the card without XP, streak, or a finished day", async () => {
    await ensureProfile(opened, now.getTime())
    const next = await recordGrade(opened, {
      card: extra,
      progress: null,
      choice: "knew",
      mcqChoiceId: "b",
      mcqCorrect: true,
      now,
      reviewId: "review-library",
      fromQueue: false,
    })

    assert.equal(next.due, now.getTime() + 10 * 60_000)
    assert.equal((await opened.reviews.get("review-library"))?.fromQueue, false)
    assert.equal((await opened.reviews.get("review-library"))?.xp, 0)
    assert.equal((await opened.profile.get(localProfileId))?.xp, 0)
    assert.equal((await opened.profile.get(localProfileId))?.streak, 0)
    assert.equal(await opened.days.count(), 0)
  })
})

describe("recordGrade when the queue is finished", () => {
  const finished = new SillonDatabase("sillon-record-day-test")
  const dayCard: Card = { ...card, id: "js.async.002", difficulty: 1 }

  after(async () => {
    await finished.delete()
  })

  it("raises the streak and writes the day with the last card", async () => {
    await ensureProfile(finished, now.getTime())
    await recordGrade(finished, {
      card: dayCard,
      progress: null,
      choice: "knew",
      mcqChoiceId: "b",
      mcqCorrect: true,
      now,
      reviewId: "review-day",
      finishesQueue: true,
      queueSize: 1,
    })

    const date = localDate(now)
    const profile = await finished.profile.get(localProfileId)
    assert.equal(profile?.streak, 1)
    assert.equal(profile?.bestStreak, 1)
    assert.equal(profile?.lastCompletedDate, date)
    assert.equal(profile?.xp, 10)
    assert.deepEqual(await finished.days.get(date), {
      date,
      queueSize: 1,
      completed: 1,
      xp: 10,
      goalMet: true,
    })
  })

  it("keeps the streak when the same day is finished again", async () => {
    await recordGrade(finished, {
      card: dayCard,
      progress: await finished.progress.get(dayCard.id) ?? null,
      choice: "knew",
      mcqChoiceId: "b",
      mcqCorrect: true,
      now: new Date(now.getTime() + 60_000),
      reviewId: "review-day-2",
      finishesQueue: true,
      queueSize: 1,
    })

    const profile = await finished.profile.get(localProfileId)
    assert.equal(profile?.streak, 1)
    assert.equal(profile?.xp, 20)
    assert.equal((await finished.days.get(localDate(now)))?.xp, 10)
    assert.equal(await finished.days.count(), 1)
  })

  it("rejects finishing the day with a card opened outside the queue", async () => {
    await assert.rejects(
      () =>
        recordGrade(finished, {
          card: dayCard,
          progress: null,
          choice: "knew",
          mcqChoiceId: "b",
          mcqCorrect: true,
          now,
          fromQueue: false,
          finishesQueue: true,
          queueSize: 1,
        }),
      /day's queue/,
    )
  })

  it("rejects a finished queue with no cards", async () => {
    await assert.rejects(
      () =>
        recordGrade(finished, {
          card: dayCard,
          progress: null,
          choice: "knew",
          mcqChoiceId: "b",
          mcqCorrect: true,
          now,
          finishesQueue: true,
          queueSize: 0,
        }),
      /at least one card/,
    )
  })
})