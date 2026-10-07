---
id: angular.forms.model.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.forms.001
choices:
  - { id: a, text: "Un formulaire Signal Forms commence par un `signal` qui tient le modèle de données." }
  - { id: b, text: "Un formulaire Signal Forms commence par un décorateur `@Service` sur le composant." }
  - { id: c, text: "Un formulaire Signal Forms commence par un bloc `@for` autour de chaque champ." }
correctChoiceId: a
source: https://angular.dev/essentials/signal-forms
insight: "`loginModel = signal({ email: '', password: '' })` : d'abord les données, ensuite l'arbre."
common_mistake: "Poser les `<input>` avant d'avoir un modèle, et se demander où vivent les valeurs."
related: [angular.react.create.001, angular.forms.tree.001]
---

Par quoi commence un formulaire Signal Forms ?

## Explication

Le modèle est un signal. `@Service` sert à injecter du code. `@for` répète du HTML, ça ne crée pas le modèle.
