---
id: py.fn.default.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.fn.001
choices:
  - { id: a, text: "Une valeur par défaut s'évalue une fois, à la définition, pas à chaque appel." }
  - { id: b, text: "Une valeur par défaut s'évalue à chaque appel, dans la portée de l'appelant." }
  - { id: c, text: "Une valeur par défaut s'évalue une fois, au premier appel, puis plus jamais." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "`i = 5` ; `def f(arg=i):` ; `i = 6` ; `f()` affiche `5`. Le défaut a figé `i` à la définition."
common_mistake: "Attendre que `f()` lise le `i` courant."
related: [py.fn.mutable.001, py.fn.def.001]
---

Quand Python évalue-t-il la valeur par défaut d'un paramètre ?

## Explication

À la définition. Pas à chaque appel, pas au premier appel seulement.
