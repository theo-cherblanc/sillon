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
