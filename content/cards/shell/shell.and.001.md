---
id: shell.and.001
type: mcq
topic: shell
tags: [shell]
difficulty: 2
choices:
  - { id: a, text: "`&&` lance la suite seulement si la première a réussi. `||` la lance seulement si elle a échoué." }
  - { id: b, text: "`&&` lance les deux en même temps. `||` envoie la sortie de l'une vers l'autre." }
  - { id: c, text: "Les deux lancent toujours la seconde commande, quel que soit le code de sortie." }
correctChoiceId: a
---

Quelle différence y a-t-il entre `&&` et `||` ?

## Explication

Le shell lit le code de sortie. `build && deploy` n'envoie en production que si la construction a réussi (`0`). `cmd || echo échec` n'affiche le message que si `cmd` a échoué. `|` est autre chose : il relie la sortie à l'entrée, pas le succès.
