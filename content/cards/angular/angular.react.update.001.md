---
id: angular.react.update.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.react.001
choices:
  - { id: a, text: "La méthode `update` change la valeur du signal à partir de la valeur précédente." }
  - { id: b, text: "La méthode `update` relance le composant depuis zéro, en perdant l'état." }
  - { id: c, text: "La méthode `update` copie le signal dans le DOM, sans changer la valeur." }
correctChoiceId: a
source: https://angular.dev/essentials/signals
insight: "`firstName.update((name) => name.toUpperCase())` : l'ancienne valeur entre, la nouvelle sort."
common_mistake: "Passer à `update` une valeur brute, comme à `set`, au lieu d'une fonction."
related: [angular.react.set.001, angular.react.computed.001]
---

Que fait `update` sur un signal Angular ?

## Explication

La nouvelle valeur dépend de l'ancienne, via une fonction. Ce n'est ni un redémarrage du composant, ni une écriture directe dans le DOM.
