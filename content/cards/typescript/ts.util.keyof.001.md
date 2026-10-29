---
id: ts.util.keyof.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.util.001
choices:
  - { id: a, text: "`keyof T` produit l'union des clés de `T`, par exemple `\"x\" | \"y\"` pour un point." }
  - { id: b, text: "`keyof T` produit l'union des types de valeurs de `T`, par exemple `number` pour un point." }
  - { id: c, text: "`keyof T` produit un tableau des clés, disponible aussi à l'exécution via `Object.keys`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
insight: "C'est un opérateur de types. `Object.keys` au runtime rend `string[]`, plus large."
common_mistake: "Prendre `keyof` pour la liste des valeurs, ou pour un `Object.keys` typé magique."
related: [ts.util.record.001, ts.util.pick.001]
---

Que produit l'opérateur `keyof` ?

## Explication

L'union des noms de clés. Pas l'union des types de champs, et rien n'est émis dans le JavaScript.
