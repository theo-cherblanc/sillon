---
id: ts.union.bool.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.union.001
choices:
  - { id: a, text: "`boolean` est un alias de l'union `true | false`." }
  - { id: b, text: "`boolean` est un primitif distinct, sans rapport avec les littéraux `true` et `false`." }
  - { id: c, text: "`boolean` est un alias de `true | false | 0 | 1`, comme en C." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "On peut typer un flag `true` tout seul si la valeur ne peut plus basculer."
common_mistake: "Ajouter `0` et `1` dans le type « pour coller au JS truthy »."
related: [ts.union.literal.001, ts.narrow.truth.001]
---

Quel rapport le type `boolean` a-t-il avec `true` et `false` ?

## Explication

C'est exactement l'union des deux littéraux. Pas un troisième primitif, et pas `0`/`1`.
