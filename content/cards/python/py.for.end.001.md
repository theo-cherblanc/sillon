---
id: py.for.end.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.for.001
choices:
  - { id: a, text: "`[5, 6, 7, 8, 9]`" }
  - { id: b, text: "`[5, 6, 7, 8, 9, 10]`" }
  - { id: c, text: "`[0, 1, 2, 3, 4]`" }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "Début 5, fin 10 exclue. Sans `list()`, `range(5, 10)` s'affiche `range(5, 10)`."
common_mistake: "Inclure 10, ou oublier que le départ n'est plus 0."
related: [py.for.range.001, py.for.notlist.001]
---

Que vaut `list(range(5, 10))` ?

## Explication

5 inclus, 10 exclu. Ce n'est pas `range(5)` non plus.
