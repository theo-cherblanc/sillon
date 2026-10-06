---
id: js.this.005
type: mcq
topic: javascript
tags: [this]
difficulty: 3
choices:
  - { id: a, text: "\"Ada\" s'affiche" }
  - { id: b, text: "undefined s'affiche" }
  - { id: c, text: "une TypeError est lancée" }
correctChoiceId: c
---

En mode strict, que se passe-t-il ?

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

La fonction passée à `setTimeout` n'est pas appelée comme méthode de `user`. En mode strict, son `this` vaut `undefined`, et lire `this.name` lance une `TypeError`. Une fonction flèche aurait repris le `this` de `later`.
