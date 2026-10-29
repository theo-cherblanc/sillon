---
id: ts.narrow.never.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.narrow.001
choices:
  - { id: a, text: "`never` est le type des valeurs qui n'arrivent jamais ; il rend un `switch` exhaustif." }
  - { id: b, text: "`never` est un alias de `void`, pour les fonctions qui n'utilisent pas leur retour." }
  - { id: c, text: "`never` est le type de `null` une fois `strictNullChecks` allumé." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
insight: "Dans le `default`, assigner `shape` à une variable `never` : un nouveau membre d'`union` cassera la compil."
common_mistake: "Écrire `default: return 0` silencieux, et oublier le cas `triangle` plus tard."
related: [ts.narrow.kind.001, ts.fn.void.001]
---

À quoi sert le type `never` dans un `switch` sur une union ?

## Explication

Il marque l'impossible. Un cas oublié n'est plus `never`. Ce n'est pas `void`, et ce n'est pas `null`.
