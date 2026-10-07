---
id: angular.react.read.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.react.001
choices:
  - { id: a, text: "La valeur d'un signal se lit en l'appelant : un signal est une fonction." }
  - { id: b, text: "La valeur d'un signal se lit avec `.value`, comme un objet ordinaire." }
  - { id: c, text: "La valeur d'un signal se lit seulement dans le décorateur `@Component`." }
correctChoiceId: a
source: https://angular.dev/essentials/signals
insight: "`firstName()` avec les parenthèses. Sans, ce n'est pas la valeur, c'est encore le signal."
common_mistake: "Écrire `firstName.value` par habitude d'autres librairies."
related: [angular.react.wrap.001, angular.react.set.001]
---

Comment se lit la valeur d'un signal Angular ?

## Explication

Les signals sont des fonctions : `firstName()` rend la valeur. Il n'y a pas de `.value` ici, et la lecture n'est pas réservée au décorateur.
