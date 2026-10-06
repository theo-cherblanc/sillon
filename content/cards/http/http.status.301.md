---
id: http.status.301
type: mcq
topic: http
tags: [http, status]
difficulty: 2
choices:
  - { id: a, text: "`Found`. La ressource a changé d'adresse, mais seulement pour cette fois." }
  - { id: b, text: "`Not Found`. Cette adresse ne correspond à aucune ressource." }
  - { id: c, text: "`Moved Permanently`. La ressource a changé d'adresse pour de bon." }
correctChoiceId: c
---

Que signifie le statut HTTP `301` ?

## Explication

Le client et les caches peuvent retenir la nouvelle adresse. La prochaine fois, ils y vont directement, sans repasser par l'ancienne.
