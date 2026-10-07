---
id: git.fetch.001
type: mcq
topic: git
tags: [git]
difficulty: 2
choices:
  - { id: a, text: "Il fusionne déjà les commits distants dans la branche en cours." }
  - { id: b, text: "Il récupère les commits distants, sans modifier la branche en cours." }
  - { id: c, text: "Il envoie les commits locaux, comme `git push`." }
correctChoiceId: b
source: "https://git-scm.com/docs/git-fetch"
insight: "Après un fetch, `git log origin/main` a changé. Les fichiers de la branche en cours, non. On peut regarder avant de fusionner."
common_mistake: "Lancer `fetch` en croyant mettre à jour les fichiers. Rien n'est fusionné. Il faut un `pull`, ou ensuite un `merge` / `rebase`."
related: [git.pull.001, git.order.002]
---

Que fait `git fetch`, comparé à `git pull` ?

## Explication

`git fetch` met à jour les références distantes sur la machine. Les fichiers de la branche en cours ne bougent pas. `git pull` fait ce fetch, puis intègre : par défaut, un merge.
