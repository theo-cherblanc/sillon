---
id: angular.forms.import.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.forms.001
choices:
  - { id: a, text: "`form` et `FormField` viennent de `@angular/forms/signals` ; `FormField` entre dans `imports` du composant." }
  - { id: b, text: "`form` et `FormField` viennent de `@angular/core` ; `FormField` se pose avec `@Service`." }
  - { id: c, text: "`form` et `FormField` viennent du routeur ; `FormField` se déclare comme une URL." }
correctChoiceId: a
source: https://angular.dev/essentials/signal-forms
insight: "Même réflexe que pour un composant enfant : importer, puis lister `FormField` dans `imports`."
common_mistake: "Les chercher dans `@angular/core`, à côté de `signal`."
related: [angular.forms.field.001, angular.compose.imports.001]
---

D'où viennent `form` et `FormField` dans Signal Forms ?

## Explication

Le paquet `@angular/forms/signals`, et `FormField` dans `imports`. Pas `@angular/core`, pas le routeur.
