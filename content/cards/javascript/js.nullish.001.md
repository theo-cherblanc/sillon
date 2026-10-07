---
id: js.nullish.001
type: mcq
topic: javascript
tags: [types]
difficulty: 2
choices:
  - { id: a, text: "`0`" }
  - { id: b, text: "`5`" }
  - { id: c, text: "`null`" }
correctChoiceId: a
source: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing"
insight: "`??` ne réagit qu'à `null` et `undefined`. Un `0` ou une chaîne vide, ça compte comme une vraie valeur."
common_mistake: "Écrire `count || 5` pour un compteur. `0` est faux pour `||`, donc le résultat devient `5` alors que le compte vaut zéro."
related: [js.types.008, js.optional.001]
---

Que renvoie `count ?? 5` lorsque `count` vaut `0` ?

```js
const count = 0
count ?? 5
```

## Explication

`??` ne recule que si la gauche est `null` ou `undefined`. `0` n'en est pas. Le `5` n'est pas utilisé. Avec `||`, `0` aurait perdu : tu aurais eu `5`.
