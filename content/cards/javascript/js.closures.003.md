---
id: js.closures.003
type: mcq
topic: javascript
tags: [closures, scope]
difficulty: 2
choices:
  - { id: a, text: "`undefined`" }
  - { id: b, text: "`42`" }
  - { id: c, text: "Une `ReferenceError` : `x` n'existe plus." }
correctChoiceId: b
insight: "La fermeture garde la variable, pas une photocopie figée prise au `return`. Si `x` pouvait encore changer, `read()` verrait la nouvelle valeur."
common_mistake: "Lire `x` après `outer()`, comme si la variable était devenue globale. `x` n'est plus en portée. `read()` l'est."
related: [js.closures.001, js.scope.006]
---

Que renvoie `read()` ?

```js
function outer() {
  const x = 42
  return () => x
}
const read = outer()
read()
```

## Explication

`read` est la fonction renvoyée. Elle a gardé `x` avec elle. Appeler `read()`, ce n'est pas relire un `x` global : ce `x` n'est plus en portée dans le script. C'est la fermeture qui le tient.
