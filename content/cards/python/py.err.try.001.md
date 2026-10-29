---
id: py.err.try.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.err.001
choices:
  - { id: a, text: "`try` s'exécute d'abord ; si l'exception nommée survient, on passe dans le `except`." }
  - { id: b, text: "`except` s'exécute d'abord, pour déclarer les types ; puis `try` tourne sans risque." }
  - { id: c, text: "`try` et `except` s'exécutent tous les deux, à chaque fois, que l'erreur arrive ou non." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/errors.html
insight: "Sans exception, le `except` est sauté. Un autre type d'exception remonte."
common_mistake: "Croire que le `except` « prépare » le `try`."
related: [py.err.first.001, py.err.exc.001]
---

Dans quel ordre s'exécute `try` / `except` ?

## Explication

D'abord le `try`. Le `except` seulement si ça casse du bon type. Pas les deux à chaque fois.
