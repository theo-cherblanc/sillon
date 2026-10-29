---
id: py.list.append.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.list.001
choices:
  - { id: a, text: "`append` ajoute un élément à la fin de la liste." }
  - { id: b, text: "`append` insère un élément à l'index 0, le reste étant décalé." }
  - { id: c, text: "`append` concatène deux listes et en rend une troisième, sans modifier l'originale." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "`cubes.append(216)` mute `cubes`. Pour coller deux listes, le tutoriel montre aussi `+`."
common_mistake: "Attendre une nouvelle liste, comme `+`, et ignorer que `append` rend `None`."
related: [py.list.sort.001, py.list.pop.001]
---

Que fait `list.append` ?

## Explication

Il pousse à la fin, sur place. Ce n'est pas `insert(0, ...)`, et ce n'est pas une concaténation qui copie.
