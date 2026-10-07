---
id: js.this.003
type: mcq
topic: javascript
tags: [this]
difficulty: 1
choices:
  - { id: a, text: "\"Ada\"" }
  - { id: b, text: "undefined" }
  - { id: c, text: "une TypeError est lancée" }
correctChoiceId: a
related: [js.this.001]
insight: "Appelée comme `user.hello()`, la méthode reçoit `user` comme `this`."
---

Que renvoie `user.hello()` ?

```js
const user = {
  name: "Ada",
  hello() {
    return this.name
  },
}
```

## Explication

`hello` est appelée comme méthode de `user`. Dans cet appel, `this` vaut `user`, donc `this.name` vaut `"Ada"`.
