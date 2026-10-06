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

Par défaut, `git pull` récupère d'abord les commits du dépôt distant (`git fetch`), puis les fusionne dans la branche actuelle (`git merge`). La récupération ne modifie pas encore les fichiers de la branche en cours. La fusion les réunit ensuite avec cette branche.
