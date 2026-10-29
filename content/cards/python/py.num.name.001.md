---
id: py.num.name.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.num.001
choices:
  - { id: a, text: "Lire une variable jamais assignée lève `NameError`." }
  - { id: b, text: "Lire une variable jamais assignée vaut `None`." }
  - { id: c, text: "Lire une variable jamais assignée vaut `0`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "`n  # try to access an undefined variable` → `NameError: name 'n' is not defined`."
common_mistake: "Attendre `None` ou `undefined`, comme un champ JS manquant."
related: [py.fn.none.001, py.err.exc.001]
---

Que se passe-t-il si on utilise `n` sans l'avoir défini ?

## Explication

Une exception `NameError`. Ce n'est pas `None`, ce n'est pas zéro.
