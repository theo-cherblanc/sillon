---
id: docker.cloze.001
type: cloze
topic: docker
tags: [docker]
difficulty: 2
---

Quel drapeau court publie le port 80 du conteneur sur le port 8080 de la machine ?

```
docker run ____ 8080:80 nginx
```

## Réponse

-p

## Explication

L'ordre est le port de la machine, puis celui du conteneur. La forme longue de `-p` est `--publish`. Sans ce drapeau, le port ouvert dans le conteneur ne s'atteint pas depuis l'extérieur.
