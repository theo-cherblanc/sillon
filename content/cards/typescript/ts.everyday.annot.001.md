---
id: ts.everyday.annot.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.everyday.001
choices:
  - { id: a, text: "L'annotation de type se place après le nom, comme `let myName: string`." }
  - { id: b, text: "L'annotation de type se place avant le nom, comme `string myName` en C." }
  - { id: c, text: "L'annotation de type se place après `=`, autour de la valeur initiale seulement." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "TypeScript n'écrit pas `int x = 0`. Le type suit toujours la chose typée."
common_mistake: "Ramener la syntaxe « type à gauche » d'un autre langage."
related: [ts.check.infer.001, ts.fn.param.001]
---

Où s'écrit une annotation de type sur une variable ?

## Explication

Toujours après le nom. Pas à gauche comme en C, et pas collée à la seule valeur à droite du `=`.
