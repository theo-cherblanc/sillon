---
id: js.scope.003
type: mcq
topic: javascript
tags: [scope]
difficulty: 3
choices:
  - { id: a, text: "1 s'affiche" }
  - { id: b, text: "undefined s'affiche" }
  - { id: c, text: "une ReferenceError est lancée" }
correctChoiceId: c
---

Que se passe-t-il ?

```js
console.log(b)
let b = 1
```

## Explication

`let` est hissée, mais la variable reste dans la zone morte temporelle jusqu'à sa ligne. La lire avant lance une `ReferenceError`, au lieu d'afficher `undefined` comme `var`.
