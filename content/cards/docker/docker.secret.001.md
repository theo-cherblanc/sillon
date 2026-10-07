---
id: docker.secret.001
type: mcq
topic: docker
tags: [docker]
difficulty: 2
choices:
  - { id: a, text: "L'image se partage : le secret resterait dans ses couches." }
  - { id: b, text: "Docker chiffre automatiquement chaque mot de passe écrit dans l'image." }
  - { id: c, text: "Un mot de passe dans l'image n'est lisible que pendant `docker build`." }
correctChoiceId: a
---

Pourquoi ne pas écrire un mot de passe dans l'image ?

## Explication

Copier un secret pendant le build l'inscrit dans l'historique de l'image, même si un `RUN` suivant efface le fichier. On le fournit au moment de lancer le conteneur, par une variable ou un mécanisme de secrets.
