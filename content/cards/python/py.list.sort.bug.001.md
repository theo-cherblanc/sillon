---
id: py.list.sort.bug.001
type: bug
topic: python
tags: [python]
difficulty: 2
lesson_id: py.list.001
lines:
  - "fruits = ['orange', 'apple', 'pear']"
  - "fruits = fruits.sort()"
  - "print(fruits[0])"
bugLine: 2
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "`sort()` mute et rend `None`. `fruits` devient `None`, puis `fruits[0]` casse."
common_mistake: "Chaîner une méthode qui mute, comme si elle rendait la liste."
related: [py.list.sort.001, py.fn.none.001]
---

Quelle ligne rend `fruits` égal à `None` avant le `print` ?

## Explication

`sort()` travaille sur place et rend `None`. Réassigner ce résultat écrase la liste. Les deux autres lignes sont saines.
