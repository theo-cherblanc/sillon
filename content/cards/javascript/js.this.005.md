---
id: js.this.005
type: mcq
topic: javascript
tags: [this]
difficulty: 3
deprecated: true
choices:
  - { id: a, text: "\"Ada\" s'affiche" }
  - { id: b, text: "undefined s'affiche" }
  - { id: c, text: "une TypeError est lancée" }
correctChoiceId: c
related: [js.this.007]
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

Cette carte est retirée : la réponse annoncée (TypeError) est fausse. `setTimeout` n'appelle pas le callback avec `this === undefined`. Voir `js.this.007`.
