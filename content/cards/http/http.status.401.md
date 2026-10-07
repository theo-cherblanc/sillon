---
id: http.status.401
type: mcq
topic: http
tags: [http, status]
difficulty: 2
choices:
  - { id: a, text: "`Unauthorized`. L'authentification manque, ou elle n'est pas valable." }
  - { id: b, text: "`Forbidden`. Le serveur sait qui appelle, et refuse l'action." }
  - { id: c, text: "`Not Found`. Cette adresse ne correspond à aucune ressource." }
correctChoiceId: a
source: "https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Status/401"
insight: "Le nom anglais est un piège : Unauthorized, mais ça veut dire « on ne sait pas qui tu es »."
common_mistake: "Renvoyer `401` alors que l'utilisateur est identifié, mais n'a pas le droit d'agir. Ça, c'est `403`."
related: [http.status.403, http.status.404]
---

Que signifie le statut HTTP `401` ?

## Explication

`401 Unauthorized` veut dire que l'authentification manque ou n'est pas valable. Le nom est trompeur : ce n'est pas « tu n'as pas le droit », c'est « on ne sait pas qui tu es ». Le refus malgré une identité reconnue, c'est `403`.
