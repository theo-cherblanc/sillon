---
id: js.types.008
type: mcq
topic: javascript
tags: [types]
difficulty: 2
choices:
  - { id: a, text: "oui" }
  - { id: b, text: "non" }
correctChoiceId: a
---

Qu'affiche ce code ?

```js
if ([]) {
  console.log("oui")
} else {
  console.log("non")
}
```

## Explication

Un tableau, même vide, est un objet. Un objet est vrai dans un `if`. La chaîne vide `""`, `0`, `null`, `undefined`, `NaN` et `false` sont faux. `[]` ne l'est pas.
