---
id: http.head.001
type: mcq
topic: http
tags: [http]
difficulty: 2
choices:
  - { id: a, text: "Comme `GET`, mais la réponse n'a pas de corps. Les en-têtes sont les mêmes." }
  - { id: b, text: "Elle supprime la ressource, sans confirmation." }
  - { id: c, text: "Elle exige un corps JSON, sinon le serveur répond `400`." }
correctChoiceId: a
source: "https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Methods/HEAD"
insight: "Utile pour tester un cache ou un téléchargement : tu lis `Content-Length` ou `ETag` sans tout tirer."
common_mistake: "Croire que `HEAD` est un `GET` plus léger côté serveur. Le serveur peut quand même faire tout le travail, et jeter le corps ensuite."
related: [web.method.001, http.status.204]
---

Que fait la méthode HTTP `HEAD` ?

## Explication

Statut et en-têtes doivent correspondre à ceux du `GET`. Ce n'est pas un delete. Ce n'est pas un `POST`.
