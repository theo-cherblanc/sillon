---
id: js.types.003
type: mcq
topic: javascript
tags: [types]
difficulty: 2
choices:
  - { id: a, text: "`==` compare sans convertir. `===` convertit d'abord vers un type commun." }
  - { id: b, text: "Les deux comparent pareil. `===` ne sert que pour les objets." }
  - { id: c, text: "`===` compare les deux valeurs sans les convertir. `==` les convertit d'abord vers un type commun." }
correctChoiceId: c
---

Quelle est la différence entre `==` et `===` ?

## Explication

`0 == false` est vrai, parce que `false` est converti en `0`. `0 === false` est faux : un nombre n'est pas un booléen.
