---
id: arch.api.001
type: mcq
topic: architecture
tags: [architecture]
difficulty: 1
choices:
  - { id: a, text: "Elle les fait partager la même base de données." }
  - { id: b, text: "Elle chiffre le trajet jusqu'au serveur." }
  - { id: c, text: "Elle décrit les appels possibles, ce qu'ils acceptent et ce qu'ils renvoient." }
correctChoiceId: c
insight: "Partager une base n'est pas une API : les deux programmes dépendent alors du même intérieur."
related: [arch.rest.001, arch.client.001]
---

À quoi sert une API entre deux programmes ?

## Explication

Les deux côtés se parlent à travers ce contrat, sans ouvrir l'intérieur de l'autre. Une API HTTP en est une forme. Une bibliothèque en a une aussi : ses fonctions publiques.
