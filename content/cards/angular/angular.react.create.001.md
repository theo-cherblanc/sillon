---
id: angular.react.create.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.react.001
choices:
  - { id: a, text: "La fonction `signal` crée un signal pour garder un état local." }
  - { id: b, text: "La fonction `signal` crée un composant Angular à partir d'un sélecteur." }
  - { id: c, text: "La fonction `signal` crée un `computed` en lecture seule, sans valeur de départ." }
correctChoiceId: a
source: https://angular.dev/essentials/signals
insight: "`signal('Morgan')` : une valeur de départ, puis `set` ou `update` pour la faire bouger."
common_mistake: "Appeler `signal` en croyant obtenir un `computed`, ou un composant."
related: [angular.react.wrap.001, angular.react.set.001]
---

À quoi sert la fonction `signal` ?

## Explication

Elle fabrique un signal d'état local, avec une valeur initiale. Ce n'est pas `@Component`. Un `computed` se crée avec `computed`, pas avec `signal`.
