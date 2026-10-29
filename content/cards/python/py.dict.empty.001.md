---
id: py.dict.empty.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.dict.001
choices:
  - { id: a, text: "`{}` est un dict vide ; l'ensemble vide s'écrit `set()`." }
  - { id: b, text: "`{}` est un ensemble vide ; le dict vide s'écrit `dict()` uniquement." }
  - { id: c, text: "`{}` est interdit : Python exige `dict()` ou `set()`, jamais des accolades vides." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "Accolades avec des valeurs : set. Accolades avec `clé: valeur` : dict. Vides : dict."
common_mistake: "Écrire `s = {}` puis s'étonner que ce ne soit pas un `set`."
related: [py.dict.set.001, py.dict.key.001]
---

Que crée `{}` ?

## Explication

Un dictionnaire vide. Le `set` vide, c'est `set()`. Les accolades vides ne sont pas interdites.
