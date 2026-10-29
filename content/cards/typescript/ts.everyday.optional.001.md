---
id: ts.everyday.optional.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.everyday.001
choices:
  - { id: a, text: "Une propriété optionnelle s'écrit avec `?` après le nom, et peut valoir `undefined`." }
  - { id: b, text: "Une propriété optionnelle s'écrit avec `?` avant le type, et ne peut plus être absente." }
  - { id: c, text: "Une propriété optionnelle s'écrit en union avec `any`, sans marqueur `?`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Lire `obj.last.toUpperCase()` sans test : TypeScript prévient, `last` peut manquer."
common_mistake: "Appeler une méthode sur `last?` sans `?.` ni `if`."
related: [ts.union.null.001, ts.fn.optional.001]
---

Comment déclare-t-on une propriété d'objet que l'on peut omettre ?

## Explication

`last?: string` : le champ peut être absent, donc `undefined` à la lecture. Ce n'est pas un `any`, et le `?` se met après le nom.
