---
id: js.scope.007
type: mcq
topic: javascript
tags: [scope]
difficulty: 2
choices:
  - { id: a, text: "bonjour s'affiche" }
  - { id: b, text: "une ReferenceError est lancée" }
  - { id: c, text: "une TypeError est lancée" }
correctChoiceId: a
---

Que se passe-t-il ?

```js
greet()
function greet() {
  console.log("bonjour")
}
```

## Explication

Une déclaration `function` est hissée en entier, corps compris. L'appel avant la ligne est donc valide, et `bonjour` s'affiche.
