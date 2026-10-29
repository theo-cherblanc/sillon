---
id: ts.union.object.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.union.001
choices:
  - { id: a, text: "Sur un objet, TypeScript infère souvent `string` pour un champ, pas le littéral `\"GET\"`." }
  - { id: b, text: "Sur un objet, TypeScript fige chaque champ au littéral, comme un `const` de primitive." }
  - { id: c, text: "Sur un objet, TypeScript refuse d'inférer : chaque champ vaut `any` tant qu'on n'annote pas." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "`{ method: \"GET\" }.method` peut être réécrit plus tard. D'où `string`, trop large pour `\"GET\" | \"POST\"`."
common_mistake: "Passer `req.method` à `handleRequest` sans `as const` ni annotation, et ne pas comprendre l'erreur."
related: [ts.union.const.001, ts.alias.as.001]
---

Pourquoi `{ method: "GET" }` ne suffit-il souvent pas pour un paramètre `"GET" | "POST"` ?

## Explication

Le champ est inféré `string`, parce qu'il pourra être réassigné. Ce n'est ni un littéral figé, ni `any`.
