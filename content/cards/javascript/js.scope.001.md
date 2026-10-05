---
id: js.scope.001
type: mcq
topic: javascript
tags: [scope]
difficulty: 2
choices:
  - { id: a, text: "1 s'affiche" }
  - { id: b, text: "undefined s'affiche" }
  - { id: c, text: "une ReferenceError est lancée" }
correctChoiceId: c
---

Que se passe-t-il ?

```js
{
  let x = 1
}
console.log(x)
```

## Explication

`let` est limité au bloc entre accolades. En dehors de ce bloc, `x` n'existe pas, et le lire lance une `ReferenceError`.
