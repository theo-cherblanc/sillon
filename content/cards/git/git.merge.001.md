---
id: git.merge.001
type: reveal
topic: git
tags: [git]
difficulty: 2
---

Que fait un merge ?

## Réponse

Il réunit deux historiques.

## Explication

Si une seule branche a avancé, la fusion se contente de faire avancer l'autre jusqu'à elle. Si les deux ont des commits propres, Git crée un commit de fusion qui a deux parents, après avoir combiné les fichiers. Un même endroit modifié des deux côtés devient un conflit à trancher.
