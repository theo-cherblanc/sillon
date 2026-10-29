---
id: ts.gen.ident.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.gen.001
choices:
  - { id: a, text: "Un générique capte le type de l'argument et le réutilise au retour, sans le perdre." }
  - { id: b, text: "Un générique capte le type de l'argument puis le remplace par `any` au retour." }
  - { id: c, text: "Un générique capte le type de l'argument seulement si on écrit `identity<any>(...)`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/generics.html
insight: "`function identity<Type>(arg: Type): Type` : le hello world du handbook. C'est l'écho typé."
common_mistake: "Réécrire l'identité en `any` « pour que ça marche partout » et perdre le type en sortie."
related: [ts.gen.any.001, ts.gen.infer.001]
---

Que fait une fonction générique d'identité `identity<Type>(arg: Type): Type` ?

## Explication

Le type entre et ressort identique. Il n'est pas oublié en `any`, et on n'a pas besoin d'appeler avec `<any>`.
