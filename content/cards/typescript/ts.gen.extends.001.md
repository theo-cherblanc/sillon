---
id: ts.gen.extends.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.gen.001
choices:
  - { id: a, text: "Une contrainte `Type extends { length: number }` n'accepte que les types qui ont `length`." }
  - { id: b, text: "Une contrainte `Type extends { length: number }` ajoute `length` à tous les types, y compris `number`." }
  - { id: c, text: "Une contrainte `Type extends { length: number }` est un alias de `Type[]`, réservé aux tableaux." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/generics.html
insight: "`longest(\"alice\", \"bob\")` marche : les chaînes ont `length`. `longest(10, 20)` non."
common_mistake: "Lire `extends` comme l'héritage de classes uniquement. Ici, c'est une contrainte de forme."
related: [ts.gen.length.001, ts.alias.struct.001]
---

Que fait une contrainte de générique écrite avec `extends` ?

## Explication

Elle limite `Type` aux formes qui conviennent. Elle n'ajoute pas `length` à un `number`, et elle n'est pas réservée aux tableaux.
