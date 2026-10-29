---
id: ts.everyday.capital.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.everyday.001
choices:
  - { id: a, text: "`String`, `Number` et `Boolean` nomment des objets internes, pas les types du quotidien." }
  - { id: b, text: "`String`, `Number` et `Boolean` sont les seules graphies acceptées pour les primitifs." }
  - { id: c, text: "`String`, `Number` et `Boolean` sont des alias stricts de `string`, `number` et `boolean`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Le handbook est net : always use `string`, `number`, or `boolean` for types."
common_mistake: "Copier `String` depuis un autre langage à types capitalisés."
related: [ts.everyday.primitive.001, ts.everyday.annot.001]
---

Que désignent les types `String`, `Number` et `Boolean` avec une capitale ?

## Explication

Ce sont des types bâtis à part, rarement écrits. Ils ne sont pas la graphie obligatoire des primitifs, ni de simples alias interchangeables au quotidien.
