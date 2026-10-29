---
id: ts.util.pick.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.util.001
choices:
  - { id: a, text: "`Pick<Type, Keys>` garde seulement les propriétés listées dans `Keys`." }
  - { id: b, text: "`Pick<Type, Keys>` enlève les propriétés listées dans `Keys`, comme `Omit`." }
  - { id: c, text: "`Pick<Type, Keys>` garde les membres d'une union, comme `Extract`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/utility-types.html
insight: "`Pick<Todo, \"title\" | \"completed\">` : un aperçu, sans `description`."
common_mistake: "Inverser Pick et Omit, ou les appliquer à une union de primitifs."
related: [ts.util.omit.001, ts.util.keyof.001]
---

Que construit l'utilitaire `Pick` ?

## Explication

Un sous-ensemble de champs d'un type objet. Ce n'est pas `Omit`, et ce n'est pas `Extract` sur une union.
