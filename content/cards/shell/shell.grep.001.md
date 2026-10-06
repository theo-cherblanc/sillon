---
id: shell.grep.001
type: reveal
topic: shell
tags: [shell]
difficulty: 1
---

Que fait `grep` ?

## Réponse

Il affiche les lignes qui correspondent à un motif.

## Explication

`grep erreur journal.txt` ne modifie pas le fichier. Il filtre. Avec un tuyau, il filtre la sortie d'une autre commande. Le motif est une expression régulière, pas seulement un mot fixe.
