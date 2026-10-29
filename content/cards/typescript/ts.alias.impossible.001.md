---
id: ts.alias.impossible.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.alias.001
choices:
  - { id: a, text: "TypeScript refuse `\"hello\" as number`, faute de recouvrement suffisant entre les deux types." }
  - { id: b, text: "TypeScript accepte `\"hello\" as number`, car toute assertion est un ordre donné au compilateur." }
  - { id: c, text: "TypeScript convertit `\"hello\" as number` en `NaN` au runtime, puis type le résultat `number`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Pour forcer, on passe par `unknown` ou `any`, puis le type voulu. Double assertion, toujours effacée."
common_mistake: "Enchaîner `as any as number` en croyant qu'un vrai nombre sortira à l'exécution."
related: [ts.alias.as.001, ts.everyday.any.001]
---

Que fait TypeScript face à `"hello" as number` ?

## Explication

Il refuse la coercition « impossible ». Il n'obéit pas aveuglément, et il n'émet pas un `NaN`.
