---
id: docker.file.001
type: reveal
topic: docker
tags: [docker]
difficulty: 1
---

Qu'est-ce qu'un Dockerfile ?

## Réponse

Le fichier texte qui décrit comment construire une image.

## Explication

Chaque instruction (`FROM`, `COPY`, `RUN`…) est une étape du build. `docker build` lit ce fichier et produit une image. Le Dockerfile n'est pas le conteneur qui tourne.
