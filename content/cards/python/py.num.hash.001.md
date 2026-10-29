---
id: py.num.hash.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.num.001
choices:
  - { id: a, text: "Un commentaire commence par `#` et va jusqu'à la fin de la ligne." }
  - { id: b, text: "Un commentaire commence par `#` et s'arrête au premier espace." }
  - { id: c, text: "Un commentaire commence par `//` et va jusqu'à la fin de la ligne, comme en JS." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "`text = \"# Ceci n'est pas un commentaire\"` : le dièse est dans la chaîne."
common_mistake: "Coller `//` de JavaScript dans un fichier Python."
related: [py.num.int.001, py.if.indent.001]
---

Comment s'écrit un commentaire en Python ?

## Explication

`#` jusqu'à la fin de ligne. Pas jusqu'à l'espace suivant, et pas `//`.
