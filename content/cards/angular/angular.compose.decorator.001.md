---
id: angular.compose.decorator.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.compose.001
choices:
  - { id: a, text: "Le décorateur `@Component` contient la configuration que Angular utilise pour le composant." }
  - { id: b, text: "Le décorateur `@Component` contient le JavaScript que le navigateur exécute à la place de la classe." }
  - { id: c, text: "Le décorateur `@Component` contient uniquement les tests unitaires du composant." }
correctChoiceId: a
source: https://angular.dev/essentials/components
insight: "C'est l'étiquette collée sur la classe : sélecteur, template, styles, `imports`."
common_mistake: "Prendre `@Component` pour le corps du composant, et oublier que la classe existe encore en dessous."
related: [angular.compose.parts.001, angular.compose.template.001]
---

Que contient le décorateur `@Component` ?

## Explication

Angular lit cette configuration pour savoir comment créer et afficher le composant. La logique, elle, reste dans la classe TypeScript. Ce n'est ni le moteur JS du navigateur, ni un fichier de tests.
