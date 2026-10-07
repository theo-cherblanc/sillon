---
id: web.storage.001
type: mcq
topic: web
tags: [web, storage]
difficulty: 2
choices:
  - { id: a, text: "Le cookie peut être renvoyé au serveur. `localStorage` reste dans le navigateur." }
  - { id: b, text: "Les deux sont envoyés à chaque requête." }
  - { id: c, text: "`localStorage` est chiffré par HTTPS, le cookie ne l'est pas." }
correctChoiceId: a
---

Quelle différence y a-t-il entre un cookie et `localStorage` ?

## Explication

Le navigateur renvoie le cookie au serveur quand le domaine et le chemin correspondent. `localStorage` n'est pas joint aux requêtes : seul le JavaScript de l'origine le lit. Ni l'un ni l'autre n'est un coffre secret contre la personne qui utilise la machine.
