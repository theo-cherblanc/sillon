---
id: ts.everyday.any.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.everyday.001
choices:
  - { id: a, text: "`any` coupe la vérif : on peut tout lire, tout appeler, tout assigner." }
  - { id: b, text: "`any` accepte toutes les valeurs mais bloque les appels et les lectures de propriétés." }
  - { id: c, text: "`any` est un union de tous les primitifs, sans désactiver le type-check." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Une ligne en `any` n'est plus du TypeScript utile : la suite est supposée « tu sais mieux »."
common_mistake: "Poser `any` « pour débloquer » et croire que le reste du fichier reste protégé."
related: [ts.check.strict.001, ts.gen.any.001]
---

Que permet le type `any` ?

## Explication

Il désactive la suite des contrôles sur cette valeur. Ce n'est pas un union prudent, et ça n'interdit pas les appels.
