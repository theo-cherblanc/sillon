---
id: angular.tpl.interp.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.tpl.001
choices:
  - { id: a, text: "Les doubles accolades créent une liaison qui affiche un texte dynamique dans le template." }
  - { id: b, text: "Les doubles accolades déclarent un écouteur d'événement sur un bouton du template." }
  - { id: c, text: "Les doubles accolades importent un composant enfant dans le décorateur `@Component`." }
correctChoiceId: a
source: https://angular.dev/essentials/templates
insight: "`{{ userName() }}` : Angular pose le texte, et le tient à jour si le signal bouge."
common_mistake: "Oublier `()` : `{{ userName }}` n'affiche pas la valeur du signal."
related: [angular.react.read.001, angular.tpl.prop.001]
---

À quoi servent les doubles accolades dans un template Angular ?

## Explication

C'est la liaison pour du texte. Un clic, c'est `(click)`. Un enfant, c'est `imports` et le sélecteur.
