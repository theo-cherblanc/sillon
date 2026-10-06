---
id: js.prototypes.006
type: mcq
topic: javascript
tags: [prototypes]
difficulty: 2
choices:
  - { id: a, text: "\"proto\"" }
  - { id: b, text: "\"Ada\"" }
  - { id: c, text: "undefined" }
correctChoiceId: b
---

Que vaut `ada.name` ?

```js
function User() {}
User.prototype.name = "proto"
const ada = new User()
ada.name = "Ada"
```

## Explication

La propriété posée sur l'instance masque celle du prototype. `ada.name` trouve `"Ada"` tout de suite, sans continuer vers `User.prototype`.
