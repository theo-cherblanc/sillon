---
id: docker.rm.001
type: mcq
topic: docker
tags: [docker]
difficulty: 2
choices:
  - { id: a, text: "Le conteneur tourne en arrière-plan, sans occuper le terminal." }
  - { id: b, text: "Le conteneur est supprimé dès qu'il s'arrête." }
  - { id: c, text: "L'image est reconstruite avant de lancer le conteneur." }
correctChoiceId: b
insight: "Utile pour un conteneur ponctuel. Gênant si on voulait inspecter le conteneur après l'arrêt : il n'est déjà plus là."
related: [docker.run.001]
---

Que change l'option `--rm` de `docker run` ?

## Explication

Sans `--rm`, un conteneur arrêté reste sur la machine, listable avec `docker ps -a`. Avec `--rm`, Docker le retire dès qu'il quitte. Ce n'est pas `-d` : `-d` détache le terminal, le conteneur peut continuer.
