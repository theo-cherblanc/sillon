---
id: http.status.500
type: mcq
topic: http
tags: [http, status]
difficulty: 1
choices:
  - { id: a, text: "`Internal Server Error`. Le serveur a échoué en traitant la requête." }
  - { id: b, text: "`Bad Request`. Le serveur n'a pas compris la requête." }
  - { id: c, text: "`Not Found`. Cette adresse ne correspond à aucune ressource." }
correctChoiceId: a
---

Que signifie le statut HTTP `500` ?

## Explication

La requête pouvait être valide. La panne est du côté du serveur : une exception, une dépendance, un cas non prévu. Le client ne corrige pas ça en reformulant au hasard.
