---
id: arch.persist.001
type: mcq
topic: architecture
tags: [architecture]
difficulty: 1
choices:
  - { id: a, text: "La variable disparaît avec le processus ; la base survit à l'arrêt." }
  - { id: b, text: "Une variable globale est déjà une base de données." }
  - { id: c, text: "Une base disparaît au redémarrage de la machine." }
correctChoiceId: a
insight: "La mémoire vive disparaît avec le processus. Une base survit au redémarrage et se partage entre plusieurs processus."
related: [arch.stateless.001, docker.volume.001]
---

Pourquoi stocker une donnée dans une base plutôt que dans une variable ?

## Explication

La mémoire du processus est perdue quand il s'arrête. Une base écrit la donnée pour la relire après. Plusieurs processus peuvent aussi la partager. La variable reste utile pour ce qui ne doit vivre que le temps du calcul.
