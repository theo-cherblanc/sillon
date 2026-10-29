---
id: ts.util.exclude.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.util.001
choices:
  - { id: a, text: "`Exclude<Union, Members>` retire de l'union les membres assignables à `Members`." }
  - { id: b, text: "`Exclude<Union, Members>` retire d'un objet les propriétés dont le nom est dans `Members`." }
  - { id: c, text: "`Exclude<Union, Members>` rend optionnelles les propriétés listées dans `Members`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/utility-types.html
insight: "`Exclude<\"a\" | \"b\" | \"c\", \"a\">` vaut `\"b\" | \"c\"`. Pour un objet, c'est `Omit`."
common_mistake: "Exclure un champ d'interface avec `Exclude` : le mauvais outil."
related: [ts.util.omit.001, ts.util.nonnull.001]
---

Que construit l'utilitaire `Exclude` ?

## Explication

Une union plus petite. Pas un objet amputé de clés, pas un `Partial` ciblé.
