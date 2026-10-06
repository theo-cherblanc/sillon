---
id: docker.order.001
type: order
topic: docker
tags: [docker]
difficulty: 1
steps:
  - Écrire le Dockerfile
  - Construire l'image
  - Lancer le conteneur
---

Dans quel ordre obtient-on un conteneur qui tourne, en partant de zéro ?

## Explication

Le Dockerfile décrit l'image. `docker build` lit ce fichier et produit l'image. `docker run` crée ensuite un conteneur à partir de cette image. L'image existe avant le conteneur.
