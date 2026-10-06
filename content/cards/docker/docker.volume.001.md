---
id: docker.volume.001
type: reveal
topic: docker
tags: [docker]
difficulty: 2
---

À quoi sert un volume ?

## Réponse

À garder des données après la suppression du conteneur.

## Explication

Le système de fichiers writable du conteneur disparaît avec lui. Un volume est un stockage monté dedans, géré à part. La base ou les fichiers qu'on veut conserver vont là, pas seulement dans la couche du conteneur.
