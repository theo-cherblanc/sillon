---
id: py.err.first.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.err.001
choices:
  - { id: a, text: "Parmi plusieurs `except`, le premier dont le type matche s'exécute ; au plus un handler." }
  - { id: b, text: "Parmi plusieurs `except`, tous les handlers compatibles s'exécutent, du plus précis au plus large." }
  - { id: c, text: "Parmi plusieurs `except`, Python choisit le dernier écrit, comme un override." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/errors.html
insight: "Si `except B` est avant `except C` et que `C` hérite de `B`, tout passe dans `B`. L'ordre compte."
common_mistake: "Empiler les `except` en croyant qu'ils se cumulent."
related: [py.err.try.001, py.err.exc.001]
---

Que se passe-t-il s'il y a plusieurs clauses `except` ?

## Explication

La première qui matche gagne, une seule. Pas toutes, pas la dernière par défaut.
