---
id: py.dict.tuple.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.dict.001
choices:
  - { id: a, text: "Un tuple est une suite immuable ; on l'indexe comme une liste, on n'écrase pas un élément." }
  - { id: b, text: "Un tuple est une liste qui s'écrit entre parenthèses, et reste mutable." }
  - { id: c, text: "Un tuple est un dictionnaire ordonné dont les clés sont 0, 1, 2." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "`t = 12345, 54321, 'hello!'` : les parenthèses sont souvent optionnelles. La virgule fait le tuple."
common_mistake: "Écrire `t[0] = 1` comme sur une liste."
related: [py.dict.single.001, py.list.mut.001]
---

Qu'est-ce qu'un tuple ?

## Explication

Une séquence figée. Pas une liste entre `()`, pas un dict d'indices.
