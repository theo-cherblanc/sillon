---
id: docker.secret.001
type: reveal
topic: docker
tags: [docker]
difficulty: 2
---

Pourquoi ne pas écrire un mot de passe dans l'image ?

## Réponse

L'image se partage et se conserve. Le secret resterait dans ses couches.

## Explication

Copier un secret pendant le build l'inscrit dans l'historique de l'image, même si un `RUN` suivant efface le fichier. On le fournit au moment de lancer le conteneur, par une variable ou un mécanisme de secrets.
