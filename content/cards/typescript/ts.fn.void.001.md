---
id: ts.fn.void.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.fn.001
choices:
  - { id: a, text: "`void` décrit une fonction dont la valeur de retour n'est pas destinée à être utilisée." }
  - { id: b, text: "`void` est identique à `undefined` : la fonction doit `return undefined` à chaque chemin." }
  - { id: c, text: "`void` est identique à `never` : la fonction ne doit pas terminer son exécution." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/functions.html
insight: "Un callback `() => void` peut parfois `return true` : l'appelant n'est pas censé lire le résultat."
common_mistake: "Exiger `return undefined` partout, ou confondre avec `never` (la fonction qui ne rend pas)."
related: [ts.narrow.never.001, ts.fn.return.001]
---

Que signifie le type de retour `void` ?

## Explication

L'appelant n'utilise pas la valeur. Ce n'est pas le contrat `undefined` obligatoire, et ce n'est pas `never`.
