---
id: ts.util.partial.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.util.001
choices:
  - { id: a, text: "`Partial<Type>` rend toutes les propriétés optionnelles." }
  - { id: b, text: "`Partial<Type>` rend toutes les propriétés requises, l'inverse de `Required`." }
  - { id: c, text: "`Partial<Type>` retire `null` et `undefined`, comme `NonNullable`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/utility-types.html
insight: "Utile pour un objet de mise à jour : on n'envoie que les champs qui changent."
common_mistake: "Confondre avec `Required` (l'inverse) ou `NonNullable` (sur une union)."
related: [ts.util.required.001, ts.everyday.optional.001]
---

Que construit l'utilitaire `Partial` ?

## Explication

Un type où chaque champ peut manquer. Ce n'est pas `Required`, et ce n'est pas un filtre `null`.
