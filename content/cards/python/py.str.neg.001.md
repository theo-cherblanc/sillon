---
id: py.str.neg.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.str.001
choices:
  - { id: a, text: "`'n'`" }
  - { id: b, text: "`'P'`" }
  - { id: c, text: "`'o'`" }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "`-1` est le dernier, `-2` l'avant-dernier. `-0` n'existe pas : c'est `0`."
common_mistake: "Lire `[-1]` comme « une erreur d'index »."
related: [py.str.index.001, py.str.slice.001]
---

Que vaut `'Python'[-1]` ?

## Explication

Les négatifs comptent depuis la fin. `'P'` est `[0]` ou `[-6]`. `'o'` est `[-2]`.
