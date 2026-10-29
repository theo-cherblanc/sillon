---
id: py.for.else.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.for.001
choices:
  - { id: a, text: "Le `else` d'un `for` s'exécute si la boucle finit sans `break`." }
  - { id: b, text: "Le `else` d'un `for` s'exécute si la séquence parcourue est vide." }
  - { id: c, text: "Le `else` d'un `for` s'exécute à chaque itération où le `if` interne est faux." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "Le tutoriel insiste : look closely, the else belongs to the for, not the if. Aucun facteur → « is a prime number »."
common_mistake: "Lire ce `else` comme celui d'un `if`, ou comme « si la liste est vide »."
related: [py.for.break.001, py.if.elif.001]
---

Quand le `else` d'une boucle `for` s'exécute-t-il ?

## Explication

Si aucun `break` n'a eu lieu. Pas « liste vide », pas « à chaque `if` faux ».
