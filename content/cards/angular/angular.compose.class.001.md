---
id: angular.compose.class.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.compose.001
choices:
  - { id: a, text: "La classe TypeScript d'un composant porte les comportements, comme gérer une saisie ou appeler un serveur." }
  - { id: b, text: "La classe TypeScript d'un composant contient seulement le CSS appliqué au template." }
  - { id: c, text: "La classe TypeScript d'un composant décrit le sélecteur HTML, à la place du décorateur." }
correctChoiceId: a
source: https://angular.dev/essentials/components
insight: "Décorateur = config. Classe = comportement. Les deux restent collés, mais ce n'est pas le même tiroir."
common_mistake: "Tout mettre dans `@Component` et laisser la classe vide, ou l'inverse."
related: [angular.compose.decorator.001, angular.compose.template.001]
---

Que contient la classe TypeScript d'un composant Angular ?

## Explication

C'est là que vivent les comportements : réaction à une saisie, requête HTTP, calcul. Le CSS va dans `styles` ou `styleUrl`. Le sélecteur reste dans le décorateur.
