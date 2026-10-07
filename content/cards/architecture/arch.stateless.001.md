---
id: arch.stateless.001
type: mcq
topic: architecture
tags: [architecture]
difficulty: 2
choices:
  - { id: a, text: "Chaque requête contient ce qu'il faut ; le serveur n'a pas besoin de la précédente." }
  - { id: b, text: "Le serveur ne répond jamais deux fois à la même adresse." }
  - { id: c, text: "Le serveur garde l'utilisateur en mémoire entre deux requêtes." }
correctChoiceId: a
insight: "Plusieurs instances peuvent alors se répartir les requêtes : aucune n'a besoin du souvenir de la précédente en mémoire."
common_mistake: "Croire que sans état veut dire sans base de données. La session vit ailleurs (jeton, stockage partagé), pas dans la mémoire du processus."
related: [arch.proxy.001, arch.persist.001]
---

Que veut dire qu'un serveur est sans état ?

## Explication

Deux requêtes identiques peuvent arriver sur deux machines différentes. Ce dont le serveur a besoin voyage avec la requête, ou se trouve dans un stockage partagé. Ce n'est pas « l'application n'a aucune donnée ».
