---
id: py.dict.key.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.dict.001
choices:
  - { id: a, text: "Un dict associe des clés uniques à des valeurs ; `tel['guido'] = 4127` ajoute ou remplace." }
  - { id: b, text: "Un dict associe des valeurs uniques à des clés ; deux clés ne peuvent pas partager une valeur." }
  - { id: c, text: "Un dict refuse l'assignation `tel['guido'] = 4127` si la clé n'existait pas encore." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "`del tel['sape']` retire une paire. `list(tel)` liste les clés, dans l'ordre d'insertion."
common_mistake: "Exiger `append` pour ajouter une clé, comme sur une liste."
related: [py.dict.in.001, py.dict.items.001]
---

Comment un dictionnaire stocke-t-il les données ?

## Explication

Clé → valeur, clés uniques. Une nouvelle clé s'écrit par assignation. Les valeurs, elles, peuvent se répéter.
