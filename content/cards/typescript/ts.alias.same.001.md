---
id: ts.alias.same.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.alias.001
choices:
  - { id: a, text: "Un alias n'invente pas un type distinct : le remplacer par le type écrit revient au même." }
  - { id: b, text: "Un alias invente une marque à l'exécution, qui empêche d'assigner le type de base." }
  - { id: c, text: "Un alias verrouille le type : une valeur `string` ne peut plus aller dans `type ID = string`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "`UserInputSanitizedString` reste un `string`. On peut encore y remettre une chaîne brute."
common_mistake: "Croire qu'un alias « sanitizé » protège au runtime contre une string quelconque."
related: [ts.alias.type.001, ts.check.erase.001]
---

Un alias `type UserInputSanitizedString = string` crée-t-il un nouveau type distinct ?

## Explication

Non : c'est le même `string`. Pas de marque runtime, pas d'interdiction d'y remettre une chaîne.
