---
id: angular.forms.field.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.forms.001
choices:
  - { id: a, text: "La directive `[formField]` crée une liaison dans les deux sens entre l'input et le formulaire." }
  - { id: b, text: "La directive `[formField]` affiche un texte interpolé, à la place des doubles accolades." }
  - { id: c, text: "La directive `[formField]` injecte un service `@Service` dans le template." }
correctChoiceId: a
source: https://angular.dev/essentials/signal-forms
insight: "Taper dans l'e-mail met à jour le champ. Inversement, `value.set` met à jour l'input."
common_mistake: "Oublier `FormField` dans `imports` : `[formField]` n'existe alors pas sur ce composant."
related: [angular.forms.tree.001, angular.compose.imports.001]
---

À quoi sert `[formField]` dans un template Angular ?

## Explication

Liaison bidirectionnelle input ↔ formulaire. Ce n'est pas `{{ }}`, et ce n'est pas `inject`.
