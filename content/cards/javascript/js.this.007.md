---
id: js.this.007
type: mcq
topic: javascript
tags: [this]
difficulty: 3
choices:
  - { id: a, text: "`setTimeout` attend trop longtemps, `name` a disparu." }
  - { id: b, text: "La fonction donnée à `setTimeout` n'est pas appelée comme méthode de `user`." }
  - { id: c, text: "`later` n'est pas une flèche, donc `this` est déjà perdu avant le timer." }
correctChoiceId: b
source: "https://developer.mozilla.org/fr/docs/Web/API/Window/setTimeout"
insight: "Dans le navigateur, `this` est souvent `window` : tu logues `window.name`, pas une TypeError. En Node, `this` est l'objet Timeout."
common_mistake: "Croire qu'en mode strict, `this` vaut forcément `undefined` dans le callback de `setTimeout`. C'est l'hôte qui décide."
related: [js.this.001, js.this.002]
---

Pourquoi `console.log(this.name)` n'affiche-t-il pas `"Ada"` ?

```js
const user = {
  name: "Ada",
  later() {
    setTimeout(function () {
      console.log(this.name)
    }, 0)
  },
}
user.later()
```

## Explication

`setTimeout` range la fonction et l'appelle plus tard, sans `user`. Ce n'est plus `user.later()`. Une fonction flèche, écrite dans `later`, garderait le `this` de `later`, donc `user`.
