---
id: ts.narrow.typeof.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.narrow.001
choices:
  - { id: a, text: "`typeof` est un type guard ; comparer son résultat affine le type dans la branche." }
  - { id: b, text: "`typeof` est ignoré par TypeScript, car il n'existe qu'à l'exécution JavaScript." }
  - { id: c, text: "`typeof` convertit la valeur vers le type nommé, puis TypeScript fait confiance au résultat." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
insight: "Les chaînes reconnues : `string`, `number`, `bigint`, `boolean`, `symbol`, `undefined`, `object`, `function`."
common_mistake: "Attendre `typeof x === \"null\"` : cette chaîne n'existe pas."
related: [ts.narrow.null.001, ts.narrow.guard.001]
---

Quel rôle TypeScript donne-t-il à `typeof` dans un `if` ?

## Explication

C'est un garde : la comparaison affine le type. `typeof` n'est pas ignoré, et il ne convertit pas la valeur.
