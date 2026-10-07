---
id: http.status.429
type: mcq
topic: http
tags: [http, status]
difficulty: 2
choices:
  - { id: a, text: "`Bad Request`. Le serveur n'a pas compris la requête." }
  - { id: b, text: "`Too Many Requests`. Le client a envoyé trop de requêtes." }
  - { id: c, text: "`Internal Server Error`. Le serveur a échoué en traitant la requête." }
correctChoiceId: b
related: [http.status.503, http.status.400]
---

Que signifie le statut HTTP `429` ?

## Explication

Il faut ralentir. Le serveur peut indiquer quand réessayer avec l'en-tête `Retry-After`. Ce n'est pas une erreur de forme de la requête.
