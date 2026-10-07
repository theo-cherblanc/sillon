---
id: angular.signal.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.why.001
choices:
  - { id: a, text: "Les signals Angular sont un modèle de réactivité fine, combiné à des optimisations à la compilation." }
  - { id: b, text: "Les signals Angular sont des événements du navigateur, comme click ou submit." }
  - { id: c, text: "Les signals Angular sont des routes qui chargent un composant à la demande." }
correctChoiceId: a
source: https://angular.dev/overview
insight: "Réactivité fine : on met à jour ce qui dépend de la valeur, pas tout l'écran par réflexe."
common_mistake: "Entendre « signal » et penser à `addEventListener`, ou au routeur."
related: [angular.component.001, angular.ssr.001, angular.react.wrap.001]
---

Que sont les signals dans Angular ?

## Explication

La documentation les présente comme le modèle de réactivité d'Angular, avec des optimisations à la compilation. Un `click` reste un événement DOM. Une route, c'est le routeur.
