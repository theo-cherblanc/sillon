---
id: js.prototypes.003
type: mcq
topic: javascript
tags: [prototypes]
difficulty: 2
choices:
  - { id: a, text: "true" }
  - { id: b, text: "false" }
  - { id: c, text: "une TypeError est lancée" }
correctChoiceId: a
---

Que vaut `"hello" in ada` ?

```js
function User(name) {
  this.name = name
}
User.prototype.hello = function () {
  return this.name
}
const ada = new User("Ada")
```

## Explication

`in` regarde l'objet et sa chaîne de prototypes. `hello` n'est pas sur `ada`, mais sur `User.prototype`, donc `"hello" in ada` vaut `true`. `Object.hasOwn(ada, "hello")` vaut `false` : la méthode n'appartient pas à l'instance.
