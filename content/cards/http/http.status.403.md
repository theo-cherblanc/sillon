---
id: http.status.403
type: mcq
topic: http
tags: [http, status]
difficulty: 2
choices:
  - { id: a, text: "`Not Found`. Cette adresse ne correspond à aucune ressource." }
  - { id: b, text: "`Unauthorized`. Le client n'a pas prouvé qui il est." }
  - { id: c, text: "`Forbidden`. Le serveur refuse l'action." }
correctChoiceId: c
related: [http.status.401, http.status.404]
insight: "Le serveur connaît l'identité et refuse quand même. Ce n'est pas un `401`."
---

Que signifie le statut HTTP `403` ?

## Explication

La requête est comprise. L'identité peut même être connue. L'accès est quand même refusé. `401` demande d'abord de s'authentifier. `404` dit que l'adresse ne correspond à rien.
