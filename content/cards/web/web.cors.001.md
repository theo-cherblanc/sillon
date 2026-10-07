---
id: web.cors.001
type: mcq
topic: web
tags: [web, cors]
difficulty: 2
choices:
  - { id: a, text: "Une règle du serveur : il refuse toute requête qui ne vient pas de son propre domaine." }
  - { id: b, text: "Une règle du navigateur : un script ne lit la réponse d'une autre origine que si le serveur l'y autorise." }
  - { id: c, text: "Le certificat qui chiffre la page." }
correctChoiceId: b
source: "https://developer.mozilla.org/fr/docs/Web/HTTP/Guides/CORS"
insight: "`curl` n'applique pas CORS. CORS protège le navigateur, pas le serveur contre un autre programme."
common_mistake: "Ajouter `Access-Control-Allow-Origin: *` et croire que l'API est authentifiée. CORS n'est pas une authentification."
related: [web.fetch.001, web.https.001]
---

Que restreint CORS dans le navigateur ?

## Explication

Une origine, c'est le schéma, l'hôte et le port. `https://a.dev` et `https://b.dev` sont deux origines. Le serveur autorise la lecture avec des en-têtes, dont `Access-Control-Allow-Origin`. CORS ne remplace pas l'authentification.
