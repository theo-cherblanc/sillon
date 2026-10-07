---
id: http.status.503
type: mcq
topic: http
tags: [http, status]
difficulty: 2
choices:
  - { id: a, text: "`Internal Server Error`. Le serveur a échoué en traitant cette requête." }
  - { id: b, text: "`Too Many Requests`. Ce client a envoyé trop de requêtes." }
  - { id: c, text: "`Service Unavailable`. Le serveur n'est pas en mesure de répondre, pour le moment." }
correctChoiceId: c
related: [http.status.500, http.status.429]
---

Que signifie le statut HTTP `503` ?

## Explication

`503` dit que le service est indisponible : surcharge, maintenance, dépendance coupée. Ce n'est pas forcément un bug dans le traitement d'une requête (`500`), ni un quota sur ce client (`429`). Un `Retry-After` peut dire quand réessayer.
