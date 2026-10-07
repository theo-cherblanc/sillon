---
id: angular.forms.tree.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.forms.001
choices:
  - { id: a, text: "La fonction `form` crée un `FieldTree` qui reprend la forme du modèle, avec des champs accessibles par un point." }
  - { id: b, text: "La fonction `form` crée un composant Angular à partir d'un sélecteur HTML." }
  - { id: c, text: "La fonction `form` crée un service `@Service` pour chaque champ du formulaire." }
correctChoiceId: a
source: https://angular.dev/essentials/signal-forms
insight: "`loginForm.email` est un nœud, comme `loginForm` : même API, à chaque niveau."
common_mistake: "Chercher `loginForm.controls.email` : ici, c'est un point sur l'arbre, pas `controls`."
related: [angular.forms.model.001, angular.forms.field.001]
---

Que produit la fonction `form` dans Signal Forms ?

## Explication

Un `FieldTree` miroir du modèle. Ce n'est ni un `@Component`, ni un `@Service` par champ.
