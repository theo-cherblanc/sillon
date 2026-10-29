---
id: ts.narrow.repeat.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.narrow.001
choices:
  - { id: a, text: "`repeat` attend un `number` ; tant que `padding` est `number | string`, l'argument est refusé." }
  - { id: b, text: "`repeat` attend un `string` ; tant que `padding` est `number | string`, l'argument est refusé." }
  - { id: c, text: "`repeat` accepte l'union ; TypeScript refuse seulement parce que `padding` pourrait être `null`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
insight: "Le handbook appelle `\" \".repeat(padding)`. D'où le garde `typeof padding === \"number\"` avant."
common_mistake: "Inverser : croire que `repeat` veut la chaîne `padding`, alors qu'ici c'est le nombre d'espaces."
related: [ts.union.op.001, ts.narrow.typeof.001]
---

Pourquoi `" ".repeat(padding)` est-il refusé tant que `padding` a le type `number | string` ?

## Explication

`String.prototype.repeat` prend un nombre. L'union n'est pas un `number`. Ce n'est pas un souci de `null` dans cet exemple.
