---
id: git.head.001
type: mcq
topic: git
tags: [git]
difficulty: 2
choices:
  - { id: a, text: "Le commit actuellement extrait. En général, le bout de la branche en cours." }
  - { id: b, text: "Le premier commit du dépôt, celui qui n'a pas de parent." }
  - { id: c, text: "Le fichier qui liste les dépôts distants." }
correctChoiceId: a
---

Qu'est-ce que `HEAD` ?

## Explication

Les commandes qui regardent « où l'on est » partent de `HEAD`. Si l'on extrait un commit précis au lieu d'une branche, `HEAD` ne porte plus de nom de branche : on dit qu'il est détaché.
