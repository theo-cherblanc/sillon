---
id: py.fn.mutable.001
type: mcq
topic: python
tags: [python]
difficulty: 2
lesson_id: py.fn.001
choices:
  - { id: a, text: "Un défaut `L=[]` est partagé entre les appels : `f(1)` puis `f(2)` accumulent dans la même liste." }
  - { id: b, text: "Un défaut `L=[]` est recopié à chaque appel : `f(1)` puis `f(2)` rendent `[1]` et `[2]`." }
  - { id: c, text: "Un défaut `L=[]` est interdit : Python lève `SyntaxError` sur un mutable en défaut." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "Le tutoriel imprime `[1]` puis `[1, 2]` puis `[1, 2, 3]`. Remède : `L=None` et `if L is None: L = []`."
common_mistake: "Promettre une liste neuve à chaque appel parce que `[]` est écrit dans la signature."
related: [py.fn.default.001, py.err.is.001]
---

Que se passe-t-il avec `def f(a, L=[]):` qui `append` puis `return L` ?

## Explication

La même liste survit. Ce n'est pas recopié, et ce n'est pas une erreur de syntaxe.
