---
id: web.https.001
type: mcq
topic: web
tags: [web, https]
difficulty: 1
choices:
  - { id: a, text: "Le mot de passe stocké dans la base du site." }
  - { id: b, text: "Le code JavaScript, pour qu'on ne puisse pas le lire." }
  - { id: c, text: "Le trajet entre le navigateur et le serveur. Le contenu est chiffré." }
correctChoiceId: c
---

Que protège HTTPS ?

## Explication

HTTPS, c'est HTTP au-dessus de TLS. Quelqu'un sur le réseau ne lit pas la requête ni la réponse en clair, et ne les modifie pas sans qu'on s'en aperçoive. Ça ne dit pas que le site est honnête, ni que le serveur stocke bien les données.
