---
id: angular.inject.source.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.inject.001
choices:
  - { id: a, text: "L'injection de dépendances gère le service depuis une source unique, partagée entre les composants." }
  - { id: b, text: "L'injection de dépendances recopie le service dans chaque composant, avec une instance séparée écrite à la main." }
  - { id: c, text: "L'injection de dépendances remplace le template du composant par le code du service." }
correctChoiceId: a
source: https://angular.dev/essentials/dependency-injection
insight: "Un `Calculator`, plusieurs écrans : Angular le fournit, personne ne le `new` dans son coin."
common_mistake: "Faire `new` partout « pour être sûr d'avoir le sien » : ce n'est plus la source unique."
related: [angular.di.001, angular.inject.service.001]
---

Comment l'injection de dépendances gère-t-elle un service Angular ?

## Explication

Une source de vérité, injectée. Pas une copie collée dans chaque écran, et le service ne prend pas la place du template.
