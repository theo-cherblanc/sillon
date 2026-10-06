---
id: docker.run.001
type: reveal
topic: docker
tags: [docker]
difficulty: 1
---

Que change l'option `-d` de `docker run` ?

## Réponse

Le conteneur continue en arrière-plan, sans occuper le terminal.

## Explication

Sans `-d`, le terminal reste attaché à la sortie du processus. Avec `--detach`, on récupère la main. Le conteneur tourne quand même. `docker logs` permet de revoir sa sortie.
