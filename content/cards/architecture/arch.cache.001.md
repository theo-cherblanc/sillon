---
id: arch.cache.001
type: mcq
topic: architecture
tags: [architecture]
difficulty: 1
choices:
  - { id: a, text: "Il chiffre les données avant de les envoyer." }
  - { id: b, text: "Il recalcule le résultat à chaque requête, pour qu'il soit toujours à jour." }
  - { id: c, text: "Il garde une copie d'un résultat, pour ne pas refaire le travail." }
correctChoiceId: c
insight: "Sans règle d'expiration, on sert une copie trop vieille. Le gain est la vitesse ; le risque, c'est une donnée périmée."
related: [arch.cdn.001, http.status.304]
---

À quoi sert un cache ?

## Explication

Un navigateur, un serveur ou une base peuvent garder cette copie. Il faut savoir quand elle n'est plus valable.
