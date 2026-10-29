---
id: py.for.sum.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.for.001
choices:
  - { id: a, text: "`6`" }
  - { id: b, text: "`10`" }
  - { id: c, text: "`4`" }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "`0 + 1 + 2 + 3`. La fin 4 est exclue. `sum` prend un itérable, d'où `range` sans `list`."
common_mistake: "Ajouter 4, ou compter `1+2+3+4`."
related: [py.for.range.001, py.for.notlist.001]
---

Que vaut `sum(range(4))` ?

## Explication

`0+1+2+3`. Pas `10` (ça serait `range(5)`), pas `4`.
