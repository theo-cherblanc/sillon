---
id: arch.cdn.001
type: mcq
topic: architecture
tags: [architecture]
difficulty: 2
choices:
  - { id: a, text: "Il génère chaque page à la demande, sur un unique serveur près de la base." }
  - { id: b, text: "Il place des copies de fichiers près des visiteurs, pour les servir plus vite." }
  - { id: c, text: "Il raccourcit les noms de domaine pour accélérer le DNS." }
correctChoiceId: b
insight: "Les fichiers statiques (JS, CSS, images) se prêtent bien au CDN. Les réponses d'API propres à un utilisateur, beaucoup moins."
common_mistake: "Mettre une API authentifiée sur le CDN comme un fichier statique. Une réponse personnelle ne se cache pas comme un logo."
related: [arch.cache.001, web.https.001]
---

À quoi sert un CDN ?

## Explication

Un CDN recopie JS, CSS, images, parfois du HTML, sur des points de présence. Le navigateur les prend près de lui, au lieu d'aller jusqu'à l'origine. Ce n'est pas un remplaçant de l'application : c'est un cache géographique.
