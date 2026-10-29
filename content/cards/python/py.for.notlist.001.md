---
id: py.for.notlist.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.for.001
choices:
  - { id: a, text: "`range(10)` n'est pas une liste : c'est un itérable qui donne les valeurs à la demande." }
  - { id: b, text: "`range(10)` est une liste `[0, ..., 9]`, construite entièrement en mémoire." }
  - { id: c, text: "`range(10)` est un entier, égal à 10, que `for` déballe ensuite." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "`print(range(10))` affiche `range(0, 10)`. `list(...)` matérielise. `sum(range(4))` vaut 6."
common_mistake: "Attendre `[0, 1, ..., 9]` dès qu'on affiche un `range`."
related: [py.for.range.001, py.for.sum.001]
---

`range(10)` est-il une liste ?

## Explication

Non : un itérable. Pas une liste en mémoire, pas l'entier 10.
