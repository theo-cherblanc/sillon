---
id: arch.persist.001
type: mcq
topic: architecture
tags: [architecture]
difficulty: 1
choices:
  - { id: a, text: "la variable disparaît avec le processus. La base garde la donnée" }
  - { id: b, text: "une variable globale est déjà une base de données" }
  - { id: c, text: "une base ne survit pas au redémarrage de la machine" }
correctChoiceId: a
---

Pourquoi une base de données, plutôt qu'une variable ?

## Explication

La mémoire du processus est perdue quand il s'arrête. Une base écrit la donnée pour la relire après. Plusieurs processus peuvent aussi la partager. La variable reste utile pour ce qui ne doit vivre que le temps du calcul.
