---
id: ts.narrow.guard.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.narrow.001
choices:
  - { id: a, text: "Le narrowing affine un type déclaré vers un type plus précis, d'après le flux du code." }
  - { id: b, text: "Le narrowing convertit la valeur au runtime, comme un cast qui change la représentation." }
  - { id: c, text: "Le narrowing élargit un littéral vers `any` dès qu'un `if` a été évalué." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
insight: "`if (typeof padding === \"number\")` : dans la branche, `padding` est un `number`. Rien n'a été converti."
common_mistake: "Croire qu'un type guard « transforme » l'objet, alors qu'il renseigne seulement le vérificateur."
related: [ts.narrow.typeof.001, ts.union.op.001]
---

Que fait le narrowing en TypeScript ?

## Explication

Il raffine le type connu dans une branche. Il ne convertit pas la valeur, et il n'élargit pas vers `any`.
