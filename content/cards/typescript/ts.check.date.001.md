---
id: ts.check.date.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.check.001
choices:
  - { id: a, text: "une chaîne" }
  - { id: b, text: "un objet `Date`" }
  - { id: c, text: "`undefined`" }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
insight: "`new Date()` construit la date. `Date()` tout seul, en JavaScript, rend une string."
common_mistake: "Passer `Date()` à un paramètre typé `Date` : TypeScript le refuse, à raison."
related: [ts.check.static.001, ts.fn.param.001]
---

Que renvoie l'appel `Date()` sans `new`, en JavaScript ?

## Explication

L'appel sans `new` produit une chaîne. D'où l'erreur TypeScript si un paramètre attend un `Date` : il faut `new Date()`.
