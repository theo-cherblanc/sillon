---
id: ts.narrow.in.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.narrow.001
choices:
  - { id: a, text: "`in` est un type guard : il affine selon la présence d'un nom de propriété." }
  - { id: b, text: "`in` est un type guard : il affine selon le résultat de `typeof` sur la valeur." }
  - { id: c, text: "`in` n'est pas un type guard : TypeScript l'ignore, comme une lecture dynamique." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
insight: "`\"swim\" in pet` : si `Fish` a `swim` et `Bird` non, la branche sait quel membre on tient."
common_mistake: "Écrire `typeof pet === \"Fish\"` : `typeof` ne rend pas le nom d'une interface."
related: [ts.narrow.kind.001, ts.narrow.typeof.001]
---

Que permet l'opérateur `in` pour le narrowing ?

## Explication

Il distingue les membres d'une union d'objets par un nom de champ. Ce n'est pas `typeof`, et TypeScript le comprend.
