import type { Card, Lesson } from "../src/shared/content/types.ts"

export function validateCards(cards: Card[], lessons: Lesson[] = []): void {
  const cardIds = new Set<string>()
  const lessonIds = new Set<string>()

  for (const lesson of lessons) {
    if (lessonIds.has(lesson.id)) {
      throw new Error(`Identifiant de leçon en double : ${lesson.id}`)
    }
    lessonIds.add(lesson.id)
  }

  for (const lesson of lessons) {
    for (const id of lesson.prerequisites) {
      if (id === lesson.id) {
        throw new Error(`${lesson.id} : prerequisites ne peut pas se citer elle-même`)
      }
      if (!lessonIds.has(id)) {
        throw new Error(`${lesson.id} : prerequisites cite une leçon inconnue (${id})`)
      }
    }
  }

  for (const card of cards) {
    if (cardIds.has(card.id)) {
      throw new Error(`Identifiant en double : ${card.id}`)
    }
    cardIds.add(card.id)

    if (card.type === "mcq") {
      validateMcq(card)
    } else if (card.type === "cloze") {
      validateCloze(card)
    } else if (card.type === "order") {
      validateOrder(card)
    } else if (card.type === "bug") {
      validateBug(card)
    } else {
      validateReveal(card)
    }
  }

  for (const card of cards) {
    validateNotes(card, cardIds)
    if (card.lessonId && !lessonIds.has(card.lessonId)) {
      throw new Error(`${card.id} : lesson_id cite une leçon inconnue (${card.lessonId})`)
    }
  }
}

function validateNotes(card: Card, ids: Set<string>): void {
  if (card.related) {
    for (const id of card.related) {
      if (id === card.id) {
        throw new Error(`${card.id} : related ne peut pas se citer elle-même`)
      }
      if (!ids.has(id)) {
        throw new Error(`${card.id} : related cite une carte inconnue (${id})`)
      }
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

  if (card.steps !== undefined || card.lines !== undefined || card.bugLine !== undefined) {
    throw new Error(`${card.id} : un QCM n'a pas d'étapes`)
  }
}

function validateCloze(card: Card): void {
  if (!card.answer) {
    throw new Error(`${card.id} : une carte à trous doit avoir une réponse`)
  }

  if (card.choices !== undefined || card.correctChoiceId !== undefined || card.steps !== undefined || card.lines !== undefined || card.bugLine !== undefined) {
    throw new Error(`${card.id} : une carte à trous n'a pas de choix`)
  }

  if (card.prompt.split("____").length - 1 !== 1) {
    throw new Error(`${card.id} : une carte à trous doit contenir un seul ____`)
  }
}

function validateOrder(card: Card): void {
  if (card.answer !== undefined || card.choices !== undefined || card.correctChoiceId !== undefined || card.lines !== undefined || card.bugLine !== undefined) {
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

function validateBug(card: Card): void {
  if (card.answer !== undefined || card.choices !== undefined || card.correctChoiceId !== undefined || card.steps !== undefined) {
    throw new Error(`${card.id} : une carte trouve-le-bug n'a ni réponse révélée, ni choix, ni étapes`)
  }

  const lines = card.lines
  if (!lines || lines.length < 2) {
    throw new Error(`${card.id} : une carte trouve-le-bug doit avoir au moins deux lignes`)
  }

  if (card.bugLine === undefined || card.bugLine > lines.length) {
    throw new Error(`${card.id} : la ligne fausse doit être l'une des lignes`)
  }
}

function validateReveal(card: Card): void {
  if (!card.answer) {
    throw new Error(`${card.id} : une carte à révéler doit avoir une réponse`)
  }

  if (card.choices !== undefined || card.correctChoiceId !== undefined || card.steps !== undefined || card.lines !== undefined || card.bugLine !== undefined) {
    throw new Error(`${card.id} : une carte à révéler n'a pas de choix`)
  }
}
