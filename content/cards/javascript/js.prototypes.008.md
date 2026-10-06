---
id: js.prototypes.008
type: mcq
topic: javascript
tags: [prototypes]
difficulty: 3
choices:
  - { id: a, text: "\"Ada\"" }
  - { id: b, text: "\"proto\"" }
  - { id: c, text: "undefined" }
correctChoiceId: b
---

Que vaut `ada.name` à la fin ?

```js
function User() {}
User.prototype.name = "proto"
const ada = new User()
ada.name = "Ada"
delete ada.name
```

## Explication

`ada.name = "Ada"` masque le prototype. `delete ada.name` retire cette propriété de l'instance. La lecture reprend alors celle du prototype, et `ada.name` vaut `"proto"`.
