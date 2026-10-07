---
id: js.async.005
type: mcq
topic: javascript
tags: [async]
difficulty: 2
choices:
  - { id: a, text: "Une exception tout de suite" }
  - { id: b, text: "Une promesse rejetée" }
  - { id: c, text: "`undefined`" }
correctChoiceId: b
---

Que produit l'appel `run()` ?

```js
async function run() {
  throw new Error("rate")
}
```

## Explication

Un `throw` dans une fonction `async` ne sort pas chez l'appelant. Il rejette la promesse que `run` a renvoyée. On l'attrape avec `.catch`, ou avec `try` autour d'un `await`.
