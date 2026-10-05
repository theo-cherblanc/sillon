---
id: js.prototypes.001
type: mcq
topic: javascript
tags: [prototypes]
difficulty: 2
choices:
  - { id: a, text: "\"Ada\"" }
  - { id: b, text: "undefined" }
  - { id: c, text: "une TypeError est lancée" }
correctChoiceId: a
---

Que renvoie `ada.hello()` ?

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

`ada` n'a pas `hello` sur elle-même. JavaScript trouve la méthode sur `User.prototype`. Au moment de l'appel, `this` vaut `ada`, donc `this.name` vaut `"Ada"`.
