---
id: angular.tpl.prop.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.tpl.001
choices:
  - { id: a, text: "Les crochets lient une valeur dynamique à une propriété du DOM, comme `disabled` sur un bouton." }
  - { id: b, text: "Les crochets affichent un texte entre les balises, à la place des doubles accolades." }
  - { id: c, text: "Les crochets écoutent un clic et appellent une méthode du composant." }
correctChoiceId: a
source: https://angular.dev/essentials/templates
insight: "`[disabled]=\"!isValidUserId()\"` : on parle à la propriété du bouton, pas au texte visible."
common_mistake: "Mettre des crochets sur un clic : l'événement, c'est les parenthèses."
related: [angular.tpl.attr.001, angular.tpl.event.001]
---

À quoi servent les crochets dans un template Angular ?

## Explication

`[disabled]` pousse une valeur dans le DOM. Le texte interpolé, c'est `{{ }}`. Le clic, c'est `(click)`.
