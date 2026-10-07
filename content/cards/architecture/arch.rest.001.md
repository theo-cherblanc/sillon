---
id: arch.rest.001
type: mcq
topic: architecture
tags: [architecture, http]
difficulty: 2
choices:
  - { id: a, text: "Une API qui n'accepte que du JSON et n'a jamais d'erreur." }
  - { id: b, text: "Une API qui garde la session du client entre chaque appel." }
  - { id: c, text: "Une API qui identifie des ressources par des URL et agit avec les méthodes HTTP." }
correctChoiceId: c
insight: "REST, dans l'usage courant, ce n'est pas « on parle JSON ». Ce sont des ressources identifiées par des URL, et des méthodes HTTP pour les actions."
related: [arch.api.001, web.method.001]
---

Dans l'usage courant, qu'est-ce qu'une API REST ?

## Explication

`GET /cartes/1` lit, `POST /cartes` crée, `DELETE /cartes/1` supprime. REST n'impose pas un format de fichier. Le corps est souvent du JSON.
