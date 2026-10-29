---
id: ts.everyday.array.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.everyday.001
choices:
  - { id: a, text: "Un tableau de nombres s'écrit `number[]`, ou de façon équivalente `Array<number>`." }
  - { id: b, text: "Un tableau de nombres s'écrit `[number]`, un tuple d'un seul élément étant autre chose." }
  - { id: c, text: "Un tableau de nombres s'écrit `number...`, la syntaxe restant identique aux rest parameters." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
insight: "`string[]` suit le même moule. `[number]` attend un tuple d'un `number`, pas un tableau."
common_mistake: "Croire que `[number]` et `number[]` se lisent pareil."
related: [ts.everyday.tuple.001, ts.everyday.primitive.001]
---

Comment type-t-on un tableau comme `[1, 2, 3]` ?

## Explication

`T[]` ou `Array<T>`. `[number]` est la notation de tuple, pas celle du tableau. Les rest parameters s'écrivent autrement.
