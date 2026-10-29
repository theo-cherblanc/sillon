---
id: ts.gen.length.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.gen.001
choices:
  - { id: a, text: "Sans contrainte, `arg.length` est refusé : `Type` peut être un `number`, sans `length`." }
  - { id: b, text: "Sans contrainte, `arg.length` est autorisé : tout type JavaScript a une propriété `length`." }
  - { id: c, text: "Sans contrainte, `arg.length` est autorisé : TypeScript ajoute `length` à chaque générique." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/generics.html
insight: "Property 'length' does not exist on type 'Type'. Un `number` passé à `identity` n'a pas `length`."
common_mistake: "Lire `.length` « parce que c'est souvent une string », sans le dire au type."
related: [ts.gen.array.001, ts.gen.extends.001]
---

Pourquoi ne peut-on pas lire `arg.length` dans `identity<Type>(arg: Type)` ?

## Explication

`Type` tient lieu de n'importe quel type. Ce n'est pas vrai que tout a `length`, et TypeScript n'ajoute pas ce champ.
