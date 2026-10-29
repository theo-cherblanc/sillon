---
id: py.fn.none.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.fn.001
choices:
  - { id: a, text: "Une fonction sans `return` rend `None` ; `print(fib(0))` l'affiche." }
  - { id: b, text: "Une fonction sans `return` ne rend rien, et `print(fib(0))` lève `TypeError`." }
  - { id: c, text: "Une fonction sans `return` rend `0`, comme une procédure C qui oublie le `return`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "Même une « procédure » qui ne fait que `print` a une valeur : `None`. L'interpréteur la cache, `print` non."
common_mistake: "Croire qu'il n'y a pas de valeur, puis chaîner `fib(0).append(...)`."
related: [py.fn.return.001, py.list.sort.001]
---

Que rend une fonction Python qui n'a pas d'instruction `return` ?

## Explication

`None`. Ce n'est pas une absence qui casse `print`, et ce n'est pas `0`.
