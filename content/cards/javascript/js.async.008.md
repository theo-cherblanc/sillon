---
id: js.async.008
type: mcq
topic: javascript
tags: [async]
difficulty: 2
choices:
  - { id: a, text: "L'erreur \"rate\"" }
  - { id: b, text: "1" }
  - { id: c, text: "`undefined`" }
correctChoiceId: b
---

Avec quoi cette chaîne se résout-elle ?

```js
Promise.reject(new Error("rate")).catch(() => 1)
```

## Explication

`catch` reçoit le rejet. S'il renvoie une valeur, la chaîne continue avec une promesse résolue. Ici, elle se résout avec `1`.
