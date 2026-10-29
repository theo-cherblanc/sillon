---
id: ts.util.readonly.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.util.001
choices:
  - { id: a, text: "`Readonly<Type>` interdit de réassigner les propriétés du type construit." }
  - { id: b, text: "`Readonly<Type>` rend les propriétés optionnelles, sans interdire l'écriture." }
  - { id: c, text: "`Readonly<Type>` appelle `Object.freeze` au runtime, et lève si on écrit quand même." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/utility-types.html
insight: "Le handbook lie ça à `Object.freeze` : le type décrit un échec d'assignation, le freeze est le runtime à part."
common_mistake: "Croire que `Readonly<T>` gèle l'objet JavaScript tout seul."
related: [ts.util.required.001, ts.check.runtime.001]
---

Que change `Readonly` sur un type objet ?

## Explication

Les champs ne se réassignent plus **dans le type**. Ce n'est pas `Partial`, et ce n'est pas un `freeze` automatique.
