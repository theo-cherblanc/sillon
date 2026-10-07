---
id: js.this.004
type: mcq
topic: javascript
tags: [this]
difficulty: 3
choices:
  - { id: a, text: "\"Ada\"" }
  - { id: b, text: "undefined" }
  - { id: c, text: "une TypeError est lancée" }
correctChoiceId: a
related: [js.this.001, js.this.006]
insight: "`bind` fixe `this` une fois pour toutes. Extraire la fonction ensuite ne le décroche plus."
---

En mode strict, que renvoie `greet()` ?

```js
const user = {
  name: "Ada",
  hello() {
    return this.name
  },
}
const greet = user.hello.bind(user)
greet()
```

## Explication

`bind` fixe `this` sur `user` pour les appels suivants. `greet` n'est pas appelée comme méthode, mais `this` reste `user`, donc le résultat vaut `"Ada"`.
