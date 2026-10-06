---
id: shell.pipe.001
type: reveal
topic: shell
tags: [shell]
difficulty: 1
---

Que fait `|` entre deux commandes ?

## Réponse

Il envoie la sortie standard de la première à l'entrée de la seconde.

## Explication

`ls | grep test` ne crée pas un fichier. La liste produite par `ls` devient le texte que `grep` lit. La sortie d'erreur ne passe pas dans le tuyau, sauf si on l'y redirige.
