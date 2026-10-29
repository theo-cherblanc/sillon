---
id: ts.check.runtime.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.check.001
choices:
  - { id: a, text: "Les annotations de types ne changent jamais le comportement à l'exécution." }
  - { id: b, text: "Les annotations de types insèrent un contrôle `typeof` avant chaque appel." }
  - { id: c, text: "Les annotations de types convertissent les valeurs, comme un cast C à l'exécution." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
insight: "Le handbook le dit tel quel : remember, type annotations never change the runtime behavior."
common_mistake: "Traiter `: string` comme un garde-fou qui arrêtera le JS déjà compilé."
related: [ts.check.erase.001, ts.alias.as.001]
---

Quel effet une annotation de type a-t-elle sur le programme qui tourne ?

## Explication

Elle sert au vérificateur, puis disparaît. Elle n'ajoute pas de test runtime, et elle ne convertit pas les valeurs.
