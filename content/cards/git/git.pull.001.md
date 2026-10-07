---
id: git.pull.001
type: mcq
topic: git
tags: [git]
difficulty: 2
choices:
  - { id: a, text: "Il crée une branche locale à partir du commit actuel." }
  - { id: b, text: "Il récupère les commits distants, puis les intègre (merge par défaut)." }
  - { id: c, text: "Il jette les commits locaux et remet le dossier comme le distant." }
correctChoiceId: b
source: "https://git-scm.com/docs/git-pull"
insight: "`pull` enchaîne un `fetch` et une intégration. Par défaut, cette intégration est un merge. On peut la configurer en rebase."
common_mistake: "Croire que `pull` écrase les commits locaux. S'il y a divergence, Git fusionne, ou s'arrête sur un conflit."
related: [git.fetch.001, git.order.002, git.merge.001]
---

Que fait `git pull` ?

## Explication

Récupérer sans intégrer, c'est `git fetch`. Si les deux côtés ont bougé, Git peut demander de résoudre un conflit avant de finir.
