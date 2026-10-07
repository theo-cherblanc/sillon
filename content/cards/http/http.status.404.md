---
id: http.status.404
type: mcq
topic: http
tags: [http, status]
difficulty: 1
choices:
  - { id: a, text: "`Not Found`. Cette adresse ne correspond à aucune ressource." }
  - { id: b, text: "`Forbidden`. Le serveur refuse l'action." }
  - { id: c, text: "`Too Many Requests`. Le client a envoyé trop de requêtes." }
correctChoiceId: a
source: "https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Status/404"
insight: "Un `404` est plus clair pour le client, et pour le cache, qu'un `200` avec un JSON d'erreur."
common_mistake: "Renvoyer `404` pour masquer une ressource interdite. Le refus d'accès, c'est `403`."
related: [http.status.403, web.fetch.001]
---

Que signifie le statut HTTP `404` ?

## Explication

Le serveur a compris la requête, et il n'a rien à cette URL. Ce n'est pas un `400` : le message est lisible, la cible n'existe pas.
