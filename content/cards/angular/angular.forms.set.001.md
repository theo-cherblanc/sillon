---
id: angular.forms.set.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.forms.001
choices:
  - { id: a, text: "`value.set` met à jour le nœud du `FieldTree` et le signal du modèle en même temps." }
  - { id: b, text: "`value.set` met à jour seulement l'input HTML, sans toucher au modèle." }
  - { id: c, text: "`value.set` remplace le composant par une nouvelle page, sans changer le champ." }
correctChoiceId: a
source: https://angular.dev/essentials/signal-forms
insight: "`loginForm.email().value.set('a@b.c')` : l'arbre et `loginModel().email` suivent."
common_mistake: "Écrire dans `loginModel` à la main et croire que l'input n'a pas besoin du `FieldTree`."
related: [angular.forms.read.001, angular.react.set.001]
---

Que met à jour `value.set` dans Signal Forms ?

## Explication

Le champ **et** le modèle. Pas seulement le DOM, et ça ne change pas de page.
