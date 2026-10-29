---
id: py.list.mut.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.list.001
choices:
  - { id: a, text: "Une liste est mutable : on peut remplacer un élément par assignation à un index." }
  - { id: b, text: "Une liste est immuable : remplacer un élément lève `TypeError`, comme une chaîne." }
  - { id: c, text: "Une liste est mutable seulement si tous les éléments ont le même type." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "`cubes[3] = 64` : le tutoriel corrige un cube faux. La `str` refuse ce geste."
common_mistake: "Traiter liste et chaîne comme le même genre de séquence à l'écriture."
related: [py.str.immut.001, py.list.append.001]
---

Peut-on écrire `cubes[3] = 64` sur une liste ?

## Explication

Oui : la liste se modifie. Ce n'est pas une `str`. Le mélange de types n'interdit pas la mutation.
