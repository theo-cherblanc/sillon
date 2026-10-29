---
id: ts.alias.as.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.alias.001
choices:
  - { id: a, text: "Une assertion `as` est effacée : aucun contrôle à l'exécution si elle est fausse." }
  - { id: b, text: "Une assertion `as` insère un `instanceof` qui lève si la valeur ne correspond pas." }
  - { id: c, text: "Une assertion `as` convertit vraiment la valeur, comme `Number(\"1\")` en JavaScript." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "`as HTMLCanvasElement` ne vérifie pas le DOM. Si ce n'est pas un canvas, le JS continue."
common_mistake: "S'appuyer sur `as` comme sur un parseur qui garantit le type au runtime."
related: [ts.check.erase.001, ts.alias.impossible.001]
---

Que reste-t-il d'une assertion `as HTMLCanvasElement` une fois compilée ?

## Explication

Rien. Pas de test `instanceof`, pas de conversion. Le handbook : no runtime checking associated with a type assertion.
