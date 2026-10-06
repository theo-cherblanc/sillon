---
id: git.stage.001
type: reveal
topic: git
tags: [git]
difficulty: 1
---

À quoi sert la zone d'index, celle que `git add` remplit ?

## Réponse

À choisir ce que le prochain commit contiendra.

## Explication

Le dossier de travail peut contenir d'autres modifications. `git add` en copie dans l'index. Le commit enregistre l'index, pas forcément tout ce qui est modifié sur le disque.
