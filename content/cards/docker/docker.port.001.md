---
id: docker.port.001
type: reveal
topic: docker
tags: [docker]
difficulty: 2
---

Que fait `docker run -p 8080:80 …` ?

## Réponse

Il publie le port `80` du conteneur sur le port `8080` de la machine.

## Explication

L'ordre est hôte, puis conteneur. Sans publication, un port ouvert dans le conteneur n'est pas joignable depuis l'extérieur. `http://localhost:8080` arrive alors sur le service qui écoute sur `80` dedans.
