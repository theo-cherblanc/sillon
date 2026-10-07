---
id: angular.react.computed.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.react.001
choices:
  - { id: a, text: "Un `computed` est un signal dont la valeur se calcule à partir d'autres signals." }
  - { id: b, text: "Un `computed` est un événement du DOM qui se déclenche après un `click`." }
  - { id: c, text: "Un `computed` est un composant Angular sans template ni sélecteur." }
correctChoiceId: a
source: https://angular.dev/essentials/signals
insight: "`computed(() => firstName().toUpperCase())` : dès que `firstName` change, le dérivé suit."
common_mistake: "Recopier la valeur à la main dans un second `signal`, au lieu d'un `computed`."
related: [angular.react.readonly.001, angular.react.create.001]
---

Que produit un `computed` Angular ?

## Explication

C'est encore un signal, mais sa valeur vient d'autres signals. Ce n'est ni un `click`, ni un composant.
