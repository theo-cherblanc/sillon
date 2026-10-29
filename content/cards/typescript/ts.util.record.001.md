---
id: ts.util.record.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.util.001
choices:
  - { id: a, text: "`Record<Keys, Type>` décrit un objet dont les clés sont `Keys` et les valeurs `Type`." }
  - { id: b, text: "`Record<Keys, Type>` décrit un tableau indexé par `Keys`, avec des éléments `Type`." }
  - { id: c, text: "`Record<Keys, Type>` décrit une union, en enregistrant `Keys` ou `Type` au choix." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/utility-types.html
insight: "`Record<CatName, CatInfo>` : chaque nom de chat doit être présent, avec le même shape d'info."
common_mistake: "S'en servir comme d'un `Map` runtime. C'est un type d'objet, pas une classe."
related: [ts.util.keyof.001, ts.union.literal.001]
---

Que construit l'utilitaire `Record` ?

## Explication

Un type objet clé → valeur. Pas un tableau, pas une union de `Keys` avec `Type`.
