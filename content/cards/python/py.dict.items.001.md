---
id: py.dict.items.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.dict.001
choices:
  - { id: a, text: "`items()` fournit les paires `(clé, valeur)` pour un `for`." }
  - { id: b, text: "`items()` fournit seulement les valeurs ; les clés s'obtiennent par `keys()` obligatoire." }
  - { id: c, text: "`items()` fournit un tuple unique `(dict, length)`, pas une boucle de paires." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "`for k, v in tel.items(): print(k, v)`. `list(tel)` suffit si on ne veut que les clés."
common_mistake: "Boucler `for v in tel` en croyant tenir les valeurs : on tient les clés."
related: [py.dict.unpack.001, py.dict.in.001]
---

À quoi sert `dict.items()` ?

## Explication

À parcourir les paires. Ce n'est pas « valeurs seules », ni un résumé `(dict, length)`.
