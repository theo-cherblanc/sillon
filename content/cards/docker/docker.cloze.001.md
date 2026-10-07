---
id: docker.cloze.001
type: cloze
topic: docker
tags: [docker]
difficulty: 2
insight: "La forme longue est `--publish`. L'ordre des nombres reste le même : machine, puis conteneur."
related: [docker.port.001]
---

Quelle option courte de `docker run` publie un port ? Le `8080:80` est déjà écrit : port 8080 de la machine, puis port 80 du conteneur.

```
docker run ____ 8080:80 nginx
```

## Réponse

-p

## Explication

L'ordre est le port de la machine, puis celui du conteneur. La forme longue de `-p` est `--publish`. Sans cette option, le port ouvert dans le conteneur n'est pas joignable depuis l'extérieur.
