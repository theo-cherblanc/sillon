---
id: http.status.401
type: mcq
topic: http
tags: [http, status]
difficulty: 2
choices:
  - { id: a, text: "prouver qui tu es" }
  - { id: b, text: "tu es reconnu, mais cette action est refusée" }
  - { id: c, text: "cette adresse n'existe pas" }
correctChoiceId: a
---

Que demande surtout un statut `401` ?

## Explication

`401 Unauthorized` veut dire que l'authentification manque ou n'est pas valable. Le nom est trompeur : ce n'est pas « tu n'as pas le droit », c'est « on ne sait pas qui tu es ». Le refus malgré une identité reconnue, c'est `403`.
