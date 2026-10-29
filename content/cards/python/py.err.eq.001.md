---
id: py.err.eq.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.err.001
choices:
  - { id: a, text: "Le tutoriel teste `None` avec `is` : `if L is None`, pas avec `==`." }
  - { id: b, text: "Le tutoriel teste `None` avec `==` seulement : `is` est réservé aux listes." }
  - { id: c, text: "Le tutoriel interdit de tester `None` : on écrit `if not L`, qui suffit toujours." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "Dans le remède au défaut mutable : `if L is None: L = []`. `if not L` prendrait aussi `[]` passé exprès."
common_mistake: "Écrire `if not L` et recréer une liste alors que l'appelant en a fourni une vide."
related: [py.fn.mutable.001, py.err.is.001]
---

Comment le tutoriel recommande-t-il de tester `None` ?

## Explication

`is None`. Pas `==` comme consigne de cette page, et pas `if not L` qui confond avec une liste vide.
