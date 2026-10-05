---
id: js.closures.003
type: mcq
topic: javascript
tags: [fonctions, scope]
difficulty: 2
choices:
  - { id: a, text: "undefined" }
  - { id: b, text: "42" }
correctChoiceId: b
---

Que vaut `x` à la fin de ce snippet ?

```js
function outer() {
  const x = 42
  return () => x
}
const read = outer()
```

## Explication

La fonction interne capture `x`. `read()` renvoie `42`.
