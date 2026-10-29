---
id: py.str.len.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.str.001
choices:
  - { id: a, text: "`len` est une fonction bâtie qui renvoie la longueur d'une chaîne." }
  - { id: b, text: "`len` est une méthode : on l'écrit `word.len()`, comme `append` sur une liste." }
  - { id: c, text: "`len` est un attribut : on lit `word.length`, comme en JavaScript." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "`len(s)`, pas `s.length`. Ça marche aussi pour les listes."
common_mistake: "Coller `.length` de JS, ou `.len()` comme une méthode."
related: [py.list.mut.001, py.str.index.001]
---

Comment mesure-t-on la longueur d'une chaîne ?

## Explication

La fonction `len(...)`. Ni une méthode `len()`, ni un champ `length`.
