---
id: py.err.exc.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.err.001
choices:
  - { id: a, text: "Une exception est une erreur détectée à l'exécution, alors que le texte était syntaxiquement correct." }
  - { id: b, text: "Une exception est un second nom pour `SyntaxError`, levé par le parseur." }
  - { id: c, text: "Une exception arrête toujours le programme : aucun `try` ne peut la rattraper." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/errors.html
insight: "`10 * (1/0)` → `ZeroDivisionError`. `'2' + 2` → `TypeError`. `spam` inconnu → `NameError`."
common_mistake: "Tout regrouper sous « syntax error »."
related: [py.err.syntax.001, py.err.try.001]
---

Qu'est-ce qu'une exception, d'après le tutoriel ?

## Explication

Un échec pendant l'exécution. Pas le parseur, et un `try` peut la rattraper.
