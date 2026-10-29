---
id: ts.fn.optional.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.fn.001
choices:
  - { id: a, text: "Un paramètre `name?: string`, ou un défaut `name = \"world\"`, peut être omis à l'appel." }
  - { id: b, text: "Un paramètre `name?: string` peut être omis ; un défaut `name = \"world\"` reste obligatoire." }
  - { id: c, text: "Un paramètre optionnel s'écrit `name: string | void`, sans `?` ni valeur par défaut." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/functions.html
insight: "Le `?` et le défaut rendent tous les deux le paramètre omissible. Le défaut sert aussi de valeur."
common_mistake: "Mettre `?` et un défaut, puis s'étonner que `undefined` explicite passe encore."
related: [ts.everyday.optional.001, ts.fn.param.001]
---

Comment rend-on un paramètre de fonction omissible ?

## Explication

`?` ou une valeur par défaut. Le défaut n'oblige pas à passer l'argument. Ce n'est pas `string | void`.
