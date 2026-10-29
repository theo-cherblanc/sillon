---
id: py.err.is.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.err.001
choices:
  - { id: a, text: "`is` teste l'identité : le même objet. `==` teste l'égalité des valeurs." }
  - { id: b, text: "`is` teste l'égalité des valeurs. `==` teste l'identité : le même objet." }
  - { id: c, text: "`is` et `==` sont deux graphies du même test d'égalité, sans différence." }
correctChoiceId: a
source: https://docs.python.org/3/library/stdtypes.html#comparisons
insight: "Deux listes `[1]` et `[1]` sont `==`, rarement `is`. Pour `None`, le tutoriel écrit `if L is None`."
common_mistake: "Comparer des listes avec `is`, ou `None` avec `==` par habitude JS."
related: [py.err.eq.001, py.list.share.001]
---

Quelle différence y a-t-il entre `is` et `==` ?

## Explication

Même objet vs mêmes valeurs. Ce n'est pas l'inverse, et ce n'est pas synonyme.
