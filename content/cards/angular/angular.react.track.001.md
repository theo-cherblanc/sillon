---
id: angular.react.track.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.react.001
choices:
  - { id: a, text: "Angular suit où les signals sont lus et mis à jour, pour faire un travail en plus, comme actualiser le DOM." }
  - { id: b, text: "Angular suit les signals seulement au démarrage, puis ignore les lectures suivantes." }
  - { id: c, text: "Angular suit les signals pour les enregistrer comme routes dans le routeur." }
correctChoiceId: a
source: https://angular.dev/essentials/signals
insight: "Lire un signal, c'est aussi se déclarer intéressé. Quand la valeur bouge, Angular sait qui prévenir — le DOM, par exemple."
common_mistake: "Croire qu'il faut recoller le DOM à la main après chaque `set`."
related: [angular.react.read.001, angular.react.wrap.001]
---

Que suit Angular à propos des signals ?

## Explication

Il mémorise les lectures et les mises à jour, puis s'en sert : par exemple rafraîchir le DOM. Ce n'est pas un snapshot unique au boot, et ce n'est pas le routeur.
