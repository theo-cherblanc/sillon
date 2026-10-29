---
id: py.if.truth.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.if.001
choices:
  - { id: a, text: "Un entier `0` est faux ; un entier non nul est vrai. Une séquence vide est fausse." }
  - { id: b, text: "Seul `False` est faux ; `0`, `''` et `[]` restent vrais dans un `if`." }
  - { id: c, text: "Tout nombre est vrai ; seules les séquences vides et `None` sont fausses." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "Le tutoriel le dit pour `while` : non-zero integer is true ; empty sequences are false."
common_mistake: "Tester `if count` et rater le zéro légitime."
related: [py.if.while.001, ts.narrow.truth.001]
---

Comment Python juge-t-il qu'une condition est vraie ?

## Explication

`0` et les séquences vides sont faux. Ce n'est pas « seulement le booléen `False` », et ce n'est pas « tout nombre est vrai ».
