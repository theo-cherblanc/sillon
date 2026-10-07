---
id: js.async.order.001
type: order
topic: javascript
tags: [async]
difficulty: 3
steps:
  - A
  - D
  - C
  - B
insight: "Zéro milliseconde, ce n'est pas « maintenant ». C'est « dès que la file des timers aura son tour », après les microtâches."
common_mistake: "Mettre B avant C parce que `setTimeout(..., 0)` a l'air plus urgent qu'une promesse déjà résolue."
related: [js.async.001, js.async.004]
---

Dans quel ordre ces lettres s'affichent-elles ?

```js
console.log("A")
setTimeout(() => console.log("B"), 0)
Promise.resolve().then(() => console.log("C"))
console.log("D")
```

## Explication

`A` et `D` s'affichent tout de suite, dans cet ordre. La promesse de `C` est traitée avant le `setTimeout` de `B`, même avec un délai de 0. L'ordre est donc A, D, C, B.
