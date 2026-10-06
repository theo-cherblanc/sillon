---
id: js.scope.005
type: mcq
topic: javascript
tags: [scope]
difficulty: 2
choices:
  - { id: a, text: "1 s'affiche" }
  - { id: b, text: "undefined s'affiche" }
  - { id: c, text: "une ReferenceError est lancée" }
correctChoiceId: a
---

Qu'affiche ce code ?

```js
if (true) {
  var x = 1
}
console.log(x)
```

## Explication

`var` ignore les blocs `if` et appartient à la fonction, ou au script s'il n'y en a pas. Le `if` ne cache pas `x`. Après le bloc, `x` vaut `1`.
