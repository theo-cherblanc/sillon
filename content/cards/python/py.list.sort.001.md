---
id: py.list.sort.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.list.001
choices:
  - { id: a, text: "`sort` et `reverse` trient ou inversent sur place, et rendent `None`." }
  - { id: b, text: "`sort` et `reverse` rendent une nouvelle liste triée, sans toucher à l'originale." }
  - { id: c, text: "`sort` et `reverse` rendent la même liste, ce qui autorise `fruits.sort().append(...)`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "Principe des structures mutables : qui mute rend `None`. `sorted(iterable)` est l'autre outil, plus tard."
common_mistake: "Écrire `fruits = fruits.sort()` et se retrouver avec `None`."
related: [py.list.append.001, py.fn.none.001]
---

Que rendent `list.sort()` et `list.reverse()` ?

## Explication

`None`, après avoir muté. Pas une copie, pas la liste elle-même pour chaîner.
