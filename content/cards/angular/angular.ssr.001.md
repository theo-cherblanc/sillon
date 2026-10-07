---
id: angular.ssr.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.why.001
choices:
  - { id: a, text: "Angular prend en charge le rendu côté serveur (SSR) et la génération de sites statiques (SSG)." }
  - { id: b, text: "Angular prend en charge uniquement le rendu dans le navigateur, sans HTML initial." }
  - { id: c, text: "Angular prend en charge le rendu dans une base de données, puis l'envoie au client." }
correctChoiceId: a
source: https://angular.dev/overview
insight: "SSR = HTML produit au moment de la requête. SSG = HTML produit à l'avance. Les deux existent dans Angular."
common_mistake: "Croire qu'un framework de composants ne peut vivre que dans le navigateur."
related: [angular.what.001, angular.signal.001]
---

Que prend en charge Angular pour afficher une page hors du navigateur ?

## Explication

La documentation cite le rendu côté serveur et la génération de sites statiques, avec hydratation du DOM. Ce n'est pas « navigateur seulement », et ce n'est pas une base de données qui dessine la page.
