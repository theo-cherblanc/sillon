---
id: docker.file.001
type: mcq
topic: docker
tags: [docker]
difficulty: 1
choices:
  - { id: a, text: "Le fichier qui liste les conteneurs en cours d'exécution." }
  - { id: b, text: "Le fichier texte qui décrit comment construire une image." }
  - { id: c, text: "Le volume où le conteneur écrit ses données." }
correctChoiceId: b
---

Que décrit un Dockerfile ?

## Explication

Chaque instruction (`FROM`, `COPY`, `RUN`…) est une étape du build. `docker build` lit ce fichier et produit une image. Le Dockerfile n'est pas le conteneur qui tourne.
