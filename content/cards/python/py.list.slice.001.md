---
id: py.list.slice.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.list.001
choices:
  - { id: a, text: "Assigner `[]` à une tranche supprime ces éléments ; `letters[:] = []` vide la liste." }
  - { id: b, text: "Assigner `[]` à une tranche lève `TypeError`, une liste ne s'écrivant que par `append`." }
  - { id: c, text: "Assigner `[]` à une tranche insère une liste vide comme un seul élément imbriqué." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "`letters[2:5] = ['C', 'D', 'E']` remplace. `= []` retire. `letters[:] = []` efface tout."
common_mistake: "Croire qu'on ne mute une liste que via des méthodes."
related: [py.list.mut.001, py.list.copy.001]
---

Que fait l'assignation à une tranche de liste ?

## Explication

Elle peut remplacer, raccourcir ou vider. Pas une erreur, pas une imbrication d'un `[]`.
