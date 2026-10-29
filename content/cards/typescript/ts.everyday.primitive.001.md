---
id: ts.everyday.primitive.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.everyday.001
choices:
  - { id: a, text: "Les primitifs courants s'écrivent `string`, `number` et `boolean`, en minuscules." }
  - { id: b, text: "Les primitifs courants s'écrivent `String`, `Number` et `Boolean`, avec une capitale." }
  - { id: c, text: "Les primitifs courants s'écrivent `int`, `float` et `bool`, comme en Java." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Ce sont les mêmes noms que `typeof` à l'exécution. Un seul `number` : pas d'`int` à part."
common_mistake: "Typer avec `String` parce que ça « fait plus objet »."
related: [ts.everyday.capital.001, ts.everyday.array.001]
---

Comment s'écrivent les types primitifs du quotidien en TypeScript ?

## Explication

Minuscules, comme `typeof`. JavaScript n'a pas d'`int` séparé. Les versions capitalisées nomment d'autres objets internes, rarement utiles ici.
