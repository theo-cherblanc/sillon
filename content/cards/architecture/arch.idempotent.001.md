---
id: arch.idempotent.001
type: reveal
topic: architecture
tags: [architecture, http]
difficulty: 2
---

Qu'est-ce qu'une opération idempotente ?

## Réponse

La refaire une fois de plus laisse le même résultat que l'avoir faite une seule fois.

## Explication

`PUT` avec le même corps deux fois laisse la ressource dans le même état. `POST` qui crée à chaque appel ne l'est pas : deux appels peuvent créer deux ressources. Réessayer une opération idempotente est sans surprise.
