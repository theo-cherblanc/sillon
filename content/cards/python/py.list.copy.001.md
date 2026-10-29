---
id: py.list.copy.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.list.001
choices:
  - { id: a, text: "Une tranche `[:]` (ou `copy()`) fabrique une nouvelle liste, copie peu profonde." }
  - { id: b, text: "Une tranche `[:]` alias la liste d'origine, comme `rgba = rgb`." }
  - { id: c, text: "Une tranche `[:]` fige la liste : les index ne s'écrivent plus." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "Modifier `correct_rgba[-1]` ne change pas `rgba`. Les objets *à l'intérieur* restent partagés."
common_mistake: "Prendre `[:]` pour un clone profond de listes imbriquées."
related: [py.list.share.001, py.str.slice.001]
---

Comment obtenir une copie d'une liste, d'après le tutoriel ?

## Explication

`[:]` ou `list.copy()`. Ce n'est pas un second nom, et ça n'interdit pas l'écriture.
