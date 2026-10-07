---
id: http.status.304
type: mcq
topic: http
tags: [http, status]
difficulty: 2
choices:
  - { id: a, text: "`Not Modified`. La copie en cache est encore valable." }
  - { id: b, text: "`No Content`. La requête a réussi, et la réponse n'a pas de corps." }
  - { id: c, text: "`Moved Permanently`. La ressource a changé d'adresse pour de bon." }
correctChoiceId: a
related: [arch.cache.001, http.status.204]
source: "https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Status/304"
---

Que signifie le statut HTTP `304` ?

## Explication

Le client a déjà une copie, et il le dit (souvent avec `If-None-Match` ou `If-Modified-Since`). `304` répond que rien n'a changé : on réutilise le cache. Ce n'est pas une erreur, et ce n'est pas un `204` : là, il n'y avait rien à renvoyer dès le départ.
