---
id: angular.forms.read.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.forms.001
choices:
  - { id: a, text: "Appeler un nœud du `FieldTree` rend l'état du champ ; `value()` en lit la valeur courante." }
  - { id: b, text: "Appeler un nœud du `FieldTree` crée un nouveau `signal` vide, sans lire le modèle." }
  - { id: c, text: "Appeler un nœud du `FieldTree` ouvre une route et change le composant affiché." }
correctChoiceId: a
source: https://angular.dev/essentials/signal-forms
insight: "`loginForm.email()` c'est l'état. `loginForm.email().value()` c'est la chaîne tapée."
common_mistake: "Afficher `loginForm.email` tout cru dans `{{ }}` : il manque les deux appels jusqu'à `value()`."
related: [angular.forms.field.001, angular.react.read.001]
---

Comment lit-on la valeur d'un champ Signal Forms ?

## Explication

Le nœud s'appelle comme une fonction, puis `value()`. Ça ne fabrique pas un signal neuf, et ça n'est pas le routeur.
