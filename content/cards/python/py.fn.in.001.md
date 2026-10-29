---
id: py.fn.in.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.fn.001
choices:
  - { id: a, text: "`in` teste si une valeur appartient à une séquence, par exemple `reply in {'y', 'yes'}`." }
  - { id: b, text: "`in` introduit la boucle : on ne l'écrit que dans `for x in ...`." }
  - { id: c, text: "`in` teste si une variable a été définie, à la place de `NameError`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "Le tutoriel le rappelle dans `ask_ok`. `in` sert aussi au `for`, mais ce n'est pas son seul emploi."
common_mistake: "Réserver `in` aux boucles, et écrire une série de `==` pour un ensemble de réponses."
related: [py.for.in.001, py.dict.in.001]
---

Que teste l'opérateur `in` hors d'un `for` ?

## Explication

L'appartenance à une séquence (ou un set). Pas « la variable existe », et pas uniquement la syntaxe de boucle.
