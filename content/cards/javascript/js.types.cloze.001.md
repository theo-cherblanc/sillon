---
id: js.types.cloze.001
type: cloze
topic: javascript
tags: [types]
difficulty: 2
---

Quel opérateur manque pour dire que ces deux valeurs sont différentes, sans conversion ?

```js
null ____ undefined
```

## Réponse

!==

## Explication

`!=` convertit `null` et `undefined` vers la même valeur, donc il les trouve égaux. `!==` ne convertit pas : ce sont deux valeurs différentes.
