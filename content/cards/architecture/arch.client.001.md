---
id: arch.client.001
type: mcq
topic: architecture
tags: [architecture]
difficulty: 1
choices:
  - { id: a, text: "Le client envoie une requête. Le serveur renvoie une réponse." }
  - { id: b, text: "Le serveur envoie la page, puis le client la renvoie corrigée." }
  - { id: c, text: "Les deux écrivent dans la même base, chacun à son tour." }
correctChoiceId: a
---

Dans un échange client-serveur, qui fait quoi ?

## Explication

Le navigateur est un client. L'API qu'il appelle est le serveur de cet échange. Le même programme peut être client d'un autre service une seconde plus tard. Les rôles décrivent l'échange, pas une machine pour toujours.
