---
id: docker.compose.001
type: mcq
topic: docker
tags: [docker]
difficulty: 2
choices:
  - { id: a, text: "À compiler le Dockerfile plus vite grâce au cache." }
  - { id: b, text: "À décrire et lancer plusieurs services ensemble, depuis un fichier." }
  - { id: c, text: "À publier une image sur un registre public." }
correctChoiceId: b
---

À quoi sert Docker Compose ?

## Explication

Le fichier nomme les services, leurs images, leurs ports et leurs volumes. Une commande lance l'ensemble au lieu d'enchaîner les `docker run` à la main. Compose ne remplace pas l'idée d'image et de conteneur.
