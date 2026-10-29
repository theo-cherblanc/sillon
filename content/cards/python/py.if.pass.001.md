---
id: py.if.pass.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.if.001
choices:
  - { id: a, text: "`pass` ne fait rien : il tient la place d'un bloc encore vide." }
  - { id: b, text: "`pass` sort de la fonction, comme un `return` sans valeur." }
  - { id: c, text: "`pass` saute le reste de la boucle, comme `continue`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "`def initlog(*args): pass` : le parseur a un corps, le programme n'agit pas."
common_mistake: "Confondre avec `return` ou `continue`."
related: [py.for.continue.001, py.fn.none.001]
---

À quoi sert `pass` ?

## Explication

Un no-op syntaxique. Il ne retourne pas, il ne continue pas une boucle.
