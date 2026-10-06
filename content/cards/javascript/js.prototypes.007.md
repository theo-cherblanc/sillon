---
id: js.prototypes.007
type: mcq
topic: javascript
tags: [prototypes]
difficulty: 2
choices:
  - { id: a, text: "null" }
  - { id: b, text: "Object.prototype" }
  - { id: c, text: "undefined" }
correctChoiceId: b
---

Que renvoie `Object.getPrototypeOf({})` ?

## Explication

Un objet écrit avec `{}` a `Object.prototype` comme prototype. C'est de là que viennent `toString` et les autres méthodes partagées. `Object.create(null)` serait le cas où le prototype vaut `null`.
