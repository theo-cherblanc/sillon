---
id: angular.compose.imports.001
type: mcq
topic: angular
tags: [angular]
difficulty: 2
lesson_id: angular.compose.001
choices:
  - { id: a, text: "Utiliser un composant demande un import TypeScript, une entrée dans `imports`, et son sélecteur dans le template." }
  - { id: b, text: "Utiliser un composant demande seulement de copier sa classe dans le fichier du parent." }
  - { id: c, text: "Utiliser un composant demande de le déclarer comme une route, sans l'importer." }
correctChoiceId: a
source: https://angular.dev/essentials/components
insight: "Trois gestes, toujours les mêmes : importer, déclarer, poser la balise."
common_mistake: "Faire l'`import` TypeScript et oublier le tableau `imports` du décorateur : la balise reste inconnue."
related: [angular.compose.selector.001, angular.compose.parts.001]
---

Comment utilise-t-on un autre composant dans un template Angular ?

## Explication

Angular ne découvre pas l'enfant tout seul. Il faut l'importer, le lister dans `imports` du `@Component`, puis écrire un élément qui matche son `selector`. Copier la classe, ou en faire une route, ne remplace pas ça.
