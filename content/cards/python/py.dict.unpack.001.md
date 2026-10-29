---
id: py.dict.unpack.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.dict.001
choices:
  - { id: a, text: "`x, y, z = t` dénomme les éléments d'un tuple (ou d'une séquence de même longueur)." }
  - { id: b, text: "`x, y, z = t` crée un nouveau tuple `t` à partir de trois variables déjà définies." }
  - { id: c, text: "`x, y, z = t` n'est légal que si `t` est un dict à trois clés." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "Unpacking : le tutoriel le montre dès `t = 12345, 54321, 'hello!'`. La longueur doit matcher."
common_mistake: "Lire ça comme une construction de tuple, pas une destructuration."
related: [py.if.assign.001, py.dict.tuple.001]
---

Que fait `x, y, z = t` ?

## Explication

Ça dépaquette. Ça ne construit pas `t`, et `t` n'a pas besoin d'être un dict.
