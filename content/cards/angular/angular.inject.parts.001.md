---
id: angular.inject.parts.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.inject.001
choices:
  - { id: a, text: "Un service Angular combine un décorateur `@Service` et une classe TypeScript." }
  - { id: b, text: "Un service Angular combine un template HTML et un sélecteur CSS, sans classe." }
  - { id: c, text: "Un service Angular combine uniquement un fichier JSON et une route du routeur." }
correctChoiceId: a
source: https://angular.dev/essentials/dependency-injection
insight: "Même idée que le composant : un décorateur qui décrit, une classe qui fait."
common_mistake: "Écrire la classe toute seule et s'étonner qu'`inject` ne trouve rien."
related: [angular.inject.decorator.001, angular.compose.parts.001]
---

De quoi un service Angular est-il fait ?

## Explication

Décorateur + classe, comme un composant a `@Component` + classe. Pas de template ni de sélecteur sur le service.
