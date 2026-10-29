---
id: ts.narrow.truth.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.narrow.001
choices:
  - { id: a, text: "Un `if (x)` écarte aussi `0`, `\"\"` et `NaN`, pas seulement `null` et `undefined`." }
  - { id: b, text: "Un `if (x)` ne retire que `null` et `undefined`, les autres valeurs restant intactes." }
  - { id: c, text: "Un `if (x)` convertit `x` en booléen durable, donc `0` devient `false` pour la suite du fichier." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
insight: "Pour « est défini », on teste `x != null` (ou `!== undefined` selon le cas), pas la truthiness."
common_mistake: "Garder un compteur avec `if (count)` et sauter le zéro légitime."
related: [ts.narrow.guard.001, ts.union.bool.001]
---

Que retire un test de truthiness `if (x)` du type de `x` ?

## Explication

Tout ce que JS considère faux, y compris `0` et `""`. Ce n'est pas un simple filtre `null`/`undefined`, et ça ne mute pas la valeur pour le reste du fichier.
