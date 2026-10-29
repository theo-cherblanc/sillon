---
id: py.for.range.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.for.001
choices:
  - { id: a, text: "`range(5)` produit `0, 1, 2, 3, 4` : la borne de fin n'appartient pas à la suite." }
  - { id: b, text: "`range(5)` produit `1, 2, 3, 4, 5` : la borne de fin est incluse, comme en maths." }
  - { id: c, text: "`range(5)` produit `0, 1, 2, 3, 4, 5` : début et fin sont tous les deux inclus." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "`range(10)` : 10 valeurs, les indices légaux d'une séquence de longueur 10."
common_mistake: "Inclure la fin, puis avoir un tour de trop."
related: [py.for.end.001, py.for.notlist.001]
---

Quels nombres `range(5)` produit-il ?

## Explication

De 0 à 4. Pas 1–5, pas 0–5.
