---
id: js.closures.006
type: mcq
topic: javascript
tags: [closures]
difficulty: 2
choices:
  - { id: a, text: "1" }
  - { id: b, text: "2" }
  - { id: c, text: "0" }
correctChoiceId: a
---

Que renvoie `b()` ?

```js
function make() {
  let n = 0
  return () => ++n
}
const a = make()
const b = make()
a()
```

## Explication

Chaque appel à `make` crée son propre `n`. `a` et `b` ne partagent pas le compteur. `a()` le passe à `1` de son côté. `b()` part de `0` et renvoie `1`.
