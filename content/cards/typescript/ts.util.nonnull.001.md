---
id: ts.util.nonnull.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.util.001
choices:
  - { id: a, text: "`NonNullable<Type>` retire `null` et `undefined` du type." }
  - { id: b, text: "`NonNullable<Type>` rend toutes les propriétés requises, comme `Required`." }
  - { id: c, text: "`NonNullable<Type>` convertit la valeur au runtime, et lève si elle est `null`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/utility-types.html
insight: "`string | null | undefined` devient `string`. Aucun `if` n'est inséré dans le JS."
common_mistake: "S'en servir comme d'un `!` runtime, ou à la place de `Required` sur un objet."
related: [ts.union.null.001, ts.util.exclude.001]
---

Que construit l'utilitaire `NonNullable` ?

## Explication

Le type sans `null` ni `undefined`. Pas `Required`, et rien n'est vérifié à l'exécution.
