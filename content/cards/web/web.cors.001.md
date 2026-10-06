---
id: web.cors.001
type: mcq
topic: web
tags: [web, cors]
difficulty: 2
choices:
  - { id: a, text: "Un cache partagé entre tous les sites ouverts." }
  - { id: b, text: "Une règle du navigateur : un script ne lit la réponse d'une autre origine que si le serveur l'y autorise." }
  - { id: c, text: "Le certificat qui chiffre la page." }
correctChoiceId: b
---

Qu'est-ce que CORS ?

## Explication

Une origine, c'est le schéma, l'hôte et le port. `https://a.dev` et `https://b.dev` sont deux origines. Le serveur autorise la lecture avec des en-têtes, dont `Access-Control-Allow-Origin`. CORS ne remplace pas l'authentification.
