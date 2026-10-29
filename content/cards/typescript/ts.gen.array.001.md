---
id: ts.gen.array.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.gen.001
choices:
  - { id: a, text: "Typer `arg` en `Type[]` autorise `length`, parce qu'un tableau a toujours cette propriété." }
  - { id: b, text: "Typer `arg` en `Type[]` interdit `length`, le générique restant trop vague." }
  - { id: c, text: "Typer `arg` en `Type[]` convertit `Type` en `any[]`, et `length` redevient un `any`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/generics.html
insight: "`loggingIdentity` : « takes Type, an argument arg which is an array of Types, and returns an array of Types »."
common_mistake: "Garder `Type` nu et caster `as any` pour lire `length`."
related: [ts.gen.length.001, ts.everyday.array.001]
---

Comment faire pour lire `length` sur l'argument d'un générique, selon le handbook ?

## Explication

Travailler sur un tableau `Type[]` (ou `Array<Type>`). Ça n'interdit pas `length`, et ça ne retombe pas sur `any[]`.
