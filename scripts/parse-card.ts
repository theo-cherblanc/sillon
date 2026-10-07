import { parse } from "yaml"
import { cardTopics, type Card } from "../src/shared/content/types.ts"

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
  if (front.steps !== undefined) {
    card.steps = readSteps(front.steps)
  }
  if (front.lines !== undefined) {
    card.lines = readLines(front.lines)
  }
  if (front.bugLine !== undefined) {
    card.bugLine = readBugLine(front.bugLine)
  }
  if (front.source !== undefined) {
    card.source = readSource(front.source)
  }
  if (front.insight !== undefined) {
    card.insight = readString(front.insight, "insight")
  }
  if (front.common_mistake !== undefined) {
    card.commonMistake = readString(front.common_mistake, "common_mistake")
  }
  if (front.related !== undefined) {
    card.related = readRelated(front.related)
  }
  if (front.lesson_id !== undefined) {
    card.lessonId = readString(front.lesson_id, "lesson_id")
  }
  if (front.deprecated !== undefined) {
    card.deprecated = readDeprecated(front.deprecated)
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
  if (typeof value === "string" && cardTopics.includes(value as Card["topic"])) {
    return value as Card["topic"]
  }
  throw new Error(
    'Le champ topic doit être "javascript", "http", "web", "git", "docker", "shell", "architecture" ou "angular"',
  )
}

function readType(value: unknown): Card["type"] {
  if (value === "mcq" || value === "reveal" || value === "cloze" || value === "order" || value === "bug") {
    return value
  }
  throw new Error('Le champ type doit être "mcq", "reveal", "cloze", "order" ou "bug"')
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

function readBugLine(value: unknown): number {
  if (typeof value !== "number" || !Number.isInteger(value) || value < 1) {
    throw new Error("Le champ bugLine doit être un numéro de ligne")
  }
  return value
}

function readTextList(value: unknown, field: string): string[] {
  if (!Array.isArray(value)) {
    throw new Error(`Le champ ${field} doit être une liste de textes`)
  }
  return value.map((item) => {
    if (typeof item !== "string" || item.trim().length === 0) {
      throw new Error(`Le champ ${field} doit être une liste de textes`)
    }
    return item.trim()
  })
}

function readSteps(value: unknown): string[] {
  return readTextList(value, "steps")
}

function readLines(value: unknown): string[] {
  return readTextList(value, "lines")
}

function readSource(value: unknown): string {
  const source = readString(value, "source")
  if (source.startsWith("http://") || source.startsWith("https://")) {
    let parsed: URL
    try {
      parsed = new URL(source)
    } catch {
      throw new Error("Le champ source doit être une URL utilisable")
    }
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      throw new Error("Le champ source doit être une URL utilisable")
    }
  }
  return source
}

function readRelated(value: unknown): string[] {
  const related = readTextList(value, "related")
  if (new Set(related).size !== related.length) {
    throw new Error("Le champ related ne doit pas répéter un identifiant")
  }
  return related
}

function readDeprecated(value: unknown): boolean {
  if (value !== true && value !== false) {
    throw new Error("Le champ deprecated doit être true ou false")
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
