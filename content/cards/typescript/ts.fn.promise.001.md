---
id: ts.fn.promise.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.fn.001
choices:
  - { id: a, text: "Une fonction async qui rend un nombre s'annote `Promise<number>`, pas `number`." }
  - { id: b, text: "Une fonction async qui rend un nombre s'annote `number`, `async` impliquant déjà la Promise." }
  - { id: c, text: "Une fonction async qui rend un nombre s'annote `any`, car le type de Promise n'est pas exprimable." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Le handbook : if you want to annotate the return type of a function which returns a promise, use the `Promise` type."
common_mistake: "Écrire `: number` sur un `async` et s'étonner que ce ne soit pas assignable à `number`."
related: [ts.fn.return.001, ts.util.exclude.001]
---

Comment annote-t-on le retour d'une fonction qui rend une Promise de nombre ?

## Explication

`Promise<number>`. `async` ne dispense pas d'écrire `Promise` dans l'annotation. Ce n'est pas `any`.
