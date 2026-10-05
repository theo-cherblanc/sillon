---
id: js.closures.001
type: mcq
topic: javascript
tags: [closures]
difficulty: 2
choices:
  - { id: a, text: "0" }
  - { id: b, text: "1" }
  - { id: c, text: "2" }
correctChoiceId: c
---

Que renvoie le second appel à `next` ?

```js
function make() {
  let n = 0
  return () => ++n
}
const next = make()
next()
next()
```

## Explication

`next` capture `n`. Les deux appels incrémentent la même variable : le premier renvoie `1`, le second renvoie `2`.
