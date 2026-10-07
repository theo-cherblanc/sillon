---
id: angular.tpl.if.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.tpl.001
choices:
  - { id: a, text: "Le bloc `@if` affiche ou cache une partie du template ; `@else` couvre le cas contraire." }
  - { id: b, text: "Le bloc `@if` répète une balise pour chaque élément d'une liste." }
  - { id: c, text: "Le bloc `@if` lie un attribut HTML avec le préfixe `attr.`." }
correctChoiceId: a
source: https://angular.dev/essentials/templates
insight: "`@if (isAdmin()) { ... } @else { ... }` : un seul des deux blocs arrive dans le DOM."
common_mistake: "Utiliser `@if` pour une liste : la répétition, c'est `@for`."
related: [angular.tpl.for.001, angular.tpl.interp.001]
---

Que font `@if` et `@else` dans un template Angular ?

## Explication

Ils montrent ou cachent. Répéter, c'est `@for`. Un attribut HTML, c'est `[attr.]`.
