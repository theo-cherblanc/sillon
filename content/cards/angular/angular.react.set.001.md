---
id: angular.react.set.001
type: mcq
topic: angular
tags: [angular]
difficulty: 1
lesson_id: angular.react.001
choices:
  - { id: a, text: "La méthode `set` remplace la valeur du signal par une nouvelle valeur." }
  - { id: b, text: "La méthode `set` crée un nouveau signal à partir d'un autre signal." }
  - { id: c, text: "La méthode `set` rend le signal en lecture seule, comme un `computed`." }
correctChoiceId: a
source: https://angular.dev/essentials/signals
insight: "`firstName.set('Jaime')` : on pose la valeur, on ne la calcule pas à partir de l'ancienne."
common_mistake: "Utiliser `set` là où `update` irait mieux, ou l'inverse, sans regarder si l'ancienne valeur compte."
related: [angular.react.update.001, angular.react.read.001]
---

Que fait `set` sur un signal Angular ?

## Explication

`set` écrit une valeur neuve. Ce n'est pas `computed`, et ça ne fabrique pas un second signal.
