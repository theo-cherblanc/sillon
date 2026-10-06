---
id: shell.pipe.001
type: mcq
topic: shell
tags: [shell]
difficulty: 1
choices:
  - { id: a, text: "Il envoie la sortie standard de la première à l'entrée de la seconde." }
  - { id: b, text: "Il lance les deux commandes en même temps, sans lien entre elles." }
  - { id: c, text: "Il écrit la sortie dans un fichier nommé par la seconde commande." }
correctChoiceId: a
---

Que fait `|` entre deux commandes ?

## Explication

`ls | grep test` ne crée pas un fichier. La liste produite par `ls` devient le texte que `grep` lit. La sortie d'erreur ne passe pas dans le tuyau, sauf si on l'y redirige.
