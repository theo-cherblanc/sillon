---
id: arch.idempotent.001
type: mcq
topic: architecture
tags: [architecture, http]
difficulty: 2
choices:
  - { id: a, text: "Elle ne peut réussir qu'une seule fois, puis elle est refusée." }
  - { id: b, text: "La refaire une fois de plus laisse le même résultat que l'avoir faite une seule fois." }
  - { id: c, text: "Elle s'exécute plus vite à chaque appel." }
correctChoiceId: b
---

Qu'est-ce qu'une opération idempotente ?

## Explication

`PUT` avec le même corps deux fois laisse la ressource dans le même état. `POST` qui crée à chaque appel ne l'est pas : deux appels peuvent créer deux ressources. Réessayer une opération idempotente est sans surprise.
