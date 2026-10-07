---
id: docker.image.001
type: mcq
topic: docker
tags: [docker]
difficulty: 1
choices:
  - { id: a, text: "L'image est le modèle. Le conteneur en est une instance lancée." }
  - { id: b, text: "L'image est le processus en cours. Le conteneur est le fichier texte." }
  - { id: c, text: "Les deux noms désignent exactement la même chose." }
correctChoiceId: a
---

Quelle différence y a-t-il entre une image et un conteneur ?

## Explication

L'image est un paquet figé : système de fichiers et commande de départ. Le conteneur est cette image en train de tourner, avec un état à lui. On peut lancer plusieurs conteneurs depuis la même image.
