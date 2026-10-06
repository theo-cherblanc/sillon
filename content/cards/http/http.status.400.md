---
id: http.status.400
type: mcq
topic: http
tags: [http, status]
difficulty: 1
choices:
  - { id: a, text: "`Forbidden`. Le serveur refuse l'action." }
  - { id: b, text: "`Internal Server Error`. Le serveur a échoué en traitant la requête." }
  - { id: c, text: "`Bad Request`. Le serveur n'a pas compris la requête, ou elle est invalide." }
correctChoiceId: c
---

Que signifie le statut HTTP `400` ?

## Explication

Le problème est dans ce que le client a envoyé : JSON mal formé, champ manquant, valeur refusée. Ce n'est pas une panne du serveur.
