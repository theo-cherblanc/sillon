---
id: py.list.pop.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.list.001
choices:
  - { id: a, text: "`pop()` retire et rend le dernier élément ; un index explicite choisit la position." }
  - { id: b, text: "`pop()` retire et rend le premier élément ; sans index, la liste se comporte en file." }
  - { id: c, text: "`pop()` rend le dernier élément sans le retirer, comme un accès `[-1]`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/datastructures.html
insight: "Liste comme pile : `append` / `pop()`. En file, le tutoriel dit que `pop(0)` est lent, et montre `deque`."
common_mistake: "Prendre `pop()` pour un `shift` (premier élément)."
related: [py.list.append.001, py.list.mut.001]
---

Que fait `list.pop` sans argument ?

## Explication

Il enlève le dernier et le rend. Ce n'est pas le premier, et ce n'est pas une simple lecture.
