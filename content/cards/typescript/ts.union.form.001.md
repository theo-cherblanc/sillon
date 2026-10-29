---
id: ts.union.form.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.union.001
choices:
  - { id: a, text: "Une union `A | B` décrit une valeur qui peut être l'un des membres, pas les deux à la fois." }
  - { id: b, text: "Une union `A | B` décrit une valeur qui possède à la fois toutes les propriétés de `A` et de `B`." }
  - { id: c, text: "Une union `A | B` décrit un tableau dont les cases alternent un `A` et un `B`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Le « et » des propriétés, c'est l'intersection `A & B`. L'union, c'est « un ou l'autre »."
common_mistake: "Lire `|` comme un ET, parce que la valeur « a plusieurs types »."
related: [ts.union.op.001, ts.union.and.001]
---

Que décrit une union de types ?

## Explication

La valeur appartient à l'un des membres. Ce n'est pas l'intersection des formes, et ce n'est pas un tableau mixte.
