---
id: ts.util.required.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.util.001
choices:
  - { id: a, text: "`Required<Type>` rend toutes les propriétés requises : c'est l'inverse de `Partial`." }
  - { id: b, text: "`Required<Type>` rend toutes les propriétés optionnelles : c'est un alias de `Partial`." }
  - { id: c, text: "`Required<Type>` retire les propriétés `readonly`, sans toucher à l'optionnalité." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/utility-types.html
insight: "Un `{ a: number; b?: number }` passé dans `Required` exige aussi `b`."
common_mistake: "L'utiliser pour enlever `readonly` : ça, c'est un autre utilitaire, pas celui-ci."
related: [ts.util.partial.001, ts.util.readonly.001]
---

Que construit l'utilitaire `Required` ?

## Explication

Tout devient obligatoire. Ce n'est pas `Partial`, et ça ne parle pas de `readonly`.
