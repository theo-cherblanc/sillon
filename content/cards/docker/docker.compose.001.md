---
id: docker.compose.001
type: reveal
topic: docker
tags: [docker]
difficulty: 2
---

À quoi sert Docker Compose ?

## Réponse

À décrire et lancer plusieurs services ensemble, depuis un fichier.

## Explication

Le fichier nomme les services, leurs images, leurs ports et leurs volumes. Une commande monte l'ensemble au lieu d'enchaîner les `docker run` à la main. Compose ne remplace pas l'idée d'image et de conteneur.
