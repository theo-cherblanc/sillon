---
id: js.types.004
type: mcq
topic: javascript
tags: [types]
difficulty: 1
choices:
  - { id: a, text: "\"array\"" }
  - { id: b, text: "\"object\"" }
  - { id: c, text: "\"undefined\"" }
correctChoiceId: b
---

Que renvoie `typeof []` ?

## Explication

`typeof` ne distingue pas un tableau d'un autre objet. `[]` est un objet, donc le résultat vaut `"object"`. Pour reconnaître un tableau, on utilise `Array.isArray([])`.
