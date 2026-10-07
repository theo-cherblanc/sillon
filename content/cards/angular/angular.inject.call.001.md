---
id: angular.inject.call.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.inject.001
choices:
  - { id: a, text: "`inject` reçoit le service et assigne le résultat à un champ de la classe du composant." }
  - { id: b, text: "`inject` compile le TypeScript du service en JavaScript dans le navigateur." }
  - { id: c, text: "`inject` ouvre une route et remplace le composant affiché à l'écran." }
correctChoiceId: a
source: https://angular.dev/essentials/dependency-injection
insight: "`private calculator = inject(Calculator)` : le champ tient l'instance, Angular la fournit."
common_mistake: "Écrire `new Calculator()` sur le champ, et passer à côté de `inject`."
related: [angular.inject.use.001, angular.inject.decorator.001]
---

Que fait la fonction `inject` dans un composant Angular ?

## Explication

Elle fournit le service et le pose sur le champ. Ce n'est ni le compilateur, ni le routeur.
