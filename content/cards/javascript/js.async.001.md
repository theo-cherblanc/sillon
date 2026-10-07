---
id: js.async.001
type: mcq
topic: javascript
tags: [async]
difficulty: 2
choices:
  - { id: a, text: "A, puis B, puis C" }
  - { id: b, text: "A, puis C, puis B" }
  - { id: c, text: "B, puis A, puis C" }
correctChoiceId: b
insight: "`then` n'exécute pas la fonction tout de suite. Il attend que le code synchrone en cours soit terminé."
common_mistake: "Lire le code de haut en bas et placer B entre A et C, comme si `then` s'exécutait immédiatement."
related: [js.async.order.001, js.async.004]
---

Dans quel ordre les lettres s'affichent-elles ?

```js
console.log("A")
Promise.resolve().then(() => console.log("B"))
console.log("C")
```

## Explication

La fonction passée à `then` est une microtâche. Il attend que le code synchrone en cours soit fini. `A` et `C` s'affichent donc avant `B`.
