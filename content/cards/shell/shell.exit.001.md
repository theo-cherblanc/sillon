---
id: shell.exit.001
type: mcq
topic: shell
tags: [shell]
difficulty: 2
choices:
  - { id: a, text: "`0` veut dire succès. Un autre nombre veut dire échec." }
  - { id: b, text: "`0` veut dire échec. `1` veut dire succès." }
  - { id: c, text: "Un nombre autre que `0` veut dire un avertissement, pas un échec." }
correctChoiceId: a
---

Que veut dire le code de sortie d'une commande ?

## Explication

Chaque programme s'arrête avec un statut. Le shell le garde. `echo $?` affiche celui de la commande précédente. Un script peut s'arrêter là où une commande a échoué, selon ses options.
