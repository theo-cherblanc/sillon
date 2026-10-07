---
id: angular.inject.decorator.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.inject.001
choices:
  - { id: a, text: "Le décorateur `@Service` déclare une classe comme service Angular, accessible partout dans l'application." }
  - { id: b, text: "Le décorateur `@Service` déclare le sélecteur HTML d'un composant, comme `@Component`." }
  - { id: c, text: "Le décorateur `@Service` compile le template du composant en JavaScript." }
correctChoiceId: a
source: https://angular.dev/essentials/dependency-injection
insight: "`@Service()` au-dessus de `Calculator` : Angular sait que cette classe s'injecte."
common_mistake: "Mettre `@Component` sur un service, ou `@Service` sur un écran."
related: [angular.inject.service.001, angular.compose.decorator.001]
---

Que déclare le décorateur `@Service` ?

## Explication

Il marque une classe comme service, disponible dans l'application. Le sélecteur et le template, c'est `@Component`.
