---
id: ts.check.infer.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.check.001
choices:
  - { id: a, text: "TypeScript infère souvent le type tout seul, d'après l'initialiseur." }
  - { id: b, text: "TypeScript exige une annotation sur chaque `const`, sinon le type reste `any`." }
  - { id: c, text: "TypeScript refuse d'inférer : sans annotation, le fichier ne compile pas." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
insight: "`const msg = \"hello there!\"` est déjà un `string`. L'annotation en plus ne change rien."
common_mistake: "Annoter par réflexe chaque variable, y compris quand l'inférence dit la même chose."
related: [ts.check.strict.001, ts.everyday.annot.001]
---

Que fait TypeScript quand on écrit `const msg = "hello there!"` sans annotation ?

## Explication

Il figure le type d'après la valeur. Ce n'est pas `any` par défaut ici, et ce n'est pas une erreur d'omission.
