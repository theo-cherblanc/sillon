---
id: angular.tpl.attr.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.tpl.001
choices:
  - { id: a, text: "Le préfixe `attr.` permet de lier une valeur dynamique à un attribut HTML." }
  - { id: b, text: "Le préfixe `attr.` permet d'écouter un événement, comme un clic." }
  - { id: c, text: "Le préfixe `attr.` permet de répéter une balise pour chaque élément d'une liste." }
correctChoiceId: a
source: https://angular.dev/essentials/templates
insight: "`[attr.role]=\"listRole()\"` : un attribut HTML, pas `disabled` ni un `click`."
common_mistake: "Écrire `[role]` en pensant à l'attribut, alors que le préfixe `attr.` est là pour ça."
related: [angular.tpl.prop.001, angular.tpl.interp.001]
---

À quoi sert le préfixe `attr.` dans un template Angular ?

## Explication

Il cible un attribut HTML (`role`, etc.). Un événement, ce sont les parenthèses. Une liste, c'est `@for`.
