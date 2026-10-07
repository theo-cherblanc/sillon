---
id: js.async.006
type: mcq
topic: javascript
tags: [async]
difficulty: 2
choices:
  - { id: a, text: "1" }
  - { id: b, text: "Une promesse dans une promesse" }
  - { id: c, text: "`undefined`" }
correctChoiceId: a
---

Avec quoi `run()` résout-il sa promesse ?

```js
async function run() {
  return await 1
}
```

## Explication

`await` sur une valeur qui n'est pas une promesse la reprend telle quelle. `return await 1` résout donc la promesse de `run` avec `1`, pas avec une promesse imbriquée.
