---
id: ts.alias.type.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.alias.001
choices:
  - { id: a, text: "Un alias `type` donne un nom à n'importe quel type : objet, union ou littéral." }
  - { id: b, text: "Un alias `type` ne peut nommer qu'une forme d'objet, jamais une union." }
  - { id: c, text: "Un alias `type` crée une classe à l'exécution, distincte du type écrit à droite." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "`type ID = number | string` : un nom, pas un nouvel objet runtime."
common_mistake: "Réserver `type` aux objets et `interface` aux unions — c'est l'inverse qui bloque : l'interface ne renomme pas un primitif."
related: [ts.alias.same.001, ts.alias.iface.001]
---

Que permet un alias déclaré avec `type` ?

## Explication

C'est un nom pour tout type. Pas seulement un objet, et rien n'est créé à l'exécution.
