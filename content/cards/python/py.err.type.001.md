---
id: py.err.type.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.err.001
choices:
  - { id: a, text: "`TypeError`" }
  - { id: b, text: "`SyntaxError`" }
  - { id: c, text: "`NameError`" }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/errors.html
insight: "Le texte `'2' + 2` est du Python valide. C'est l'opération qui n'a pas de sens."
common_mistake: "Dire syntaxe, parce que « ça ne devrait pas s'écrire »."
related: [py.err.exc.001, py.err.syntax.001]
---

Quelle exception lève `'2' + 2` ?

## Explication

`TypeError` : on ne concatène pas un `int` à une `str`. Ce n'est pas le parseur, et ce n'est pas un nom inconnu.
