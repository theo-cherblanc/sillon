---
id: shell.redirect.001
type: mcq
topic: shell
tags: [shell]
difficulty: 2
choices:
  - { id: a, text: "`>` remplace le contenu du fichier. `>>` ajoute à la fin." }
  - { id: b, text: "`>` ajoute à la fin. `>>` envoie la sortie vers une autre commande." }
  - { id: c, text: "Les deux vident le fichier avant d'écrire." }
correctChoiceId: a
---

Quelle différence y a-t-il entre `>` et `>>` ?

## Explication

Les deux envoient la sortie standard dans un fichier. `>` le crée ou le vide d'abord. `>>` conserve ce qui était déjà écrit et ajoute après. Pour garder un journal, on veut `>>`.
