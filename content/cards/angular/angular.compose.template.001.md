---
id: angular.compose.template.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.compose.001
choices:
  - { id: a, text: "Le template HTML d'un composant contrôle ce qui est rendu dans le DOM." }
  - { id: b, text: "Le template HTML d'un composant compile le TypeScript en JavaScript." }
  - { id: c, text: "Le template HTML d'un composant enregistre le composant auprès du routeur." }
correctChoiceId: a
source: https://angular.dev/essentials/components
insight: "Le template, c'est ce que l'utilisateur voit. La classe, c'est ce que le composant sait faire."
common_mistake: "Mettre la logique métier dans le HTML, ou croire que le template sert à compiler le TS."
related: [angular.compose.decorator.001, angular.compose.files.001, angular.tpl.interp.001]
---

Que contrôle le template d'un composant Angular ?

## Explication

C'est le HTML du composant : il décide quels nœuds arrivent dans le DOM. Compiler le TypeScript, ce n'est pas son rôle. Brancher une URL, non plus.
