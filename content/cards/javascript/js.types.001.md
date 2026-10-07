---
id: js.types.001
type: mcq
topic: javascript
tags: [types]
difficulty: 1
choices:
  - { id: a, text: "\"null\"" }
  - { id: b, text: "\"object\"" }
  - { id: c, text: "\"undefined\"" }
correctChoiceId: b
source: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof"
insight: "Ce n'est pas un objet. C'est un ancien défaut du langage, conservé pour ne pas casser le code existant. Pour tester `null`, on écrit `value === null`."
related: [js.types.004, js.types.007]
---

Que renvoie `typeof null` ?

## Explication

`typeof null` vaut `"object"`. C'est un vieux défaut du langage, resté tel quel pour ne pas casser le code existant.
