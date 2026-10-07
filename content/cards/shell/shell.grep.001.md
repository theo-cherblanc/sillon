---
id: shell.grep.001
type: mcq
topic: shell
tags: [shell]
difficulty: 1
choices:
  - { id: a, text: "Il affiche les lignes qui correspondent à un motif." }
  - { id: b, text: "Il remplace le motif dans le fichier." }
  - { id: c, text: "Il affiche seulement la fin du fichier." }
correctChoiceId: a
---

Que fait `grep` ?

## Explication

`grep erreur journal.txt` ne modifie pas le fichier. Il filtre. Avec un tuyau, il filtre la sortie d'une autre commande. Le motif est une expression régulière, pas seulement un mot fixe.
