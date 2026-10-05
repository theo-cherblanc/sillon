---
id: js.types.003
type: reveal
topic: javascript
tags: [types]
difficulty: 2
---

Quelle est la différence entre `==` et `===` ?

## Réponse

`===` compare les deux valeurs sans les convertir. `==` les convertit d'abord vers un type commun.

## Explication

`0 == false` est vrai, parce que `false` est converti en `0`. `0 === false` est faux : un nombre n'est pas un booléen.
