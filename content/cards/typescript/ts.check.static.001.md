---
id: ts.check.static.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.check.001
choices:
  - { id: a, text: "TypeScript décrit les types avant d'exécuter le programme, et signale ce qui déraille." }
  - { id: b, text: "TypeScript exécute le programme pour lire les types au moment du crash." }
  - { id: c, text: "TypeScript remplace JavaScript dans le navigateur et y interprète les annotations." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
insight: "Le type-checker parle avant le runtime. JavaScript, lui, découvre les types en courant."
common_mistake: "Croire que TypeScript est une machine virtuelle qui exécute les annotations."
related: [ts.check.erase.001, ts.check.runtime.001]
---

Que fait un vérificateur de types statique comme TypeScript ?

## Explication

Il prédit formes et comportements avant l'exécution. Ce n'est pas un second moteur JS, et ce n'est pas non plus « lancer pour voir ».
