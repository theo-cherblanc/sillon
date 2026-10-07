---
id: angular.tpl.update.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.tpl.001
choices:
  - { id: a, text: "Angular met à jour la liaison tout seul quand la valeur du signal change." }
  - { id: b, text: "Angular ignore le signal jusqu'au prochain rechargement complet de la page." }
  - { id: c, text: "Angular remplace le template par une page HTML statique après le premier rendu." }
correctChoiceId: a
source: https://angular.dev/essentials/templates
insight: "`userName.set('cool_coder_789')` : le `<h1>` suit, sans recoller le HTML."
common_mistake: "Recharger la page pour voir la nouvelle valeur d'un signal déjà lié."
related: [angular.tpl.interp.001, angular.react.track.001]
---

Que fait Angular quand un signal lié dans le template change ?

## Explication

La liaison est vivante : le rendu suit la nouvelle valeur. Ce n'est ni un snapshot figé, ni un document statique.
