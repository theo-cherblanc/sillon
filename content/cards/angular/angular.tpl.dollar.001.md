---
id: angular.tpl.dollar.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.tpl.001
choices:
  - { id: a, text: "La variable `$event` passe l'objet événement à la méthode appelée par l'écouteur." }
  - { id: b, text: "La variable `$event` lit la valeur d'un signal, à la place des parenthèses d'appel." }
  - { id: c, text: "La variable `$event` répète un bloc `@for` sur chaque élément d'une liste." }
correctChoiceId: a
source: https://angular.dev/essentials/templates
insight: "`(click)=\"cancelSubscription($event)\"` : la méthode reçoit un `Event`, pas le signal du composant."
common_mistake: "Croire que `$event` est la valeur du champ, comme `userName()`."
related: [angular.tpl.event.001, angular.tpl.for.001]
---

À quoi sert `$event` dans un template Angular ?

## Explication

C'est l'objet événement du DOM, fourni par Angular à l'écouteur. Ce n'est ni un signal, ni `@for`.
