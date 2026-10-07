---
id: angular.inject.use.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.inject.001
choices:
  - { id: a, text: "Utiliser un service demande de l'importer, puis d'assigner `inject(LeService)` à un champ de classe." }
  - { id: b, text: "Utiliser un service demande de copier sa classe dans le fichier du composant, sans l'importer." }
  - { id: c, text: "Utiliser un service demande de le poser dans le tableau `imports` du `@Component`, comme un enfant." }
correctChoiceId: a
source: https://angular.dev/essentials/dependency-injection
insight: "Import + `inject` sur un champ. Le tableau `imports`, lui, c'est pour les composants du template."
common_mistake: "Mettre `Calculator` dans `imports` du décorateur, comme `ProfilePhoto`."
related: [angular.inject.call.001, angular.compose.imports.001]
---

Comment utilise-t-on un service dans un composant Angular ?

## Explication

Import TypeScript, puis `inject` sur un champ. Copier la classe ne crée pas la source unique. `imports` du décorateur sert aux composants du template, pas à ce service.
