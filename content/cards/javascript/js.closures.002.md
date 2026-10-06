---
id: js.closures.002
type: mcq
topic: javascript
tags: [closures, scope]
difficulty: 3
choices:
  - { id: a, text: "`0`" }
  - { id: b, text: "`3`" }
  - { id: c, text: "`undefined`" }
correctChoiceId: b
---

Que renvoie `fns[0]()` ?

```js
const fns = []
for (var i = 0; i < 3; i++) {
  fns.push(() => i)
}
```

## Explication

`var i` est une seule variable pour toute la boucle. Les trois fonctions lisent ce même `i`, qui vaut `3` une fois la boucle terminée. Avec `let`, chaque tour aurait eu son propre `i`.
