---
id: py.fn.doc.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.fn.001
choices:
  - { id: a, text: "La première instruction du corps peut être une chaîne : c'est la docstring." }
  - { id: b, text: "La docstring s'écrit avec `#` au-dessus du `def`, comme un commentaire de module." }
  - { id: c, text: "La docstring est obligatoire : sans elle, `def` est une `SyntaxError`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "`\"\"\"Return a list containing the Fibonacci series up to n.\"\"\"` juste sous `def fib2(n):`."
common_mistake: "Mettre la doc en commentaire `#` : ce n'est pas `__doc__`."
related: [py.fn.def.001, py.num.hash.001]
---

Où s'écrit la chaîne de documentation d'une fonction ?

## Explication

Première instruction du corps, une `str`. Pas un `#` au-dessus, et ce n'est pas obligatoire pour parser.
