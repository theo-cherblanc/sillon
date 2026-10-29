---
id: ts.narrow.null.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.narrow.001
choices:
  - { id: a, text: "`typeof null` vaut `\"object\"`, donc `typeof x === \"object\"` laisse `null` dans l'union." }
  - { id: b, text: "`typeof null` vaut `\"null\"`, donc un test `typeof` retire `null` tout seul." }
  - { id: c, text: "`typeof null` vaut `\"undefined\"`, donc `null` et `undefined` se testent de la même façon." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
insight: "Après `typeof strs === \"object\"`, il reste `string[] | null`. TypeScript le dit : `strs` is possibly `null`."
common_mistake: "Prendre un tableau pour « un objet », et oublier que `null` est aussi un objet pour `typeof`."
related: [ts.narrow.typeof.001, ts.union.null.001]
---

Pourquoi `typeof strs === "object"` ne prouve-t-il pas qu'on a un tableau ?

## Explication

`null` répond aussi `"object"`. Le test ne produit pas `"null"`, et il ne confond pas `null` avec `undefined`.
