---
id: angular.tpl.001
topic: angular
order: 4
title: Rendre le template dynamique
level: 2
minutes: 8
source:
  - https://angular.dev/essentials/templates
prerequisites:
  - angular.react.001
---

## Le problème

Un template figé n'affiche qu'une page morte. Il faut montrer une valeur qui change, désactiver un bouton, réagir à un clic, cacher un bloc, ou répéter une liste — sans réécrire le HTML à la main.

## L'idée

Un template Angular n'est pas que du HTML statique : il lit les données de la classe et pose des gestionnaires d'interaction.

Une **liaison** (binding) relie le template aux données. Quand les données changent, le HTML rendu suit.

- `{{ }}` affiche un texte dynamique
- `[propriété]` pose une valeur sur une propriété du DOM (ex. `disabled`)
- `[attr.nom]` pose un attribut HTML
- `(événement)` ajoute un écouteur ; `$event` passe l'objet événement à la méthode

Angular met à jour liaisons, propriétés et attributs tout seul quand la valeur liée change.

`@if` montre ou cache un morceau de template, avec un `@else` optionnel. `@for` répète un morceau. `track` associe les données aux éléments du DOM créés par `@for`.

## Un exemple

```ts
@Component({
  selector: 'user-profile',
  template: `<h1>Profile for {{ userName() }}</h1>`,
})
export class UserProfile {
  userName = signal('pro_programmer_123');
}
```

Un clic, une condition, une liste :

```html
<button (click)="cancelSubscription($event)">Cancel subscription</button>
<button [disabled]="!isValidUserId()">Save changes</button>

@if (isAdmin()) {
  <h2>Admin settings</h2>
} @else {
  <h2>User settings</h2>
}

@for (badge of badges(); track badge.id) {
  <li>{{ badge.name }}</li>
}
```

## Les pièges

`{{ userName }}` sans `()` n'affiche pas la valeur du signal : il faut `{{ userName() }}`.

Les crochets `[disabled]` parlent au DOM. Les parenthèses `(click)` écoutent. Ce n'est pas interchangeable.

`@for` sans `track` : Angular s'en sert pour associer chaque donnée à son nœud DOM.

## À retenir

- `{{ }}` le texte, `[]` la propriété, `[attr.]` l'attribut, `()` l'événement.
- Un signal lié met à jour le rendu tout seul.
- `@if` / `@else` pour montrer, `@for` + `track` pour répéter.
