---
id: web.order.001
type: order
topic: web
tags: [web, dns, http]
difficulty: 2
steps:
  - Trouver l'adresse qui correspond au nom
  - Ouvrir la connexion vers cette adresse
  - Envoyer la requête HTTP
---

Dans quel ordre un navigateur demande-t-il une page en HTTP, une fois l'URL connue ?

## Explication

Le nom du site n'est pas une adresse. Le navigateur la demande d'abord (DNS), ouvre ensuite la connexion vers cette adresse, puis envoie la requête HTTP. Sans l'adresse, il ne sait pas qui joindre.
