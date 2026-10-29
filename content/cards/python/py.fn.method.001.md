---
id: py.fn.method.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.fn.001
choices:
  - { id: a, text: "Une méthode est une fonction qui appartient à un objet, appelée `obj.methodname`." }
  - { id: b, text: "Une méthode est une fonction globale : `append(result, a)` plutôt que `result.append(a)`." }
  - { id: c, text: "Une méthode est un alias de `return` : elle rend toujours `None` après une mutation." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/controlflow.html
insight: "`result.append(a)` : `append` est défini pour les listes. D'autres types ont d'autres méthodes du même nom, sans collision."
common_mistake: "Écrire `append(result, a)` comme une fonction libre."
related: [py.list.append.001, py.fn.def.001]
---

Qu'est-ce qu'une méthode, dans le tutoriel Python ?

## Explication

Une fonction liée à un objet, notation pointée. Pas une fonction globale, pas un synonyme de `return`.
