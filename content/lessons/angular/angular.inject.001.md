---
id: angular.inject.001
topic: angular
order: 5
title: Injecter un service
level: 2
minutes: 6
source:
  - https://angular.dev/essentials/dependency-injection
prerequisites:
  - angular.compose.001
---

## Le problème

Deux composants ont besoin du même calcul, du même accès aux données. Recopier la classe, ou faire `new` dans chaque écran, disperse la vérité : plus une seule source, plus le même comportement partout.

## L'idée

Quand il faut partager de la logique, Angular s'appuie sur l'injection de dépendances. On crée un **service** : du code injecté dans les composants, géré depuis une source unique.

Un service, c'est :

- un décorateur `@Service`, qui déclare la classe comme service Angular, accessible partout dans l'application
- une classe TypeScript, avec le code que l'injection rend disponible

Pour s'en servir dans un composant :

1. importer le service
2. poser un champ de classe égal à `inject(LeService)`
3. appeler ce champ

`inject` est la fonction intégrée qui crée (fournit) le service.

## Un exemple

```ts
import {Service} from '@angular/core';

@Service()
export class Calculator {
  add(x: number, y: number) {
    return x + y;
  }
}
```

```ts
import {Component, inject} from '@angular/core';
import {Calculator} from './calculator';

@Component({
  selector: 'app-receipt',
  template: `<h1>The total is {{ totalCost }}</h1>`,
})
export class Receipt {
  private calculator = inject(Calculator);
  totalCost = this.calculator.add(50, 25);
}
```

## Les pièges

`new Calculator()` dans le composant contourne l'injecteur : plus la source unique du service.

`@Service` va sur le service, pas sur le composant. Le composant, lui, appelle `inject`.

Importer le service en TypeScript ne suffit pas : sans `inject(Calculator)` sur un champ, Angular ne le fournit pas.

## À retenir

- Un service = `@Service` + une classe, du code réutilisable à injecter.
- Dans le composant : import, champ `= inject(LeService)`, puis appel du champ.
- Une source unique, partagée entre les composants.
