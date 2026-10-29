---
id: py.if.assign.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.if.001
choices:
  - { id: a, text: "`a, b = b, a+b` évalue d'abord toute la droite, puis assigne : utile dans Fibonacci." }
  - { id: b, text: "`a, b = b, a+b` assigne `a = b` d'abord, donc `a+b` utilise déjà le nouveau `a`." }
  - { id: c, text: "`a, b = b, a+b` est une `SyntaxError` : Python n'assigne qu'une variable à la fois." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "Multiple assignment : the right-hand side expressions are all evaluated first."
common_mistake: "Lire ça comme deux lignes `a = b` puis `b = a+b` en impératif naïf."
related: [py.dict.unpack.001, py.num.assign.001]
---

Dans quel ordre s'évalue `a, b = b, a+b` ?

## Explication

Toute la droite d'abord, ensuite les noms. Ce n'est pas `a = b` puis un `a+b` déjà mis à jour, et ce n'est pas interdit.
