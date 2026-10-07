import { parse } from "yaml"
import { cardTopics, lessonHeadings, type Lesson } from "../src/shared/content/types.ts"

export function parseLesson(source: string): Lesson {
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!frontmatter) {
    throw new Error("La leçon doit commencer par un frontmatter YAML")
  }

  const raw = parse(frontmatter[1])
  if (raw === null || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error("Le frontmatter doit être un objet")
  }

  const front = raw as Record<string, unknown>
  const body = frontmatter[2].trim()
  if (!body) {
    throw new Error("La leçon doit contenir un texte")
  }
  for (const heading of lessonHeadings) {
    if (!body.includes(`## ${heading}`)) {
      throw new Error(`La leçon doit contenir le titre ## ${heading}`)
    }
  }

  const lesson: Lesson = {
    id: readString(front.id, "id"),
    topic: readTopic(front.topic),
    order: readOrder(front.order),
    title: readString(front.title, "title"),
    level: readLevel(front.level),
    minutes: readMinutes(front.minutes),
    source: readSources(front.source),
    prerequisites: front.prerequisites === undefined ? [] : readIds(front.prerequisites, "prerequisites"),
    body,
  }

  if (front.needs_review !== undefined) {
    lesson.needsReview = readFlag(front.needs_review, "needs_review")
  }
  if (front.review_note !== undefined) {
    lesson.reviewNote = readString(front.review_note, "review_note")
  }

  return lesson
}

function readString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Le champ ${field} doit être un texte`)
  }
  return value
}

function readTopic(value: unknown): Lesson["topic"] {
  if (typeof value === "string" && cardTopics.includes(value as Lesson["topic"])) {
    return value as Lesson["topic"]
  }
  throw new Error(
    'Le champ topic doit être "javascript", "http", "web", "git", "docker", "shell", "architecture" ou "angular"',
  )
}

function readOrder(value: unknown): number {
  if (typeof value !== "number" || !Number.isInteger(value) || value < 1) {
    throw new Error("Le champ order doit être un entier à partir de 1")
  }
  return value
}

function readLevel(value: unknown): Lesson["level"] {
  if (value === 1 || value === 2 || value === 3) {
    return value
  }
  throw new Error("Le champ level doit être 1, 2 ou 3")
}

function readMinutes(value: unknown): number {
  if (typeof value !== "number" || !Number.isInteger(value) || value < 1 || value > 15) {
    throw new Error("Le champ minutes doit être un entier entre 1 et 15")
  }
  return value
}

function readFlag(value: unknown, field: string): boolean {
  if (value !== true && value !== false) {
    throw new Error(`Le champ ${field} doit être true ou false`)
  }
  return value
}

function readIds(value: unknown, field: string): string[] {
  if (!Array.isArray(value)) {
    throw new Error(`Le champ ${field} doit être une liste de textes`)
  }
  const ids = value.map((item) => {
    if (typeof item !== "string" || item.trim().length === 0) {
      throw new Error(`Le champ ${field} doit être une liste de textes`)
    }
    return item.trim()
  })
  if (new Set(ids).size !== ids.length) {
    throw new Error(`Le champ ${field} ne doit pas répéter un identifiant`)
  }
  return ids
}

function readSources(value: unknown): string[] {
  const sources = readIds(value, "source")
  if (sources.length === 0) {
    throw new Error("Le champ source doit citer au moins une page")
  }
  for (const source of sources) {
    let parsed: URL
    try {
      parsed = new URL(source)
    } catch {
      throw new Error("Chaque source doit être une URL utilisable")
    }
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      throw new Error("Chaque source doit être une URL utilisable")
    }
  }
  return sources
}
