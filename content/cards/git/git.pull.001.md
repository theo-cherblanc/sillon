---
id: git.pull.001
type: mcq
topic: git
tags: [git]
difficulty: 2
choices:
  - { id: a, text: "Il crée une branche locale à partir du commit actuel." }
  - { id: b, text: "Il récupère les commits distants, puis les intègre. Par défaut, cette intégration est un merge." }
  - { id: c, text: "Il jette les commits locaux et remet le dossier comme le distant." }
correctChoiceId: b
---

Que fait `git pull` ?

## Explication

Récupérer sans intégrer, c'est `git fetch`. `git pull` enchaîne les deux. Si les deux côtés ont bougé, Git peut demander de résoudre un conflit avant de finir.
