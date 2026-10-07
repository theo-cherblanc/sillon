---
id: docker.layer.001
type: mcq
topic: docker
tags: [docker]
difficulty: 3
choices:
  - { id: a, text: "Chaque instruction est une couche ; Docker réutilise le cache tant qu'elle n'a pas changé." }
  - { id: b, text: "Docker reconstruit toujours tout ; l'ordre ne change que la lisibilité." }
  - { id: c, text: "La dernière instruction efface les couches précédentes." }
correctChoiceId: a
insight: "On place d'abord ce qui change peu, comme l'installation des dépendances, puis le code qui change souvent."
common_mistake: "Copier tout le projet avant d'installer les dépendances. Un changement de fichier invalide alors le cache de l'installation."
related: [docker.file.001, docker.copy.001]
---

Pourquoi l'ordre des instructions d'un Dockerfile change-t-il la vitesse de construction ?

## Explication

Si une instruction change, elle et toutes celles d'après sont reconstruites. On place donc d'abord ce qui bouge peu, comme l'installation des dépendances, et ensuite le code qui change souvent.
