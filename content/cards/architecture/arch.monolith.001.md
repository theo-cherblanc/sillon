---
id: arch.monolith.001
type: mcq
topic: architecture
tags: [architecture]
difficulty: 2
choices:
  - { id: a, text: "Chaque partie (interface, API, données) est un programme déployé à part." }
  - { id: b, text: "Interface, API et accès aux données sont livrés dans un seul programme." }
  - { id: c, text: "Toutes les données du projet tiennent dans une seule base, quel que soit le nombre de programmes." }
correctChoiceId: b
insight: "Monolithe décrit le découpage, pas la qualité. Plusieurs services, ce sont plusieurs programmes déployés séparément."
related: [arch.api.001, arch.proxy.001]
---

Que veut dire qu'une application est un monolithe ?

## Explication

Le mot parle du livrable, pas du soin du code. À l'inverse, plusieurs services sont plusieurs programmes, déployés séparément, qui se parlent.
