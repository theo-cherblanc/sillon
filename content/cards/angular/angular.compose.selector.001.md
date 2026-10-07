---
id: angular.compose.selector.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.compose.001
choices:
  - { id: a, text: "Le sélecteur CSS d'un composant définit comment le composant s'utilise dans le HTML." }
  - { id: b, text: "Le sélecteur CSS d'un composant choisit la base de données à interroger." }
  - { id: c, text: "Le sélecteur CSS d'un composant nomme le fichier TypeScript du composant." }
correctChoiceId: a
source: https://angular.dev/essentials/components
insight: "La classe s'appelle `UserProfile`. La balise, elle, s'écrit `<user-profile />` : c'est le `selector`."
common_mistake: "Écrire `<UserProfile />` dans le template, comme si le nom de la classe était la balise."
related: [angular.compose.imports.001, angular.compose.decorator.001]
---

À quoi sert le sélecteur d'un composant Angular ?

## Explication

C'est le nom de la balise (ou du motif CSS) qui insère le composant dans un template. Ça ne désigne ni un fichier, ni une base.
