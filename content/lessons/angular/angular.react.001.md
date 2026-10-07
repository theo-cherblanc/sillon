---
id: angular.react.001
topic: angular
order: 3
title: Réagir avec des signals
level: 2
minutes: 7
source:
  - https://angular.dev/essentials/signals
prerequisites:
  - angular.compose.001
---

## Le problème

L'écran doit suivre l'état : un prénom qui change, un essai qui s'active. Si rien ne dit à Angular ce qui a bougé, le DOM reste en retard, ou tout se recalcule sans besoin.

## L'idée

Dans Angular, les `signals` créent et gèrent l'état. Un signal est une enveloppe légère autour d'une valeur.

- `signal` crée un signal pour un état local
- la valeur se lit en l'appelant : un signal est une fonction
- `set` pose une nouvelle valeur
- `update` calcule la nouvelle valeur à partir de la précédente

Angular suit où les signals sont lus et quand ils changent. Il s'en sert pour un travail en plus, comme mettre à jour le DOM. Cette capacité à répondre aux changements de valeur dans le temps, c'est la réactivité.

Un `computed` est un signal dont la valeur se calcule à partir d'autres signals. Il est en lecture seule : pas de `set`, pas de `update`. Sa valeur change toute seule quand l'un des signals qu'il lit change.

`signal` et `computed` s'utilisent dans les composants pour créer et gérer l'état.

## Un exemple

```ts
import {signal, computed} from '@angular/core';

const firstName = signal('Morgan');
console.log(firstName()); // Morgan

firstName.set('Jaime');
firstName.update((name) => name.toUpperCase());

const firstNameCapitalized = computed(() => firstName().toUpperCase());
```

Dans un composant, le même outil sert l'état local :

```ts
export class UserProfile {
  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());

  activateTrial() {
    this.isTrial.set(true);
  }
}
```

## Les pièges

Lire `firstName` sans parenthèses ne donne pas la valeur : un signal est une fonction, d'où `firstName()`.

`set` et `update` existent sur un signal créé avec `signal`. Un `computed` est en lecture seule : ces méthodes n'y sont pas.

Un signal n'est pas un événement du DOM (`click`). C'est une valeur qui peut changer, et Angular sait où elle est lue.

## À retenir

- Un signal enveloppe une valeur : lecture par appel, écriture avec `set` ou `update`.
- Un `computed` dérive d'autres signals et reste en lecture seule.
- Angular suit lectures et mises à jour ; cette réponse dans le temps s'appelle la réactivité.
