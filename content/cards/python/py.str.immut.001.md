---
id: py.str.immut.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.str.001
choices:
  - { id: a, text: "Une chaîne est immuable : assigner `word[0] = 'J'` lève `TypeError`." }
  - { id: b, text: "Une chaîne est mutable : assigner `word[0] = 'J'` remplace le premier caractère." }
  - { id: c, text: "Une chaîne est immuable : assigner `word[0] = 'J'` lève `IndexError`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "On fabrique une nouvelle chaîne : `'J' + word[1:]`. L'index trop grand, lui, c'est `IndexError`."
common_mistake: "Traiter la `str` comme une liste de caractères qu'on peut écraser."
related: [py.list.mut.001, py.str.oob.001]
---

Que se passe-t-il si on écrit `word[0] = 'J'` sur une chaîne ?

## Explication

`TypeError` : pas d'écriture dans un index de `str`. Ce n'est pas une mutation silencieuse, et ce n'est pas un souci de borne.
