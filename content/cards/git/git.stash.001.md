---
id: git.stash.001
type: mcq
topic: git
tags: [git]
difficulty: 2
choices:
  - { id: a, text: "Il crée un commit sur la branche en cours, avec un message automatique." }
  - { id: b, text: "Il met le travail de côté ; le dossier redevient propre, sans commit." }
  - { id: c, text: "Il jette les modifications non commitées, pour de bon." }
correctChoiceId: b
source: "https://git-scm.com/docs/git-stash"
insight: "`stash` n'est pas un historique : un `drop` ou un `clear` l'efface. Un commit sur une branche, même temporaire, se retrouve plus facilement."
common_mistake: "Faire un stash, changer de branche, puis l'oublier. Un `git stash pop` plus tard, sur la mauvaise branche, peut créer des conflits."
related: [git.stage.001, git.commit.001]
---

Que fait `git stash` ?

## Explication

`git stash` range les modifications non commitées, index compris par défaut. Ce n'est pas un commit : rien n'est publié, rien n'est nommé dans l'historique. `git stash pop` les ressort.
