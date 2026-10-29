---
id: ts.check.erase.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.check.001
choices:
  - { id: a, text: "Le compilateur efface les annotations de types en émettant le JavaScript." }
  - { id: b, text: "Le compilateur convertit les annotations en tests `typeof` exécutés au runtime." }
  - { id: c, text: "Le compilateur laisse les annotations dans le fichier `.js` pour le navigateur." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
insight: "Ouvre le `.js` émis : plus de `: string`. Le runtime n'a jamais vu l'annotation."
common_mistake: "Attendre que `person: string` lève une exception si on passe un nombre en JS déjà émis."
related: [ts.check.runtime.001, ts.check.emit.001]
---

Que devient une annotation de type une fois `tsc` passé ?

## Explication

Les annotations ne font pas partie de JavaScript. `tsc` les retire. Aucun `typeof` n'est injecté à la place, et le navigateur ne les lit pas.
