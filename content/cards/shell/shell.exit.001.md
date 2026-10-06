---
id: shell.exit.001
type: reveal
topic: shell
tags: [shell]
difficulty: 2
---

Que veut dire le code de sortie d'une commande ?

## Réponse

`0` veut dire succès. Un autre nombre veut dire échec.

## Explication

Chaque programme s'arrête avec un statut. Le shell le garde. `echo $?` affiche celui de la commande précédente. Un script peut s'arrêter là où une commande a échoué, selon ses options.
