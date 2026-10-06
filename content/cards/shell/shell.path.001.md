---
id: shell.path.001
type: mcq
topic: shell
tags: [shell]
difficulty: 1
choices:
  - { id: a, text: "`/` est le dossier courant. `.` est son parent. `..` est la racine." }
  - { id: b, text: "Les trois désignent le dossier personnel." }
  - { id: c, text: "`/` est la racine. `.` est le dossier courant. `..` est son parent." }
correctChoiceId: c
---

Que veulent dire `/`, `.` et `..` dans un chemin ?

## Explication

Un chemin qui commence par `/` est absolu : il ne dépend pas d'où l'on est. Un chemin relatif part du dossier courant. `../autre` remonte d'un cran, puis entre dans `autre`.
