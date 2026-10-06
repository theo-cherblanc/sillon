---
id: js.prototypes.cloze.001
type: cloze
topic: javascript
tags: [prototypes]
difficulty: 1
---

Quelle méthode renvoie un nouveau tableau, avec un résultat par élément ?

```js
const doubled = numbers.____((n) => n * 2)
```

## Réponse

map

## Explication

`map` vit sur `Array.prototype`. Elle ne modifie pas `numbers` : elle appelle la fonction pour chaque élément et renvoie le tableau des valeurs renvoyées.
