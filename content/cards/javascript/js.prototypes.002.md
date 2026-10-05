---
id: js.prototypes.002
type: reveal
topic: javascript
tags: [prototypes]
difficulty: 2
---

Juste après `const ada = new User("Ada")`, que renvoie `Object.getPrototypeOf(ada)` ?

```js
function User(name) {
  this.name = name
}
const ada = new User("Ada")
```

## Réponse

`User.prototype`

## Explication

`new` crée l'objet et le relie au `prototype` du constructeur. Les méthodes partagées vivent sur ce prototype, pas copiées sur chaque instance.
