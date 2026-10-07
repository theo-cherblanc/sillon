---
id: angular.react.readonly.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.react.001
choices:
  - { id: a, text: "Un `computed` est en lecture seule, sans `set` ni `update` : sa valeur change quand les signals qu'il lit changent." }
  - { id: b, text: "Un `computed` s'écrit avec `set` et `update`, comme un signal créé par `signal`." }
  - { id: c, text: "Un `computed` garde toujours sa première valeur, même si les signals lus changent." }
correctChoiceId: a
source: https://angular.dev/essentials/signals
insight: "On ne pousse pas un `computed`. On pousse les sources ; le dérivé suit."
common_mistake: "Appeler `.set` sur un `computed` parce que « c'est un signal, donc ça s'écrit »."
related: [angular.react.computed.001, angular.react.update.001]
---

Comment un `computed` Angular met-il à jour sa valeur ?

## Explication

Pas d'écriture directe : pas de `set`, pas de `update`. Quand un signal lu bouge, le `computed` se recalcule. Il ne reste pas coincé sur la première valeur.
