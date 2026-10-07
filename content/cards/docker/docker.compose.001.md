---
id: docker.compose.001
type: mcq
topic: docker
tags: [docker]
difficulty: 2
choices:
  - { id: a, text: "Il compile le Dockerfile plus vite grâce au cache." }
  - { id: b, text: "Il décrit et lance plusieurs services depuis un fichier." }
  - { id: c, text: "Il publie une image sur un registre public." }
correctChoiceId: b
---

À quoi sert Docker Compose ?

## Explication

Le fichier nomme les services, leurs images, leurs ports et leurs volumes. Une commande lance tout ça, au lieu d'enchaîner les `docker run` à la main. Compose ne remplace pas l'idée d'image et de conteneur.
