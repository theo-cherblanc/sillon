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
common_mistake: "Copier `user.hello` dans une variable, puis l'appeler. Ce n'est plus une méthode de `user`."
insight: "En module, on est déjà en strict. Pas besoin d'écrire `\"use strict\"` pour voir cette erreur."
related: [js.this.003, js.this.004, js.this.007]
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
