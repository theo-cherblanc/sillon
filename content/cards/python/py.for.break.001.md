---
id: py.for.break.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.for.001
choices:
  - { id: a, text: "`break` sort de la boucle `for` ou `while` la plus interne." }
  - { id: b, text: "`break` sort de toutes les boucles imbriquées d'un seul coup." }
  - { id: c, text: "`break` quitte la fonction, comme `return`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "Dans le crible du tutoriel, `break` sort du `for x` interne, pas du `for n` externe."
common_mistake: "Attendre un break étiqueté qui casse deux niveaux."
related: [py.for.continue.001, py.for.else.001]
---

Que fait `break` ?

## Explication

Il interrompt la boucle la plus proche. Pas toutes, et pas la fonction.
