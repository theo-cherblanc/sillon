---
id: http.status.502
type: mcq
topic: http
tags: [http, status]
difficulty: 3
choices:
  - { id: a, text: "`502` : la passerelle a reçu une mauvaise réponse. `504` : elle a attendu trop longtemps." }
  - { id: b, text: "`502` : la page n'existe pas. `504` : le client est trop lent." }
  - { id: c, text: "Les deux veulent dire que le JSON est invalide." }
correctChoiceId: a
related: [http.status.500, http.status.503, arch.proxy.001]
---

Quelle est la différence entre `502` et `504` ?

## Explication

Les deux viennent d'une passerelle ou d'un proxy, pas du client. `502 Bad Gateway` : l'amont a répondu quelque chose d'inutilisable. `504 Gateway Timeout` : l'amont n'a pas répondu à temps.
