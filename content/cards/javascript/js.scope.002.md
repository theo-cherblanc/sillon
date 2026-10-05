---
id: js.scope.002
type: mcq
topic: javascript
tags: [scope]
difficulty: 2
choices:
  - { id: a, text: "1 s'affiche" }
  - { id: b, text: "undefined s'affiche" }
  - { id: c, text: "une ReferenceError est lancée" }
correctChoiceId: b
---

Qu'affiche ce code ?

```js
console.log(a)
var a = 1
```

## Explication

`var` est hissée et initialisée à `undefined`. La déclaration est déjà visible, l'affectation `a = 1` ne l'est pas encore.
