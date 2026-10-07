---
id: git.stage.001
type: mcq
topic: git
tags: [git]
difficulty: 1
choices:
  - { id: a, text: "Il publie le commit sur le dépôt distant." }
  - { id: b, text: "Il choisit ce que le prochain commit enregistrera." }
  - { id: c, text: "Il nomme la branche en cours." }
correctChoiceId: b
insight: "On peut ajouter un fichier à l'index et en laisser un autre de côté. Le commit enregistre l'index, pas tout le dossier."
common_mistake: "Croire que `git commit -a` enregistre aussi les fichiers jamais suivis. Les nouveaux doivent encore passer par `git add`."
related: [git.commit.001, git.order.001]
---

À quoi sert l'index, celui que `git add` remplit ?

## Explication

Le dossier de travail peut contenir d'autres modifications. `git add` en copie dans l'index. Le commit enregistre l'index, pas forcément tout ce qui est modifié sur le disque.
