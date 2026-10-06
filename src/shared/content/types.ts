export const cardTopics = ["javascript", "http", "web", "git", "docker", "shell", "architecture"] as const

export type CardTopic = (typeof cardTopics)[number]

export type Card = {
  id: string
  type: "mcq" | "reveal"
  topic: CardTopic
  tags: string[]
  difficulty: 1 | 2 | 3
  prompt: string
  explanation: string
  choices?: { id: string; text: string }[]
  correctChoiceId?: string
  answer?: string
}
