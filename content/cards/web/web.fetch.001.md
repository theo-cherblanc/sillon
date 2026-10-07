---
id: web.fetch.001
type: mcq
topic: web
tags: [web, http]
difficulty: 2
choices:
  - { id: a, text: "Un statut `404` fait échouer la promesse." }
  - { id: b, text: "La promesse réussit dès qu'une réponse HTTP arrive, même avec un `404`." }
  - { id: c, text: "`fetch` n'envoie jamais le corps. Il faut `XMLHttpRequest`." }
correctChoiceId: b
source: "https://developer.mozilla.org/fr/docs/Web/API/Window/fetch"
insight: "Dès qu'une réponse HTTP arrive, `fetch` résout sa promesse. Il reste à lire `response.ok` ou `status`."
common_mistake: "Enchaîner `await fetch(url)` et `response.json()` sans regarder le statut. On parse alors une page d'erreur comme des données."
related: [http.status.404, web.cors.001]
---

Que fait la promesse de `fetch` si la réponse est un `404` ?

## Explication

`fetch` échoue si le réseau casse, ou si CORS bloque la lecture. Un `404`, un `500`, c'est une réponse HTTP : la promesse se résout. `response.ok` est faux. Ensuite seulement, tu décides.
