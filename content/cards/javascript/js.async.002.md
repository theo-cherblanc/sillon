---
id: js.async.002
type: mcq
topic: javascript
tags: [async]
difficulty: 2
choices:
  - { id: a, text: "Le nombre 1" }
  - { id: b, text: "`undefined`" }
  - { id: c, text: "Une promesse résolue avec 1" }
correctChoiceId: c
---

Que renvoie `run()` ?

```js
async function run() {
  return 1
}
```

## Explication

Une fonction `async` renvoie toujours une promesse. `return 1` ne renvoie pas le nombre directement : il résout cette promesse avec `1`.
