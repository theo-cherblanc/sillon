---
id: ts.fn.expr.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.fn.001
choices:
  - { id: a, text: "Une expression de type fonction s'écrit `(a: string) => void`." }
  - { id: b, text: "Une expression de type fonction s'écrit `function(a: string): void`, comme une déclaration." }
  - { id: c, text: "Une expression de type fonction s'écrit `string => void`, sans parenthèses autour du paramètre." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/functions.html
insight: "C'est le type, pas le corps. On s'en sert pour typer une variable ou un paramètre callback."
common_mistake: "Oublier les parenthèses : `a: string => void` se parse autrement."
related: [ts.fn.void.001, ts.fn.param.001]
---

Comment s'écrit le type d'une fonction qui prend un `string` et ne rend rien d'utilisable ?

## Explication

`(a: string) => void`. Pas le mot `function` dans le type, et les parenthèses autour du paramètre restent.
