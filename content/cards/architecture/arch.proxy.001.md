---
id: arch.proxy.001
type: mcq
topic: architecture
tags: [architecture]
difficulty: 2
choices:
  - { id: a, text: "Il exécute le JavaScript à la place du navigateur." }
  - { id: b, text: "Il enregistre chaque requête pour la rejouer plus tard." }
  - { id: c, text: "Il reçoit les requêtes du client, puis les transmet aux services derrière." }
correctChoiceId: c
insight: "Le client ne voit qu'une adresse. On peut changer l'application derrière sans changer celle que le navigateur appelle."
related: [arch.cdn.001, http.status.502]
---

Quel est le rôle d'un reverse proxy ?

## Explication

Le client ne voit qu'une adresse. Le proxy route vers l'application, peut terminer TLS, cacher une réponse, limiter le débit. Nginx ou Caddy jouent souvent ce rôle.
