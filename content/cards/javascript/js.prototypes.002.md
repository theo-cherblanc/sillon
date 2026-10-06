---
id: js.prototypes.002
type: mcq
topic: javascript
tags: [prototypes]
difficulty: 2
choices:
  - { id: a, text: "`ada`" }
  - { id: b, text: "`User.prototype`" }
  - { id: c, text: "`Function.prototype`" }
correctChoiceId: b
---

Juste après `const ada = new User("Ada")`, que renvoie `Object.getPrototypeOf(ada)` ?

```js
function User(name) {
  this.name = name
}
const ada = new User("Ada")
```

## Explication

`new` crée l'objet et le relie au `prototype` du constructeur. Les méthodes partagées vivent sur ce prototype, pas copiées sur chaque instance.
