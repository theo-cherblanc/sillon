---
id: docker.layer.001
type: reveal
topic: docker
tags: [docker]
difficulty: 3
---

Pourquoi l'ordre des instructions d'un Dockerfile change-t-il la vitesse de construction ?

## Réponse

Chaque instruction est une couche. Docker réutilise le cache tant que la couche n'a pas changé.

## Explication

Si une instruction change, elle et toutes celles d'après sont reconstruites. On place donc d'abord ce qui bouge peu, comme l'installation des dépendances, et ensuite le code qui change souvent.
