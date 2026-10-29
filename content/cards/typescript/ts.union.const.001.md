---
id: ts.union.const.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.union.001
choices:
  - { id: a, text: "`const` d'une chaîne infère le littéral ; `let` infère `string`, parce que la variable peut changer." }
  - { id: b, text: "`const` et `let` infèrent tous les deux `string` dès que la valeur est une chaîne." }
  - { id: c, text: "`const` d'une chaîne infère `any` ; seul `let` garde le littéral, plus étroit." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "`const constantString: \"Hello World\"` : un seul habit possible. `let` doit pouvoir recevoir une autre chaîne."
common_mistake: "S'étonner qu'un `let` initialisé avec `\"GET\"` n'accepte plus d'être passé à `\"GET\" | \"POST\"`... en fait c'est l'inverse : il est trop large."
related: [ts.union.object.001, ts.union.literal.001]
---

Quelle inférence TypeScript fait-il pour une chaîne selon `const` ou `let` ?

## Explication

`const` fige le littéral. `let` s'élargit à `string`. Ce n'est pas `any`, et ce n'est pas `let` qui reste le plus étroit.
