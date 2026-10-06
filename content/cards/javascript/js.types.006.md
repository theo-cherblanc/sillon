---
id: js.types.006
type: mcq
topic: javascript
tags: [types]
difficulty: 1
choices:
  - { id: a, text: "2" }
  - { id: b, text: "\"11\"" }
  - { id: c, text: "NaN" }
correctChoiceId: b
---

Que vaut `"1" + 1` ?

## Explication

Quand l'un des deux côtés est une chaîne, `+` concatène. Le nombre `1` est converti en `"1"`, et le résultat vaut `"11"`. Pour additionner, il faut deux nombres : `Number("1") + 1` vaut `2`.
