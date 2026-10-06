---
id: js.scope.008
type: mcq
topic: javascript
tags: [scope]
difficulty: 2
choices:
  - { id: a, text: "bonjour s'affiche" }
  - { id: b, text: "une ReferenceError est lancée" }
  - { id: c, text: "undefined s'affiche" }
correctChoiceId: b
---

Que se passe-t-il ?

```js
greet()
const greet = function () {
  console.log("bonjour")
}
```

## Explication

`const` est hissée, mais elle reste dans la zone morte temporelle jusqu'à sa ligne. L'appel lit `greet` trop tôt et lance une `ReferenceError`. Seule une déclaration `function` est utilisable avant sa ligne.
