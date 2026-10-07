---
id: js.async.007
type: mcq
topic: javascript
tags: [async]
difficulty: 2
choices:
  - { id: a, text: "Une promesse résolue avec [1]" }
  - { id: b, text: "Une promesse rejetée" }
  - { id: c, text: "Une promesse qui reste en attente" }
correctChoiceId: b
---

Que devient `all` une fois les deux promesses réglées ?

```js
const all = Promise.all([
  Promise.resolve(1),
  Promise.reject(new Error("rate")),
])
```

## Explication

`Promise.all` échoue dès qu'une promesse échoue. Le tableau partiel n'est pas renvoyé : `all` se rejette avec l'erreur `"rate"`.
