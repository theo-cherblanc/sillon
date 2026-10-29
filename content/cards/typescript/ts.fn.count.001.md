---
id: ts.fn.count.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.fn.001
choices:
  - { id: a, text: "Même sans annotation sur les paramètres, TypeScript vérifie le nombre d'arguments passés." }
  - { id: b, text: "Sans annotation sur les paramètres, TypeScript n'a aucun avis sur le nombre d'arguments." }
  - { id: c, text: "Sans annotation sur les paramètres, TypeScript exige exactement zéro argument, comme en JS strict." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "Le handbook : even if you don't have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments."
common_mistake: "Croire qu'une fonction JS « non typée » dans un fichier `.ts` accepte n'importe quel arity."
related: [ts.fn.param.001, ts.check.infer.001]
---

TypeScript compte-t-il les arguments d'une fonction non annotée ?

## Explication

Oui : l'arité est checkée. Ce n'est pas le far-west JS, et ce n'est pas non plus « zéro argument obligatoire ».
