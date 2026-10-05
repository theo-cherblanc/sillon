---
id: js.closures.002
type: reveal
topic: javascript
tags: [closures, scope]
difficulty: 3
---

Que renvoie `fns[0]()` ?

```js
const fns = []
for (var i = 0; i < 3; i++) {
  fns.push(() => i)
}
```

## Réponse

`3`

## Explication

`var i` est une seule variable pour toute la boucle. Les trois fonctions lisent ce même `i`, qui vaut `3` une fois la boucle terminée. Avec `let`, chaque tour aurait eu son propre `i`.
