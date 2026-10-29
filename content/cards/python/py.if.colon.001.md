---
id: py.if.colon.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.if.001
choices:
  - { id: a, text: "Un `:` ouvre le bloc après `if`, `elif`, `else`, `while`, `for` et `def`." }
  - { id: b, text: "Un `:` termine l'instruction, comme le point-virgule en JavaScript." }
  - { id: c, text: "Un `:` est optionnel dès que la ligne suivante est indentée." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "`while True print(...)` : le parseur montre une flèche avant `print`, il manque le `:`."
common_mistake: "Oublier le `:` et blâmer seulement l'indentation."
related: [py.err.syntax.001, py.if.indent.001]
---

Quel rôle joue le deux-points après `if x < 0` ?

## Explication

Il ouvre le bloc indenté. Ce n'est pas un `;`, et l'indentation ne le remplace pas.
