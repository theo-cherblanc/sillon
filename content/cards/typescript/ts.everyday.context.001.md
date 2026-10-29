---
id: ts.everyday.context.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.everyday.001
choices:
  - { id: a, text: "Le typage contextuel donne un type au paramètre d'un callback, d'après l'endroit de l'appel." }
  - { id: b, text: "Le typage contextuel force `any` sur tout callback, même passé à `forEach`." }
  - { id: c, text: "Le typage contextuel n'existe que pour les fonctions déclarées avec `function`, jamais les flèches." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Sur `string[].forEach`, `s` est un `string` sans annotation. Les flèches aussi."
common_mistake: "Réannoter chaque callback « pour que ce soit du vrai TypeScript »."
related: [ts.fn.context.001, ts.check.infer.001]
---

Que fait le typage contextuel sur une fonction anonyme ?

## Explication

Le contexte (`forEach` d'un `string[]`) fixe le type du paramètre. Ça marche aussi pour les flèches, et ça ne force pas `any`.
