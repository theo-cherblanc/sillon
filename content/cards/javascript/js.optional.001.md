---
id: js.optional.001
type: mcq
topic: javascript
tags: [types]
difficulty: 2
choices:
  - { id: a, text: "`\"Ada\"`" }
  - { id: b, text: "`undefined`" }
  - { id: c, text: "Une `TypeError` : on lit `name` sur `null`." }
correctChoiceId: b
source: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
insight: "`?.` arrête la chaîne et rend `undefined`. Ça n'empêche pas une erreur plus loin, si tu enchaînes sans le `?`."
common_mistake: "Écrire `user.name` en comptant sur un `user` éventuellement `null`. Sans `?.`, cela lance une `TypeError`."
related: [js.nullish.001, js.types.001]
---

Que renvoie `user?.name` lorsque `user` vaut `null` ?

```js
const user = null
user?.name
```

## Explication

`?.` regarde à gauche. C'est `null` (ou `undefined`) : on n'essaie pas `.name`, on rend `undefined`. Sans le point d'interrogation, `user.name` lance une `TypeError`.
