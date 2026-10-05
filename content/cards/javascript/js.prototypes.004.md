---
id: js.prototypes.004
type: mcq
topic: javascript
tags: [prototypes]
difficulty: 3
choices:
  - { id: a, text: "\"Ada\"" }
  - { id: b, text: "\"redefini\"" }
  - { id: c, text: "undefined" }
correctChoiceId: b
---

Que renvoie `ada.hello()` à la fin ?

```js
function User(name) {
  this.name = name
}
User.prototype.hello = function () {
  return this.name
}
const ada = new User("Ada")
User.prototype.hello = function () {
  return "redefini"
}
```

## Explication

Les instances partagent le même prototype. Remplacer `hello` sur `User.prototype` change l'appel des instances déjà créées. `ada.hello()` renvoie donc `"redefini"`.
