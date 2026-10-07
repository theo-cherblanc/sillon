export const cardTopics = [
  "javascript",
  "http",
  "web",
  "git",
  "docker",
  "shell",
  "architecture",
  "angular",
] as const

export type CardTopic = (typeof cardTopics)[number]

export const lessonHeadings = [
  "Le problème",
  "L'idée",
  "Un exemple",
  "Les pièges",
  "À retenir",
] as const

export type Card = {
  id: string
  type: "mcq" | "reveal" | "cloze" | "order" | "bug"
  topic: CardTopic
  tags: string[]
  difficulty: 1 | 2 | 3
  prompt: string
  explanation: string
  choices?: { id: string; text: string }[]
  correctChoiceId?: string
  answer?: string
  steps?: string[]
  lines?: string[]
  bugLine?: number
  source?: string
  insight?: string
  commonMistake?: string
  related?: string[]
  lessonId?: string
  deprecated?: boolean
}

export type Lesson = {
  id: string
  topic: CardTopic
  order: number
  title: string
  level: 1 | 2 | 3
  minutes: number
  source: string[]
  prerequisites: string[]
  needsReview?: boolean
  reviewNote?: string
  body: string
}
