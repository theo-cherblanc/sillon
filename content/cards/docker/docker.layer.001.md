---
id: docker.layer.001
type: mcq
topic: docker
tags: [docker]
difficulty: 3
choices:
  - { id: a, text: "Chaque instruction est une couche. Docker réutilise le cache tant que la couche n'a pas changé." }
  - { id: b, text: "Docker reconstruit toujours tout, l'ordre ne change que la lisibilité." }
  - { id: c, text: "La dernière instruction efface les couches précédentes." }
correctChoiceId: a
---

Pourquoi l'ordre des instructions d'un Dockerfile change-t-il la vitesse de construction ?

## Explication

Si une instruction change, elle et toutes celles d'après sont reconstruites. On place donc d'abord ce qui bouge peu, comme l'installation des dépendances, et ensuite le code qui change souvent.
