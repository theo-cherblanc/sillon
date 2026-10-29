---
id: ts.fn.param.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.fn.001
choices:
  - { id: a, text: "L'annotation d'un paramètre suit le nom, et les arguments passés sont alors vérifiés." }
  - { id: b, text: "L'annotation d'un paramètre précède le nom, comme `function greet(string name)`." }
  - { id: c, text: "L'annotation d'un paramètre est ignorée à l'appel : seul le nombre d'arguments compte." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "`greet(42)` : Argument of type 'number' is not assignable to parameter of type 'string'."
common_mistake: "Remettre le type à gauche, syntaxe d'un autre langage."
related: [ts.everyday.annot.001, ts.fn.return.001]
---

Où s'écrit le type d'un paramètre de fonction ?

## Explication

Après le nom : `name: string`. Les appels sont checkés. Ce n'est pas `string name`, et l'annotation n'est pas décorative.
