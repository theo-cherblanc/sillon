---
id: py.list.comp.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.list.001
choices:
  - { id: a, text: "Une compréhension `[x**2 for x in range(10)]` construit une nouvelle liste de carrés." }
  - { id: b, text: "Une compréhension `[x**2 for x in range(10)]` mute `range` en remplaçant chaque entier." }
  - { id: c, text: "Une compréhension `[x**2 for x in range(10)]` rend un `range` paresseux, pas une liste." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "Équivalent du `for` qui `append`. Le `for` seul laisse `x` vivant après la boucle ; la compréhension, non de la même façon."
common_mistake: "Croire que les crochets fabriquent un générateur (`(...)`) ou mutent `range`."
related: [py.for.range.001, py.list.append.001]
---

Que produit `[x**2 for x in range(10)]` ?

## Explication

Une liste nouvelle. `range` n'est pas muté, et le résultat n'est pas un itérable paresseux.
