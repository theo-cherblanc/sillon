---
id: js.this.001
type: mcq
topic: javascript
tags: [this]
difficulty: 2
choices:
  - { id: a, text: "\"Ada\" est renvoyé" }
  - { id: b, text: "undefined est renvoyé" }
  - { id: c, text: "une TypeError est lancée" }
correctChoiceId: c
---

En mode strict, que se passe-t-il ?

```js
const user = {
  name: "Ada",
  hello() {
    return this.name
  },
}
const greet = user.hello
greet()
```

## Explication

`greet` n'est plus appelée comme méthode de `user`. En mode strict, `this` vaut `undefined`, et lire `this.name` lance une `TypeError`.
