---
id: arch.stateless.001
type: reveal
topic: architecture
tags: [architecture]
difficulty: 2
---

Que veut dire qu'un serveur est sans état ?

## Réponse

Chaque requête contient ce qu'il faut pour la traiter. Le serveur ne dépend pas du souvenir de la précédente.

## Explication

Deux requêtes identiques peuvent être reçues par deux machines différentes. Ce dont le serveur a besoin voyage avec la requête, ou se trouve dans un stockage partagé. Ce n'est pas « l'application n'a aucune donnée ».
