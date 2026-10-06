---
id: arch.stateless.001
type: mcq
topic: architecture
tags: [architecture]
difficulty: 2
choices:
  - { id: a, text: "Chaque requête contient ce qu'il faut pour la traiter. Le serveur ne dépend pas du souvenir de la précédente." }
  - { id: b, text: "Le serveur ne répond jamais deux fois à la même adresse." }
  - { id: c, text: "Le serveur garde l'utilisateur en mémoire entre deux requêtes." }
correctChoiceId: a
---

Que veut dire qu'un serveur est sans état ?

## Explication

Deux requêtes identiques peuvent être reçues par deux machines différentes. Ce dont le serveur a besoin voyage avec la requête, ou se trouve dans un stockage partagé. Ce n'est pas « l'application n'a aucune donnée ».
