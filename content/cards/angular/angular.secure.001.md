---
id: angular.secure.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.why.001
choices:
  - { id: a, text: "Angular vise un développement sûr par défaut, avec une sanitization HTML et le support des trusted types." }
  - { id: b, text: "Angular vise la sécurité en interdisant tout JavaScript dans les templates." }
  - { id: c, text: "Angular vise la sécurité en chiffrant chaque composant avant de l'afficher." }
correctChoiceId: a
source: https://angular.dev/overview
insight: "Sûr par défaut : le framework filtre le HTML dangereux, plutôt que de compter sur chaque écran pour y penser."
common_mistake: "Entendre « sécurité » et imaginer du chiffrement, ou une interdiction totale du JS."
related: [angular.what.001, angular.component.001]
---

Comment Angular vise-t-il à protéger les utilisateurs ?

## Explication

En collaboration avec les équipes sécurité de Google, Angular mise sur des garde-fous intégrés, dont la sanitization HTML et les trusted types, contre des attaques comme le XSS. Les templates exécutent encore de la logique ; rien n'est chiffré composant par composant.
