---
id: js.closures.005
type: mcq
topic: javascript
tags: [closures]
difficulty: 2
choices:
  - { id: a, text: "1" }
  - { id: b, text: "2" }
  - { id: c, text: "undefined" }
correctChoiceId: b
---

Que renvoie `read()` ?

```js
let n = 1
const read = () => n
n = 2
```

## Explication

`read` retient la variable `n`, pas la valeur qu'elle avait à sa création. L'appel lit `n` à ce moment-là, et `n` vaut alors `2`.
