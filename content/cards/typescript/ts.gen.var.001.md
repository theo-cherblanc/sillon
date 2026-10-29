---
id: ts.gen.var.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.gen.001
choices:
  - { id: a, text: "Une variable de type (`Type`, souvent `T`) travaille sur les types, pas sur les valeurs." }
  - { id: b, text: "Une variable de type (`Type`, souvent `T`) est une variable JavaScript, lisible au runtime." }
  - { id: c, text: "Une variable de type (`Type`, souvent `T`) est un alias obligatoire de `any` dans le corps." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/generics.html
insight: "`Type` disparaît à la compilation, comme les autres annotations. On n'écrit pas `console.log(Type)`."
common_mistake: "Chercher `T` dans le `.js` émis, ou s'en servir comme d'une valeur."
related: [ts.check.erase.001, ts.gen.ident.001]
---

Qu'est-ce qu'une variable de type dans un générique ?

## Explication

Un paramètre pour les types. Pas une valeur JS, pas un `any` déguisé.
