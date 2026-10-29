---
id: ts.union.null.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.union.001
choices:
  - { id: a, text: "Avec `strictNullChecks`, `null` et `undefined` s'ajoutent à l'union quand ils sont possibles." }
  - { id: b, text: "Avec `strictNullChecks`, `null` et `undefined` redeviennent assignables à n'importe quel type." }
  - { id: c, text: "Avec `strictNullChecks`, `null` est effacé du runtime, `undefined` restant un `any`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Sans le drapeau, `null` se glisse partout. Avec, on écrit `string | null` quand c'est vraiment possible."
common_mistake: "Oublier `| null` puis « corriger » en désactivant `strictNullChecks`."
related: [ts.check.strict.001, ts.narrow.null.001]
---

Comment TypeScript traite-t-il `null` une fois `strictNullChecks` allumé ?

## Explication

Ils cessent d'être assignables à tout. On les unionne explicitement. Le drapeau n'efface rien au runtime.
