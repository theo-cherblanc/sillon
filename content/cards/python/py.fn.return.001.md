---
id: py.fn.return.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.fn.001
choices:
  - { id: a, text: "`return` avec une expression rend cette valeur ; sans expression, ou en fin de corps, c'est `None`." }
  - { id: b, text: "`return` sans expression lève `SyntaxError` ; il faut toujours une valeur." }
  - { id: c, text: "`return` sans expression reprend la dernière expression évaluée, comme `_` en interactif." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "`fib2` construit une liste et la `return`. Tomber à la fin du `def` équivaut à `return None`."
common_mistake: "Compter sur « la dernière ligne » comme valeur de retour implicite, style Ruby."
related: [py.fn.none.001, py.fn.def.001]
---

Que fait `return` dans une fonction Python ?

## Explication

Il sort avec une valeur, ou `None`. Un `return` nu est légal. Ce n'est pas `_`.
