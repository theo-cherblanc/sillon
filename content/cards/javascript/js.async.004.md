---
id: js.async.004
type: mcq
topic: javascript
tags: [async]
difficulty: 3
choices:
  - { id: a, text: "A, puis B, puis C" }
  - { id: b, text: "A, puis C, puis B" }
  - { id: c, text: "C, puis A, puis B" }
correctChoiceId: b
insight: "`await` rend la main à l'appelant. Ce n'est pas une pause de tout le programme : `C` s'affiche pendant que `run` attend."
related: [js.async.001, js.async.cloze.001]
---

Dans quel ordre les lettres s'affichent-elles ?

```js
async function run() {
  console.log("A")
  await Promise.resolve()
  console.log("B")
}
run()
console.log("C")
```

## Explication

`A` s'affiche tout de suite. `await` rend la main à l'appelant, donc `C` continue. La suite de `run`, après le `await`, reprend comme une microtâche : `B` s'affiche en dernier.
