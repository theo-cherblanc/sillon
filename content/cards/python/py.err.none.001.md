---
id: py.err.none.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.err.001
choices:
  - { id: a, text: "`None` est la valeur bâtie qui représente l'absence ; une fonction sans `return` la rend." }
  - { id: b, text: "`None` est l'entier `0` sous un autre nom, vrai dans un `if`." }
  - { id: c, text: "`None` est une `SyntaxError` déguisée, levée si une variable manque." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "`print(fib(0))` affiche `None`. Une variable absente, elle, c'est `NameError`."
common_mistake: "Tester `if x` pour « a une valeur » et rater `[]` ou `0`, ou confondre avec une variable non définie."
related: [py.fn.none.001, py.err.is.001]
---

Que représente `None` ?

## Explication

L'absence de valeur, pas zéro, pas une erreur de parseur. Les fonctions « muettes » le rendent.
