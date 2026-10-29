---
id: py.str.slice.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.str.001
choices:
  - { id: a, text: "`'Py'`" }
  - { id: b, text: "`'Pyt'`" }
  - { id: c, text: "`'yt'`" }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "Début inclus, fin exclue. `s[:i] + s[i:]` reconstruit `s`."
common_mistake: "Inclure l'index de fin, comme un `substring` fermé à droite."
related: [py.str.index.001, py.str.oob.001]
---

Que vaut `'Python'[0:2]` ?

## Explication

Caractères 0 et 1, pas 2. Ce n'est pas `'Pyt'`, pas `'yt'`.
