import { parse } from "yaml"
import type { Card } from "../src/shared/content/types.ts"

export function parseCard(source: string): Card {
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!frontmatter) {
    throw new Error("La carte doit commencer par un frontmatter YAML")
  }

  const raw = parse(frontmatter[1])
  if (raw === null || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error("Le frontmatter doit être un objet")
  }

  const front = raw as Record<string, unknown>
  const sections = splitBody(frontmatter[2])

  const card: Card = {
    id: readString(front.id, "id"),
    type: readType(front.type),
    topic: readTopic(front.topic),
    tags: readTags(front.tags),
    difficulty: readDifficulty(front.difficulty),
    prompt: sections.prompt,
    explanation: sections.explanation,
  }

  if (front.choices !== undefined) {
    card.choices = readChoices(front.choices)
  }
  if (front.correctChoiceId !== undefined) {
    card.correctChoiceId = readString(front.correctChoiceId, "correctChoiceId")
  }
  if (sections.answer !== undefined) {
    card.answer = sections.answer
  }

  return card
}

function splitBody(body: string): {
  prompt: string
  answer?: string
  explanation: string
} {
  const lines = body.split("\n")
  const explanationAt = lines.indexOf("## Explication")
  if (explanationAt === -1) {
    throw new Error("La carte doit contenir un titre ## Explication")
  }

  const answerAt = lines.indexOf("## Réponse")
  if (answerAt > explanationAt) {
    throw new Error("Le titre ## Réponse doit précéder ## Explication")
  }

  const promptEnd = answerAt === -1 ? explanationAt : answerAt
  const prompt = lines.slice(0, promptEnd).join("\n").trim()
  const explanation = lines.slice(explanationAt + 1).join("\n").trim()
  if (!prompt) {
    throw new Error("La carte doit contenir une question")
  }
  if (!explanation) {
    throw new Error("La carte doit contenir une explication")
  }

  if (answerAt === -1) {
    return { prompt, explanation }
  }

  const answer = lines.slice(answerAt + 1, explanationAt).join("\n").trim()
  if (!answer) {
    throw new Error("La carte doit contenir une réponse")
  }

  return { prompt, answer, explanation }
}

function readString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Le champ ${field} doit être un texte`)
  }
  return value
}

function readTopic(value: unknown): Card["topic"] {
  if (value === "javascript") {
    return value
  }
  throw new Error('Le champ topic doit être "javascript"')
}

function readType(value: unknown): Card["type"] {
  if (value === "mcq" || value === "reveal") {
    return value
  }
  throw new Error('Le champ type doit être "mcq" ou "reveal"')
}

function readDifficulty(value: unknown): Card["difficulty"] {
  if (value === 1 || value === 2 || value === 3) {
    return value
  }
  throw new Error("Le champ difficulty doit être 1, 2 ou 3")
}

function readTags(value: unknown): string[] {
  if (!Array.isArray(value) || value.some((tag) => typeof tag !== "string")) {
    throw new Error("Le champ tags doit être une liste de textes")
  }
  return value
}

function readChoices(value: unknown): NonNullable<Card["choices"]> {
  if (!Array.isArray(value)) {
    throw new Error("Le champ choices doit être une liste")
  }

  return value.map((choice) => {
    if (choice === null || typeof choice !== "object") {
      throw new Error("Chaque choix doit être un objet")
    }
    const record = choice as Record<string, unknown>
    return {
      id: readString(record.id, "choices.id"),
      text: readString(record.text, "choices.text"),
    }
  })
}
