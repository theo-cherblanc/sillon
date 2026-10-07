---
id: web.cloze.001
type: cloze
topic: web
tags: [web, http]
difficulty: 2
related: [arch.idempotent.001, web.method.001]
insight: "`PUT` décrit l'état voulu à cette URL. Le répéter ne crée pas une deuxième ressource."
---

Quelle méthode HTTP, en majuscules, remplace une ressource et peut être répétée sans changer le résultat ?

La méthode ____ remplace la ressource à cette URL.

## Réponse

PUT

## Explication

Deux `PUT` identiques laissent la ressource dans le même état. Un `POST` qui crée quelque chose à chaque appel ne le fait pas : le second appel peut créer une seconde ressource.
