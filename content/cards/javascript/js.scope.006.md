---
id: js.scope.006
type: mcq
topic: javascript
tags: [scope]
difficulty: 1
choices:
  - { id: a, text: "1" }
  - { id: b, text: "2" }
  - { id: c, text: "une ReferenceError est lancée" }
correctChoiceId: b
---

Qu'affiche ce code ?

```js
const n = 1
{
  const n = 2
  console.log(n)
}
```

## Explication

Le `n` du bloc masque celui de l'extérieur, mais seulement entre les accolades. `console.log` lit celui du bloc, qui vaut `2`.
