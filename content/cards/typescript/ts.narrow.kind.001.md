---
id: ts.narrow.kind.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.narrow.001
choices:
  - { id: a, text: "Une union discriminée partage un champ littéral, souvent `kind`, qui réduit chaque branche." }
  - { id: b, text: "Une union discriminée partage un champ `any`, pour que chaque branche accepte tout." }
  - { id: c, text: "Une union discriminée exige `instanceof`, les littéraux ne suffisant jamais à réduire." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
insight: "`switch (shape.kind)` : `\"circle\"` donne `radius`, `\"square\"` donne `sideLength`."
common_mistake: "Typer `kind: string` : plus de littéraux, plus de discrimination."
related: [ts.narrow.never.001, ts.union.literal.001]
---

Comment une union discriminée permet-elle de réduire le type ?

## Explication

Un champ à littéraux différents sert de bascule. Pas besoin d'`any`, et `instanceof` n'est pas obligatoire ici.
