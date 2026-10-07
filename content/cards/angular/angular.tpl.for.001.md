---
id: angular.tpl.for.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.tpl.001
choices:
  - { id: a, text: "Le bloc `@for` répète une partie du template ; `track` associe les données aux éléments du DOM." }
  - { id: b, text: "Le bloc `@for` cache un bloc si un signal est faux, comme `@if`." }
  - { id: c, text: "Le bloc `@for` ajoute un écouteur `click` sur chaque bouton du template." }
correctChoiceId: a
source: https://angular.dev/essentials/templates
insight: "`@for (badge of badges(); track badge.id)` : `track` dit à Angular quel nœud va avec quelle donnée."
common_mistake: "Oublier `track` : la doc le montre systématiquement sur `@for`."
related: [angular.tpl.if.001, angular.tpl.interp.001]
---

Que font `@for` et `track` dans un template Angular ?

## Explication

`@for` répète. `track` relie chaque donnée à son élément DOM. Cacher, c'est `@if`. Un clic, ce sont les parenthèses.
