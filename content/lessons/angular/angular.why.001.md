---
id: angular.why.001
topic: angular
order: 1
title: "Qu'est-ce qu'Angular ?"
level: 1
minutes: 6
source:
  - https://angular.dev/overview
  - https://angular.dev/essentials
prerequisites: []
---

## Le problème

Une application web qui dure doit rester rapide et fiable quand l'équipe et le code grandissent. Recoller soi-même des outils, des API et des bibliothèques prend du temps, et le cadre de travail n'est plus le même d'un projet à l'autre.

## L'idée

Angular est un framework web. Une équipe dédiée chez Google le maintient. Il fournit une suite d'outils, d'API et de bibliothèques pour construire des applications rapides et fiables, qui tiennent la charge avec la taille de l'équipe et celle du code.

La documentation officielle est sur Angular.dev. Le guide Essentials est une courte introduction : il suppose HTML, CSS et TypeScript, plus les classes JavaScript, les bases de TypeScript et les décorateurs.

## Un exemple

La plateforme couvre notamment :

- les composants, pour découper le code en parties bien encapsulées
- les `signals`, un modèle de réactivité fine, avec des optimisations à la compilation
- le rendu côté serveur (`SSR`) et la génération de sites statiques (`SSG`), avec hydratation du DOM
- l'injection de dépendances, pour partager du code entre les composants
- le routage, les formulaires, Angular CLI, et DevTools

Angular CLI vise à lancer un projet en moins d'une minute, avec les commandes pour aller jusqu'à une application en production. `ng update` applique des transformations automatiques sur les ruptures de compatibilité courantes.

## Les pièges

Angular n'est pas un serveur HTTP, ni une base de données, ni une feuille de styles. C'est le cadre dans lequel on écrit l'application.

Les `signals` sont un modèle de réactivité. Ce n'est pas le mot pour un événement du DOM (`click`), ni pour une route.

## À retenir

- Angular est un framework web, maintenu chez Google, pensé pour durer avec l'équipe et le code.
- La suite inclut composants, `signals`, `SSR` / `SSG`, injection de dépendances, routage, formulaires, CLI et DevTools.
- Angular vise un développement sûr par défaut, avec une sanitization HTML et le support des trusted types.
