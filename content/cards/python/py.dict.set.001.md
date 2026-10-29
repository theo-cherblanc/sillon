---
id: py.dict.set.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.dict.001
choices:
  - { id: a, text: "Un `set` est une collection non ordonnée, sans doublons, où `in` est rapide." }
  - { id: b, text: "Un `set` est une liste qui refuse `append`, mais garde l'ordre et les doublons." }
  - { id: c, text: "Un `set` est un dictionnaire dont les valeurs sont toujours `True`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "`{'apple', 'orange', 'apple'}` ne garde qu'un `'apple'`. Idéal pour `in`."
common_mistake: "Compter sur l'ordre d'insertion comme sur une liste (pas le sujet du tutoriel ici)."
related: [py.dict.empty.001, py.fn.in.001]
---

Qu'est-ce qu'un ensemble (`set`) ?

## Explication

Unique, sans ordre promis par cette page. Pas une liste bridée, pas un dict de `True`.
