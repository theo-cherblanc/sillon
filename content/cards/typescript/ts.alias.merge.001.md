---
id: ts.alias.merge.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.alias.001
choices:
  - { id: a, text: "Une `interface` peut être rouverte pour ajouter des champs ; un `type` ne se fusionne pas." }
  - { id: b, text: "Un `type` peut être rouvert pour ajouter des champs ; une `interface` est figée." }
  - { id: c, text: "`type` et `interface` se fusionnent de la même façon dès que le nom est répété." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Deux `interface Window { ... }` se recollent. Deux `type Window = ...` : identifiant en double."
common_mistake: "Réécrire un `type` pour « ajouter un champ » et tomber sur Duplicate identifier."
related: [ts.union.and.001, ts.alias.iface.001]
---

Quelle différence de fusion le handbook retient-il entre `type` et `interface` ?

## Explication

L'interface se rouvre (declaration merging). L'alias, non. Ce n'est pas l'inverse, et ce n'est pas le même comportement.
