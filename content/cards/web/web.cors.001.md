---
id: web.cors.001
type: reveal
topic: web
tags: [web, cors]
difficulty: 2
---

Qu'est-ce que CORS ?

## Réponse

Une règle du navigateur : un script ne lit la réponse d'une autre origine que si le serveur l'y autorise.

## Explication

Une origine, c'est le schéma, l'hôte et le port. `https://a.dev` et `https://b.dev` sont deux origines. Le serveur autorise la lecture avec des en-têtes, dont `Access-Control-Allow-Origin`. CORS ne remplace pas l'authentification.
