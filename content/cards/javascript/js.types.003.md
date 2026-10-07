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
source: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality"
insight: "`===` compare sans convertir. `==` convertit d'abord vers un type commun. `0 == false` est vrai. `0 === false` est faux."
common_mistake: "Écrire `==` pour aller plus vite. Les conversions de `==` sont souvent la surprise."
related: [js.types.cloze.001, js.types.007]
---

Quelle est la différence entre `==` et `===` ?

## Explication

`0 == false` est vrai, parce que `false` est converti en `0`. `0 === false` est faux : un nombre n'est pas un booléen.
