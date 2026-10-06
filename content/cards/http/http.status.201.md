---
id: http.status.201
type: mcq
topic: http
tags: [http, status]
difficulty: 1
choices:
  - { id: a, text: "`No Content`. La requête a réussi, et la réponse n'a pas de corps." }
  - { id: b, text: "`Created`. La requête a réussi, et une ressource a été créée." }
  - { id: c, text: "`Moved Permanently`. La ressource a changé d'adresse pour de bon." }
correctChoiceId: b
---

Que signifie le statut HTTP `201` ?

## Explication

On le renvoie souvent après un `POST` qui crée quelque chose. L'en-tête `Location` peut donner l'adresse de la nouvelle ressource.
