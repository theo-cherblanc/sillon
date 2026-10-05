---
id: js.types.005
type: mcq
topic: javascript
tags: [types]
difficulty: 2
choices:
  - { id: a, text: "true" }
  - { id: b, text: "false" }
correctChoiceId: b
---

Que vaut `[] === []` ?

## Explication

Chaque `[]` crée un nouvel objet. `===` compare leur identité, pas leur contenu. Les deux tableaux sont vides, mais ce ne sont pas le même objet, donc la comparaison vaut `false`.
