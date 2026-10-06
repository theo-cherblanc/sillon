---
id: docker.run.001
type: mcq
topic: docker
tags: [docker]
difficulty: 1
choices:
  - { id: a, text: "Le conteneur s'arrête dès que la commande a écrit sa sortie." }
  - { id: b, text: "Le conteneur continue en arrière-plan, sans occuper le terminal." }
  - { id: c, text: "Le conteneur est supprimé avant même de démarrer." }
correctChoiceId: b
---

Que change l'option `-d` de `docker run` ?

## Explication

Sans `-d`, le terminal reste attaché à la sortie du processus. Avec `--detach`, on récupère la main. Le conteneur tourne quand même. `docker logs` permet de revoir sa sortie.
