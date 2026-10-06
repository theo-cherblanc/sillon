---
id: git.order.001
type: order
topic: git
tags: [git]
difficulty: 1
steps:
  - git add
  - git commit
  - git push
---

Dans quel ordre ces commandes publient-elles une modification déjà écrite dans un fichier que Git suit déjà ?

## Explication

`git add` met le fichier dans l'index. `git commit` enregistre cet index sur la machine. `git push` envoie le commit au dépôt distant. Le commit existe avant d'être publié.
