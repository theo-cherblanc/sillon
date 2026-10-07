---
id: angular.compose.files.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.compose.001
choices:
  - { id: a, text: "`templateUrl` et `styleUrl` permettent de mettre le HTML et le CSS dans des fichiers séparés." }
  - { id: b, text: "`templateUrl` et `styleUrl` permettent d'importer un autre composant dans le template." }
  - { id: c, text: "`templateUrl` et `styleUrl` permettent de déclarer le sélecteur HTML du composant." }
correctChoiceId: a
source: https://angular.dev/essentials/components
insight: "`template` et `styles` restent possibles dans le décorateur. Les `*Url`, c'est la version fichier à part."
common_mistake: "Confondre `templateUrl` avec `imports` : l'un pointe vers un fichier, l'autre vers un composant."
related: [angular.compose.template.001, angular.compose.imports.001]
---

À quoi servent `templateUrl` et `styleUrl` dans `@Component` ?

## Explication

Ils sortent le HTML et le CSS du décorateur, vers des fichiers dédiés. Importer un enfant, c'est `imports`. Nommer la balise, c'est `selector`.
