---
id: js.prototypes.005
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

Que vaut `ada instanceof User` ?

```js
function User(name) {
  this.name = name
}
const ada = new User("Ada")
```

## Explication

`instanceof` suit la chaîne de prototypes. `new User` relie `ada` à `User.prototype`, donc `ada` est une instance de `User`.
