---
id: arch.rest.001
type: mcq
topic: architecture
tags: [architecture, http]
difficulty: 2
choices:
  - { id: a, text: "Une API qui n'accepte que du JSON et interdit les erreurs." }
  - { id: b, text: "Une API qui garde la session du client entre chaque appel." }
  - { id: c, text: "Une API qui nomme des ressources par des URL et utilise les méthodes HTTP pour les actions." }
correctChoiceId: c
---

Qu'est-ce qu'une API REST, dans l'usage courant ?

## Explication

`GET /cartes/1` lit, `POST /cartes` crée, `DELETE /cartes/1` supprime. REST n'est pas un format de fichier imposé. C'est une façon de caler l'API sur HTTP. Le corps est souvent du JSON.
