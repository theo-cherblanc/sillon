---
id: js.async.003
type: mcq
topic: javascript
tags: [async]
difficulty: 3
choices:
  - { id: a, text: "timeout, puis promise" }
  - { id: b, text: "promise, puis timeout" }
  - { id: c, text: "les deux en même temps" }
correctChoiceId: b
---

Dans quel ordre les messages s'affichent-ils ?

```js
setTimeout(() => console.log("timeout"), 0)
Promise.resolve().then(() => console.log("promise"))
```

## Explication

Une fois le code synchrone fini, les microtâches passent avant les macrotâches. Le callback de `then` est une microtâche, `setTimeout` une macrotâche. `promise` s'affiche donc avant `timeout`, même avec un délai de `0`.
