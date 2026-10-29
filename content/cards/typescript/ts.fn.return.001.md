---
id: ts.fn.return.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.fn.001
choices:
  - { id: a, text: "Le type de retour se place après la liste des paramètres, et l'inférence suffit souvent." }
  - { id: b, text: "Le type de retour se place avant `function`, comme `number function getFavoriteNumber()`." }
  - { id: c, text: "Le type de retour est obligatoire : sans lui, TypeScript refuse de compiler la fonction." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "`(): number` fige le contrat. Sans ça, les `return` suffisent souvent à inférer."
common_mistake: "Annoter par réflexe chaque retour, y compris quand rien ne change."
related: [ts.fn.promise.001, ts.fn.void.001]
---

Comment annote-t-on le retour d'une fonction ?

## Explication

Après `)` : `(): number`. Pas avant `function`. L'omettre n'est pas une erreur si l'inférence est claire.
