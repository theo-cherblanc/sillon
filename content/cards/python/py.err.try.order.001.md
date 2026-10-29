---
id: py.err.try.order.001
type: order
topic: python
tags: [python]
difficulty: 2
lesson_id: py.err.001
steps:
  - "Exécuter les instructions du `try`."
  - "Si une exception du type nommé survient, exécuter le `except`."
  - "Continuer après le bloc `try` / `except`."
source: https://docs.python.org/3/tutorial/errors.html
insight: "Sans exception, on saute le `except` et on arrive quand même après le bloc."
common_mistake: "Inverser : croire que le `except` s'enregistre avant que le `try` tourne."
related: [py.err.try.001, py.err.first.001]
---

Dans quel ordre le tutoriel décrit-il un `try` / `except` qui rattrape ?

## Explication

D'abord le `try`. Le `except` seulement en cas d'exception du bon type. Puis la suite du programme. Un autre type remonte, hors de cette séquence.
