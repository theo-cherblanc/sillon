---
id: ts.everyday.tuple.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.everyday.001
choices:
  - { id: a, text: "`[number]` décrit un tuple d'un élément, pas un tableau de nombres." }
  - { id: b, text: "`[number]` est la graphie courte de `number[]`, les deux types étant identiques." }
  - { id: c, text: "`[number]` décrit un objet dont la clé `number` est optionnelle." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Crochets après le type : tableau. Crochets autour du type : tuple."
common_mistake: "Lire `[number]` comme « un array de number » en glissant l'ordre des crochets."
related: [ts.everyday.array.001, ts.gen.array.001]
---

Que décrit la notation `[number]`, d'après le handbook ?

## Explication

C'est un tuple d'un `number`. Ce n'est pas `number[]`, et ce n'est pas un objet à clé optionnelle.
