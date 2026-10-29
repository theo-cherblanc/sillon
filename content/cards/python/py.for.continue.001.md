---
id: py.for.continue.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.for.001
choices:
  - { id: a, text: "`continue` passe à l'itération suivante de la boucle." }
  - { id: b, text: "`continue` sort de la boucle, comme `break`." }
  - { id: c, text: "`continue` reprend le `if` en cours, sans avancer l'itérable." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "Dans l'exemple pair/impair, `continue` évite le `print` impair après avoir annoncé un pair."
common_mistake: "S'en servir à la place de `break`."
related: [py.for.break.001, py.if.pass.001]
---

Que fait `continue` ?

## Explication

Itération suivante. Ce n'est pas une sortie de boucle, et ça n'immobilise pas l'itérable.
