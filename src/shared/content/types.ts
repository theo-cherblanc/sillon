export type Card = {
  id: string
  type: "mcq" | "reveal"
  topic: "javascript"
  tags: string[]
  difficulty: 1 | 2 | 3
  prompt: string
  explanation: string
  choices?: { id: string; text: string }[]
  correctChoiceId?: string
  answer?: string
}
