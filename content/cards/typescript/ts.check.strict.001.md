---
id: ts.check.strict.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.check.001
choices:
  - { id: a, text: "`strict` allume d'un coup les drapeaux de vérif, dont `noImplicitAny` et `strictNullChecks`." }
  - { id: b, text: "`strict` empêche `tsc` d'émettre le JavaScript dès la première erreur de type." }
  - { id: c, text: "`strict` convertit chaque `any` en `unknown` sans changer les autres drapeaux." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
insight: "Un code neuf gagne à partir de `\"strict\": true`. On peut encore retirer un drapeau un par un."
common_mistake: "Prendre `strict` pour `noEmitOnError` : l'un vérifie plus, l'autre refuse d'écrire le `.js`."
related: [ts.check.noemit.001, ts.everyday.any.001]
---

Que fait le drapeau `strict` dans TypeScript ?

## Explication

C'est un interrupteur groupé pour la sévérité du type-check, pas pour l'émission du JS, et pas une réécriture automatique de `any`.
