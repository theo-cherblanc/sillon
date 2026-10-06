---
id: http.status.500
type: reveal
topic: http
tags: [http, status]
difficulty: 1
---

Que signifie le statut HTTP `500` ?

## Réponse

`Internal Server Error`. Le serveur a échoué en traitant la requête.

## Explication

La requête pouvait être valide. La panne est du côté du serveur : une exception, une dépendance, un cas non prévu. Le client ne corrige pas ça en reformulant au hasard.
