---
id: arch.client.001
type: mcq
topic: architecture
tags: [architecture]
difficulty: 1
choices:
  - { id: a, text: "Le client envoie une requête, le serveur renvoie une réponse." }
  - { id: b, text: "Le serveur envoie la page, puis le client la renvoie corrigée." }
  - { id: c, text: "Les deux écrivent dans la même base, chacun à son tour." }
correctChoiceId: a
insight: "Le même programme peut être serveur pour le navigateur, et client d'une base. Le rôle décrit l'échange, pas la machine."
related: [arch.api.001, web.method.001]
---

Dans un échange client-serveur, qui fait quoi ?

## Explication

Le navigateur est un client. L'API qu'il appelle est le serveur de cet échange. Une seconde plus tard, le même programme peut être client d'un autre service.
