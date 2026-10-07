---
id: arch.idempotent.001
type: mcq
topic: architecture
tags: [architecture, http]
difficulty: 2
choices:
  - { id: a, text: "Elle ne peut réussir qu'une fois ; le second appel est refusé." }
  - { id: b, text: "Un second appel identique laisse le même résultat que le premier." }
  - { id: c, text: "Chaque nouvel appel s'exécute plus vite que le précédent." }
correctChoiceId: b
insight: "Un réseau peut renvoyer le même appel deux fois. Si l'opération est idempotente, le second n'ajoute pas une deuxième ressource."
related: [web.cloze.001, web.method.001]
---

Que veut dire qu'une opération est idempotente ?

## Explication

`PUT` avec le même corps deux fois laisse la ressource dans le même état. `POST` qui crée à chaque appel ne l'est pas : deux appels peuvent créer deux ressources. Réessayer une opération idempotente est sans surprise.
