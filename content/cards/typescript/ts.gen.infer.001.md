---
id: ts.gen.infer.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.gen.001
choices:
  - { id: a, text: "On peut omettre `<string>` : le compilateur infère `Type` d'après l'argument passé." }
  - { id: b, text: "On doit toujours écrire `<string>` : sans ça, `Type` retombe sur `any`." }
  - { id: c, text: "On doit toujours écrire `<string>` : sans ça, l'appel est une erreur de syntaxe." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/generics.html
insight: "`identity(\"myString\")` : `Type` devient `string`. Les `<>` restent pour les cas où l'inférence décroche."
common_mistake: "Répéter le type en `<>` et dans l'argument, à chaque appel simple."
related: [ts.gen.call.001, ts.check.infer.001]
---

Faut-il passer l'argument de type à chaque appel d'`identity` ?

## Explication

Non : l'inférence le lit sur la valeur. Ce n'est pas `any` par défaut, et ce n'est pas une erreur de syntaxe.
