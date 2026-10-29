---
id: ts.gen.call.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.gen.001
choices:
  - { id: a, text: "On peut passer le type explicitement : `identity<string>(\"myString\")`, entre chevrons." }
  - { id: b, text: "On peut passer le type explicitement : `identity(\"myString\", string)`, après la valeur." }
  - { id: c, text: "On peut passer le type explicitement : `identity(string, \"myString\")`, avant la valeur." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/generics.html
insight: "Les `<>` sont des arguments de type, distincts des `()` d'arguments de valeur."
common_mistake: "Glisser le type dans la liste des valeurs, comme un paramètre de plus."
related: [ts.gen.infer.001, ts.gen.ident.001]
---

Comment passe-t-on explicitement l'argument de type à `identity` ?

## Explication

Entre `<>`, avant les parenthèses de valeur. Pas comme un argument JS supplémentaire, ni avant la valeur dans `()`.
