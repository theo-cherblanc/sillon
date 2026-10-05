---
id: js.this.002
type: mcq
topic: javascript
tags: [this]
difficulty: 2
choices:
  - { id: a, text: "\"Ada\"" }
  - { id: b, text: "undefined" }
  - { id: c, text: "une TypeError est lancée" }
correctChoiceId: a
---

Que renvoie `user.delayed()` ?

```js
const user = {
  name: "Ada",
  delayed() {
    const read = () => this.name
    return read()
  },
}
```

## Explication

Une fonction flèche n'a pas son propre `this`. Elle reprend celui de `delayed`. Comme `delayed` est appelée sur `user`, `this.name` vaut `"Ada"`.
