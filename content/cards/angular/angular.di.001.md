---
id: angular.di.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.why.001
choices:
  - { id: a, text: "L'injection de dépendances d'Angular permet de partager du code entre les composants de toute l'application." }
  - { id: b, text: "L'injection de dépendances d'Angular remplace le routeur pour changer d'écran." }
  - { id: c, text: "L'injection de dépendances d'Angular compile le TypeScript en JavaScript dans le navigateur." }
correctChoiceId: a
source: https://angular.dev/overview
insight: "Au lieu de `new Service()` partout, un composant demande ce dont il a besoin, et Angular le fournit."
common_mistake: "Confondre DI et navigation : changer d'écran, c'est le routage, pas l'injecteur."
related: [angular.component.001, angular.cli.001, angular.inject.service.001]
---

À quoi sert l'injection de dépendances dans Angular ?

## Explication

Elle fait circuler du code partagé (services, helpers) vers les composants, sans que chacun instancie tout à la main. Ce n'est ni le routeur, ni le compilateur TypeScript.
