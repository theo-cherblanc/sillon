---
id: py.dict.single.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.dict.001
choices:
  - { id: a, text: "Un singleton s'écrit `('hello',)` : c'est la virgule qui fait le tuple." }
  - { id: b, text: "Un singleton s'écrit `('hello')` : les parenthèses suffisent à créer le tuple." }
  - { id: c, text: "Un singleton s'écrit `tuple('hello')`, seul moyen d'avoir une chaîne dans un tuple." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "`('hello')` est une chaîne entre parenthèses. `tuple('hello')` itère les caractères : `('h', 'e', ...)`."
common_mistake: "Oublier la virgule du singleton — classique d'entretien."
related: [py.dict.tuple.001, py.str.quotes.001]
---

Comment écrit-on un tuple d'un seul élément ?

## Explication

La virgule. Les parenthèses seules n'y changent rien. `tuple('hello')` découpe la chaîne.
