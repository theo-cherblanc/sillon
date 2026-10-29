---
id: ts.alias.struct.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.alias.001
choices:
  - { id: a, text: "TypeScript est structurel : un objet convient s'il a les propriétés attendues." }
  - { id: b, text: "TypeScript est nominal : un objet ne convient que s'il a été déclaré avec le même nom." }
  - { id: c, text: "TypeScript est structurel pour `type` et nominal pour `interface`." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "`printCoord({ x: 100, y: 100 })` : pas besoin d'avoir écrit `implements Point`."
common_mistake: "Exiger une classe ou un `implements` pour passer un objet littéral."
related: [ts.alias.iface.001, ts.alias.type.001]
---

Comment TypeScript décide-t-il qu'un objet convient à un type objet ?

## Explication

Il regarde la forme, pas le nom de la déclaration. `type` et `interface` se valent sur ce point. Ce n'est pas un système nominal.
