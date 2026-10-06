---
id: git.pull.001
type: reveal
topic: git
tags: [git]
difficulty: 2
---

Que fait `git pull` ?

## Réponse

Il récupère les commits distants, puis les intègre. Par défaut, cette intégration est un merge.

## Explication

Récupérer sans intégrer, c'est `git fetch`. `git pull` enchaîne les deux. Si les deux côtés ont bougé, Git peut demander de résoudre un conflit avant de finir.
