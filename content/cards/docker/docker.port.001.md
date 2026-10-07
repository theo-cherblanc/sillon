---
id: docker.port.001
type: mcq
topic: docker
tags: [docker]
difficulty: 2
choices:
  - { id: a, text: "Il publie le port `8080` du conteneur sur le port `80` de la machine." }
  - { id: b, text: "Il copie le dossier de la machine vers le dossier du conteneur, comme un volume." }
  - { id: c, text: "Il publie le port `80` du conteneur sur le port `8080` de la machine." }
correctChoiceId: c
common_mistake: "Inverser l'ordre : croire que `8080:80` commence par le port du conteneur. C'est d'abord la machine, puis le conteneur."
insight: "Sans `-p`, le service écoute dans le conteneur. Le navigateur, lui, s'adresse à la machine."
related: [docker.cloze.001, docker.run.001]
---

Que fait `docker run -p 8080:80 …` ?

## Explication

L'ordre est hôte, puis conteneur. Sans publication, un port ouvert dans le conteneur n'est pas joignable depuis l'extérieur. `http://localhost:8080` arrive alors sur le service qui écoute sur `80` dedans.
