---
id: py.list.share.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.list.001
choices:
  - { id: a, text: "`rgba = rgb` partage le même objet : un `append` se voit des deux côtés." }
  - { id: b, text: "`rgba = rgb` copie la liste : un `append` sur `rgba` laisse `rgb` intact." }
  - { id: c, text: "`rgba = rgb` fige `rgb` : tout `append` suivant lève `TypeError`." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "`id(rgb) == id(rgba)` vaut `True`. L'assignation ne copie jamais les données."
common_mistake: "Croire que `=` clone, comme on le voudrait en entretien sur les références."
related: [py.list.copy.001, py.err.is.001]
---

Que se passe-t-il après `rgba = rgb` puis `rgba.append("Alph")` ?

## Explication

Les deux noms voient `"Alph"`. Ce n'est pas une copie, et la liste n'est pas figée.
