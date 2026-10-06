import type { Card } from "../src/shared/content/types.ts"

export function validateCards(cards: Card[]): void {
  const seen = new Set<string>()

  for (const card of cards) {
    if (seen.has(card.id)) {
      throw new Error(`Identifiant en double : ${card.id}`)
    }
    seen.add(card.id)

    if (card.type === "mcq") {
      validateMcq(card)
    } else if (card.type === "cloze") {
      validateCloze(card)
    } else if (card.type === "order") {
      validateOrder(card)
    } else {
      validateReveal(card)
    }
  }
}

function validateMcq(card: Card): void {
  if (card.answer !== undefined) {
    throw new Error(`${card.id} : un QCM n'a pas de réponse à révéler`)
  }

  const choices = card.choices
  if (!choices || choices.length < 2) {
    throw new Error(`${card.id} : un QCM doit avoir au moins deux choix`)
  }

  const ids = new Set(choices.map((choice) => choice.id))
  if (ids.size !== choices.length) {
    throw new Error(`${card.id} : les choix doivent avoir des identifiants uniques`)
  }

  if (!card.correctChoiceId || !ids.has(card.correctChoiceId)) {
    throw new Error(`${card.id} : le bon choix doit être l'un des choix`)
  }

  if (card.steps !== undefined) {
    throw new Error(`${card.id} : un QCM n'a pas d'étapes`)
  }
}

function validateCloze(card: Card): void {
  if (!card.answer) {
    throw new Error(`${card.id} : une carte à trous doit avoir une réponse`)
  }

  if (card.choices !== undefined || card.correctChoiceId !== undefined || card.steps !== undefined) {
    throw new Error(`${card.id} : une carte à trous n'a pas de choix`)
  }

  if (card.prompt.split("____").length - 1 !== 1) {
    throw new Error(`${card.id} : une carte à trous doit contenir un seul ____`)
  }
}

function validateOrder(card: Card): void {
  if (card.answer !== undefined || card.choices !== undefined || card.correctChoiceId !== undefined) {
    throw new Error(`${card.id} : une carte d'ordre n'a ni réponse révélée ni choix`)
  }

  const steps = card.steps
  if (!steps || steps.length < 2) {
    throw new Error(`${card.id} : une carte d'ordre doit avoir au moins deux étapes`)
  }

  if (new Set(steps).size !== steps.length) {
    throw new Error(`${card.id} : les étapes doivent être distinctes`)
  }
}

function validateReveal(card: Card): void {
  if (!card.answer) {
    throw new Error(`${card.id} : une carte à révéler doit avoir une réponse`)
  }

  if (card.choices !== undefined || card.correctChoiceId !== undefined || card.steps !== undefined) {
    throw new Error(`${card.id} : une carte à révéler n'a pas de choix`)
  }
}
