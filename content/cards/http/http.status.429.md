---
id: http.status.429
type: reveal
topic: http
tags: [http, status]
difficulty: 2
---

Que signifie le statut HTTP `429` ?

## Réponse

`Too Many Requests`. Le client a envoyé trop de requêtes.

## Explication

Il faut ralentir. Le serveur peut indiquer quand réessayer avec l'en-tête `Retry-After`. Ce n'est pas une erreur de forme de la requête.
