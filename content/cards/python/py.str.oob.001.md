---
id: py.str.oob.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.str.001
choices:
  - { id: a, text: "Un index trop grand lève `IndexError` ; une tranche hors bornes se coupe sans erreur." }
  - { id: b, text: "Un index trop grand et une tranche hors bornes lèvent tous les deux `IndexError`." }
  - { id: c, text: "Un index trop grand vaut `None` ; une tranche hors bornes lève `IndexError`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "`word[42]` explose. `word[42:]` vaut `''`. L'asymétrie surprend en entretien."
common_mistake: "Attendre la même exception pour `[i]` et `[i:]`."
related: [py.str.slice.001, py.str.immut.001]
---

Que se passe-t-il si l'index dépasse la longueur de la chaîne ?

## Explication

Lecture d'un caractère : `IndexError`. Tranche : résultat vide, pas d'exception. Ce n'est pas `None`.
