---
id: js.scope.004
type: mcq
topic: javascript
tags: [scope]
difficulty: 2
choices:
  - { id: a, text: "user.name vaut \"Grace\"" }
  - { id: b, text: "user.name reste \"Ada\"" }
  - { id: c, text: "une TypeError est lancée" }
correctChoiceId: a
---

Que se passe-t-il ?

```js
const user = { name: "Ada" }
user.name = "Grace"
```

## Explication

`const` empêche de réassigner la variable `user`. L'objet, lui, reste modifiable : `user.name` vaut `"Grace"`. Une `TypeError` apparaîtrait seulement avec `user = autreChose`.
