---
id: shell.path.001
type: reveal
topic: shell
tags: [shell]
difficulty: 1
---

Que veulent dire `/`, `.` et `..` dans un chemin ?

## Réponse

`/` est la racine. `.` est le dossier courant. `..` est son parent.

## Explication

Un chemin qui commence par `/` est absolu : il ne dépend pas d'où l'on est. Un chemin relatif part du dossier courant. `../autre` remonte d'un cran, puis entre dans `autre`.
