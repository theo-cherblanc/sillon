---
id: angular.compose.001
topic: angular
order: 2
title: Composer avec des composants
level: 1
minutes: 7
source:
  - https://angular.dev/essentials/components
prerequisites:
  - angular.why.001
---

## Le problème

Une page web un peu riche mélange vite le profil, la photo, le menu, le texte. Si tout vit dans un seul bloc, le projet devient difficile à lire, à maintenir, et à faire grandir.

## L'idée

Les composants sont les briques principales d'une application Angular. Chacun représente une partie d'une page plus grande. Les découper donne une structure : le code se sépare en morceaux précis, plus simples à faire durer.

Un composant a quatre pièces :

- un décorateur `@Component`, avec la configuration que Angular utilise
- un template HTML, qui contrôle ce qui est rendu dans le DOM
- un sélecteur CSS, qui dit comment le composant s'utilise dans le HTML
- une classe TypeScript, avec les comportements (saisie, appel serveur, etc.)

Le HTML et le CSS peuvent rester dans le décorateur (`template`, `styles`) ou partir dans des fichiers à part (`templateUrl`, `styleUrl`).

## Un exemple

Une page profil assemble plusieurs composants. `UserProfile` importe `ProfilePhoto`, le déclare dans `imports`, puis pose son sélecteur dans le template :

```ts
import {ProfilePhoto} from './profile-photo';

@Component({
  selector: 'user-profile',
  imports: [ProfilePhoto],
  template: `
    <h1>User profile</h1>
    <profile-photo />
    <p>This is the user profile page</p>
  `,
})
export class UserProfile {}
```

La balise dans le HTML, c'est le `selector` (`user-profile`, `profile-photo`), pas le nom de la classe.

## Les pièges

Le `selector` n'est pas le nom du fichier, ni celui de la classe TypeScript. Dans le template parent, la balise à écrire est celle du sélecteur.

Importer un composant en TypeScript ne suffit pas : il faut aussi l'ajouter au tableau `imports` du `@Component`, puis poser le sélecteur dans le template.

`template` met le HTML dans le décorateur. `templateUrl` pointe vers un fichier. Ce n'est pas le même champ.

## À retenir

- Un composant Angular, c'est `@Component` + template + sélecteur + classe TypeScript.
- Une application se construit en assemblant plusieurs composants.
- Pour en utiliser un autre : import TypeScript, entrée dans `imports`, sélecteur dans le template.
