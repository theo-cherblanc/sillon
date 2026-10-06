---
id: docker.volume.001
type: mcq
topic: docker
tags: [docker]
difficulty: 2
choices:
  - { id: a, text: "À garder des données après la suppression du conteneur." }
  - { id: b, text: "À publier les ports du conteneur sur la machine." }
  - { id: c, text: "À partager le réseau avec les autres conteneurs." }
correctChoiceId: a
---

À quoi sert un volume ?

## Explication

Le système de fichiers que le conteneur peut modifier disparaît avec lui. Un volume est un stockage monté dedans, géré à part. La base ou les fichiers qu'on veut conserver vont là, pas seulement dans la couche du conteneur.
