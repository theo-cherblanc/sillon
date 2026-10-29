---
id: ts.gen.any.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.gen.001
choices:
  - { id: a, text: "`any` accepte tout mais oublie le type au retour ; le générique le conserve." }
  - { id: b, text: "`any` et un générique sont équivalents : les deux conservent le type au retour." }
  - { id: c, text: "`any` conserve le type au retour ; un générique l'élargit toujours à `unknown`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/generics.html
insight: "Le handbook : using `any` is generic in that it accepts all types, but we lose what that type was when the function returns."
common_mistake: "Remplacer `<Type>` par `any` dès que le compilateur râle sur `length`."
related: [ts.everyday.any.001, ts.gen.ident.001]
---

En quoi `identity(arg: any): any` diffère-t-il d'un générique ?

## Explication

Les deux acceptent beaucoup. Seul le générique se souvient de ce qui est entré. Ce n'est pas l'inverse.
