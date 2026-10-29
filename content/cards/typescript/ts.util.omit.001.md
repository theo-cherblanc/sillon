---
id: ts.util.omit.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.util.001
choices:
  - { id: a, text: "`Omit<Type, Keys>` enlève les propriétés listées ; c'est l'inverse de `Pick`." }
  - { id: b, text: "`Omit<Type, Keys>` garde seulement les propriétés listées ; c'est un alias de `Pick`." }
  - { id: c, text: "`Omit<Type, Keys>` retire des membres d'une union ; c'est un alias de `Exclude`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/utility-types.html
insight: "`Omit<Todo, \"description\">` : tout `Todo` sauf ce champ. `Keys` sont des noms de propriétés."
common_mistake: "Omettre un membre d'union avec `Omit` : pour ça, c'est `Exclude`."
related: [ts.util.pick.001, ts.util.exclude.001]
---

Que construit l'utilitaire `Omit` ?

## Explication

Le type moins certaines clés. Pas `Pick`, pas `Exclude` (qui travaille sur une union, pas sur des champs).
