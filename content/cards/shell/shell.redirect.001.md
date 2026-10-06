---
id: shell.redirect.001
type: mcq
topic: shell
tags: [shell]
difficulty: 2
choices:
  - { id: a, text: "`>` écrit le fichier en remplaçant son contenu. `>>` ajoute à la fin" }
  - { id: b, text: "`>` ajoute à la fin. `>>` envoie vers une autre commande" }
  - { id: c, text: "les deux effacent le fichier" }
correctChoiceId: a
---

Quelle différence y a-t-il entre `>` et `>>` ?

## Explication

Les deux envoient la sortie standard dans un fichier. `>` le crée ou le vide d'abord. `>>` conserve ce qui était déjà écrit et ajoute après. Pour garder un journal, on veut `>>`.
