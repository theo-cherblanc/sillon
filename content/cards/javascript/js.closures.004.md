---
id: js.closures.004
type: reveal
topic: javascript
tags: [closures, scope]
difficulty: 3
---

Que renvoie `fns[0]()` ?

```js
const fns = []
for (let i = 0; i < 3; i++) {
  fns.push(() => i)
}
```

## Réponse

`0`

## Explication

`let` crée une variable par tour de boucle. `fns[0]` a capturé le `i` du premier tour, qui reste `0`. Avec `var`, les trois fonctions auraient lu la même variable, valant `3` à la fin.
