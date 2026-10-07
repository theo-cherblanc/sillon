---
id: http.cloze.002
type: cloze
topic: http
tags: [http, status]
difficulty: 2
source: "https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Status/204"
insight: "Après un DELETE, un `204` dit souvent que l'action a réussi et qu'il n'y a rien d'autre à renvoyer."
common_mistake: "Le confondre avec `404`. Le `404` dit que la ressource n'existe pas. Le `204` dit que la requête a réussi, sans corps."
related: [http.status.204, http.status.200]
---

Quel code HTTP indique un succès sans corps de réponse ?

Le serveur répond ____.

## Réponse

204

## Explication

`204 No Content` : la requête a abouti, et il n'y a rien à lire ensuite. Ce n'est pas un `200` avec un JSON vide. Ce n'est pas un `404`.
