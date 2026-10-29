---
id: ts.fn.context.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.fn.001
choices:
  - { id: a, text: "Un callback passé à `forEach` sur `string[]` voit son paramètre typé `string` par le contexte." }
  - { id: b, text: "Un callback passé à `forEach` sur `string[]` voit son paramètre rester `any` sans annotation." }
  - { id: c, text: "Un callback passé à `forEach` sur `string[]` doit être une `function`, les flèches restant `any`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Même chose pour `(s) => s.toUpperCase()`. L'annotation sur `s` est souvent du bruit."
common_mistake: "Réécrire `: string` sur chaque callback « pour être strict »."
related: [ts.everyday.context.001, ts.check.infer.001]
---

Quel type a `s` dans `names.forEach(function (s) { ... })` si `names` est un `string[]` ?

## Explication

`string`, par typage contextuel. Pas `any`, et les flèches suivent la même règle.
