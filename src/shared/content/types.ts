export const cardTopics = ["javascript", "http", "web", "git", "docker", "shell", "architecture"] as const

export type CardTopic = (typeof cardTopics)[number]

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
  deprecated?: boolean
}
