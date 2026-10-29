---
id: ts.union.literal.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.union.001
choices:
  - { id: a, text: "Une union de littéraux ferme un jeu de valeurs, comme `\"left\" | \"right\" | \"center\"`." }
  - { id: b, text: "Une union de littéraux élargit le type à `string` dès qu'il y a plus d'un membre." }
  - { id: c, text: "Une union de littéraux n'existe que pour les nombres, les chaînes restant toujours `string`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "`printText(s, \"centre\")` est refusé si l'union dit `\"center\"`. L'orthographe compte."
common_mistake: "Typer l'alignement `string` et laisser passer n'importe quel mot."
related: [ts.union.const.001, ts.union.bool.001]
---

À quoi sert une union de types littéraux ?

## Explication

Elle nomme les valeurs permises, chaînes ou nombres. Elle ne retombe pas sur `string` dès le deuxième membre.
