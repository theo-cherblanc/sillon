---
id: angular.tpl.event.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.tpl.001
choices:
  - { id: a, text: "Les parenthèses ajoutent un écouteur d'événement sur un élément du template." }
  - { id: b, text: "Les parenthèses affichent la valeur d'un signal dans le texte de la page." }
  - { id: c, text: "Les parenthèses lient une propriété du DOM, comme `disabled` sur un bouton." }
correctChoiceId: a
source: https://angular.dev/essentials/templates
insight: "`(click)=\"cancelSubscription()\"` : le template appelle la méthode, la classe gère le geste."
common_mistake: "Mettre `(disabled)` : `disabled` n'est pas un événement, c'est une propriété."
related: [angular.tpl.dollar.001, angular.tpl.prop.001]
---

À quoi servent les parenthèses dans un template Angular ?

## Explication

`(click)` branche un écouteur. Le texte, c'est `{{ }}`. Une propriété DOM, ce sont les crochets.
