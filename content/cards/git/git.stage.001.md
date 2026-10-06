---
id: git.stage.001
type: mcq
topic: git
tags: [git]
difficulty: 1
choices:
  - { id: a, text: "À publier le commit sur le dépôt distant." }
  - { id: b, text: "À choisir ce que le prochain commit contiendra." }
  - { id: c, text: "À nommer la branche en cours." }
correctChoiceId: b
---

À quoi sert la zone d'index, celle que `git add` remplit ?

## Explication

Le dossier de travail peut contenir d'autres modifications. `git add` en copie dans l'index. Le commit enregistre l'index, pas forcément tout ce qui est modifié sur le disque.
