---
id: angular.react.wrap.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.react.001
choices:
  - { id: a, text: "Un signal Angular est une enveloppe légère autour d'une valeur, utilisée pour créer et gérer l'état." }
  - { id: b, text: "Un signal Angular est un événement du navigateur, comme click ou submit." }
  - { id: c, text: "Un signal Angular est une route qui charge un composant quand l'URL change." }
correctChoiceId: a
source: https://angular.dev/essentials/signals
insight: "Penser « petite boîte autour d'une valeur », pas « câble d'événement »."
common_mistake: "Coller le mot signal sur `addEventListener`, comme en DOM."
related: [angular.signal.001, angular.react.read.001]
---

Qu'encapsule un signal Angular ?

## Explication

C'est l'outil pour l'état : une valeur, rangée dans une enveloppe que Angular peut suivre. Un `click` reste un événement. Une URL, c'est le routeur.
