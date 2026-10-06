---
id: docker.port.001
type: mcq
topic: docker
tags: [docker]
difficulty: 2
choices:
  - { id: a, text: "Il limite le conteneur à 8080 Mo de mémoire et 80 processus." }
  - { id: b, text: "Il copie le dossier `8080` de la machine vers le dossier `80` du conteneur." }
  - { id: c, text: "Il publie le port `80` du conteneur sur le port `8080` de la machine." }
correctChoiceId: c
---

Que fait `docker run -p 8080:80 …` ?

## Explication

L'ordre est hôte, puis conteneur. Sans publication, un port ouvert dans le conteneur n'est pas joignable depuis l'extérieur. `http://localhost:8080` arrive alors sur le service qui écoute sur `80` dedans.
