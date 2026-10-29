---
id: py.for.in.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.for.001
choices:
  - { id: a, text: "`for` parcourt les éléments d'une séquence, dans l'ordre où ils apparaissent." }
  - { id: b, text: "`for` compte toujours de 0 à n-1 ; pour une liste, on écrit `for i in len(words)`." }
  - { id: c, text: "`for` parcourt les indices par défaut ; l'élément s'obtient ensuite par `words[w]`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "`for w in words: print(w, len(w))` : `w` est déjà `'cat'`, pas `0`."
common_mistake: "Importer le `for (i=0; ...)` du C et oublier que `in` donne l'élément."
related: [py.for.range.001, py.if.while.001]
---

Que parcourt `for w in words` ?

## Explication

Les éléments, dans l'ordre. Pas un compteur obligatoire, pas les indices par défaut.
