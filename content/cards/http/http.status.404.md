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
---

Que signifie le statut HTTP `404` ?

## Explication

Le serveur a compris la requête, et il n'a rien à cette URL. Ce n'est pas un `400` : le message est lisible, la cible n'existe pas.
