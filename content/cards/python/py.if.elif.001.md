---
id: py.if.elif.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.if.001
choices:
  - { id: a, text: "`elif` est le « else if » de Python, pour enchaîner des tests sans empiler les indentations." }
  - { id: b, text: "`elif` est obligatoire après chaque `if` ; un `else` seul est une `SyntaxError`." }
  - { id: c, text: "`elif` remplace `if` : on n'écrit plus `if`, seulement `elif` / `else`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "Zéro ou plusieurs `elif`. `else` est optionnel. C'est le substitut du `switch` annoncé par le tutoriel (avant `match`)."
common_mistake: "Écrire `else if`, syntaxe d'un autre langage."
related: [py.if.colon.001, py.if.indent.001]
---

À quoi sert `elif` ?

## Explication

À enchaîner des branches. Il n'est pas obligatoire, et il ne remplace pas le premier `if`.
