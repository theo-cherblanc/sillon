---
id: ts.union.and.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.union.001
choices:
  - { id: a, text: "L'intersection `A & B` combine les deux formes ; l'union `A | B` choisit un membre." }
  - { id: b, text: "L'intersection `A & B` choisit un membre ; l'union `A | B` combine les deux formes." }
  - { id: c, text: "L'intersection et l'union sont deux graphies du même opérateur, sans différence de sens." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Pour étendre un `type` objet, le handbook croise avec `&`. Pour « string ou number », c'est `|`."
common_mistake: "Étendre un type alias avec `|` en croyant ajouter des champs."
related: [ts.union.form.001, ts.alias.merge.001]
---

Quelle différence y a-t-il entre `|` et `&` sur des types ?

## Explication

`|` : un ou l'autre. `&` : les deux à la fois. Ce n'est pas la même chose sous deux écritures.
