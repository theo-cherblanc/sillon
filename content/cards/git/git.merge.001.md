---
id: git.merge.001
type: mcq
topic: git
tags: [git]
difficulty: 2
choices:
  - { id: a, text: "Il réunit deux historiques dans la branche en cours." }
  - { id: b, text: "Il efface une branche et tous ses commits." }
  - { id: c, text: "Il envoie les commits vers le dépôt distant." }
correctChoiceId: a
---

Que fait un merge ?

## Explication

Si une seule branche a avancé, la fusion fait avancer l'autre jusqu'à elle. Si les deux ont des commits propres, Git crée un commit de fusion à deux parents, après avoir combiné les fichiers. Un même endroit modifié des deux côtés devient un conflit à trancher.
