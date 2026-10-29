---
id: ts.alias.iface.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.alias.001
choices:
  - { id: a, text: "Une `interface` nomme une forme d'objet ; elle ne renomme pas un primitif." }
  - { id: b, text: "Une `interface` renomme n'importe quel type, y compris `string` et une union." }
  - { id: c, text: "Une `interface` est une classe émise dans le JavaScript, avec un constructeur." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Pour `number | string`, c'est `type ID = ...`. L'interface s'occupe des formes d'objets."
common_mistake: "Écrire `interface ID = string` — ce n'est pas la syntaxe, ni le rôle."
related: [ts.alias.type.001, ts.alias.merge.001]
---

Que peut nommer une `interface`, d'après le handbook ?

## Explication

Une forme d'objet. Pas un primitif, pas une union. Et ce n'est pas une classe émise en JS.
