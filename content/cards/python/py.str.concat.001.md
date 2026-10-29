---
id: py.str.concat.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.str.001
choices:
  - { id: a, text: "Deux littéraux côte à côte se collent ; une variable et un littéral exigent `+`." }
  - { id: b, text: "Une variable et un littéral se collent tout seuls, comme deux littéraux côte à côte." }
  - { id: c, text: "Deux littéraux côte à côte lèvent `SyntaxError` ; seule la méthode `join` concatène." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "`'Py' 'thon'` vaut `'Python'`. `prefix 'thon'` est une `SyntaxError`."
common_mistake: "Oublier `+` dès qu'un des deux n'est plus un littéral."
related: [py.str.immut.001, py.num.hash.001]
---

Comment concatène-t-on du texte en Python ?

## Explication

`+` (et `*` pour répéter). Le collage implicite ne marche que entre littéraux, pas avec une variable.
