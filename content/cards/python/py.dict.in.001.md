---
id: py.dict.in.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.dict.001
choices:
  - { id: a, text: "`in` sur un dict teste une clé, pas une valeur." }
  - { id: b, text: "`in` sur un dict teste une valeur, pas une clé." }
  - { id: c, text: "`in` sur un dict teste une paire `(clé, valeur)` uniquement." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "`'guido' in tel` : oui. Le numéro `4127 in tel` : non, sauf s'il est aussi une clé."
common_mistake: "Chercher une valeur avec `in`, comme dans une liste."
related: [py.fn.in.001, py.dict.key.001]
---

Que teste `'guido' in tel` sur un dictionnaire ?

## Explication

La présence de la clé. Pas la valeur, pas la paire entière.
