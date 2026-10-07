---
id: js.this.006
type: mcq
topic: javascript
tags: [this]
difficulty: 2
choices:
  - { id: a, text: "\"Ada\"" }
  - { id: b, text: "undefined" }
  - { id: c, text: "une TypeError est lancée" }
correctChoiceId: a
related: [js.this.001, js.this.004]
insight: "`call` (et `apply`) disent : « exécute-toi avec cet objet-là comme `this` »."
---

Que renvoie `hello.call(user)` ?

```js
function hello() {
  return this.name
}
const user = { name: "Ada" }
```

## Explication

`call` appelle la fonction en fixant `this` pour cet appel. Ici `this` vaut `user`, donc `this.name` vaut `"Ada"`.
