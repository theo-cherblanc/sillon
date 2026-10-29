---
id: py.err.syntax.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.err.001
choices:
  - { id: a, text: "Une erreur de syntaxe vient du parseur : le texte n'est pas du Python valide." }
  - { id: b, text: "Une erreur de syntaxe vient de l'exécution : le texte est valide, mais une opération échoue." }
  - { id: c, text: "Une erreur de syntaxe est un warning : le programme tourne, avec un message en plus." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/errors.html
insight: "`while True print('Hello world')` : il manque `:` avant `print`. Flèche du parseur, `SyntaxError`."
common_mistake: "Appeler `TypeError` une « erreur de syntaxe » parce que le message est rouge."
related: [py.err.exc.001, py.if.colon.001]
---

Qu'est-ce qu'une erreur de syntaxe en Python ?

## Explication

Le parseur refuse le fichier. Ce n'est pas une exception d'exécution, et ce n'est pas un warning.
