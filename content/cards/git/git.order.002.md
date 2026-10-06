---
id: git.order.002
type: order
topic: git
tags: [git]
difficulty: 2
steps:
  - Récupérer les commits du dépôt distant
  - Les fusionner dans la branche actuelle
---

Dans quel ordre `git pull` agit-il, par défaut ?

## Explication

Par défaut, `git pull` fait un fetch, puis un merge. Le fetch ramène les commits distants sans modifier les fichiers de la branche en cours. Le merge les réunit ensuite avec cette branche.
