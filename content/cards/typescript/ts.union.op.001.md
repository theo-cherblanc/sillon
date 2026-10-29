---
id: ts.union.op.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.union.001
choices:
  - { id: a, text: "Sur une union, TypeScript n'autorise une opération que si elle est valable pour chaque membre." }
  - { id: b, text: "Sur une union, TypeScript autorise toute opération dès qu'elle existe sur au moins un membre." }
  - { id: c, text: "Sur une union, TypeScript refuse toute méthode, même `slice` commun à `string` et au tableau." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "`toUpperCase` sur `string | number` : refusé. `slice` sur `string | string[]` : OK, les deux l'ont."
common_mistake: "Appeler une méthode « évidente » du string sans `typeof` d'abord."
related: [ts.narrow.guard.001, ts.union.form.001]
---

Quand TypeScript laisse-t-il appeler une méthode sur une union ?

## Explication

Seulement si tous les membres la connaissent. Un seul membre ne suffit pas. Les méthodes vraiment communes passent sans narrowing.
