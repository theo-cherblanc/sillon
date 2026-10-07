---
id: angular.forms.001
topic: angular
order: 6
title: Formulaires avec des signals
level: 2
minutes: 8
source:
  - https://angular.dev/essentials/signal-forms
prerequisites:
  - angular.tpl.001
---

## Le problème

Un login a un e-mail, un mot de passe, un bouton. Il faut que ce que l'utilisateur tape, ce que le modèle contient, et ce que l'écran affiche restent les mêmes — sans recoller chaque champ à la main.

## L'idée

Les Signal Forms gèrent l'état d'un formulaire avec des signals. Le modèle et l'interface se synchronisent.

Cinq gestes :

1. Un `signal` tient le modèle (les données du formulaire)
2. `form(modele)` crée un `FieldTree` : la même forme que le modèle, des champs accessibles par un point
3. `[formField]` sur un `<input>` fait une liaison dans les deux sens
4. Appeler un nœud du `FieldTree` comme une fonction rend l'état (valeur, validité, interaction) ; `value()` lit la valeur
5. `value.set(...)` écrit un champ, et met à jour le `FieldTree` **et** le signal du modèle

`form` et `FormField` viennent de `@angular/forms/signals`. `FormField` entre dans le tableau `imports` du composant.

Quand l'utilisateur tape, le formulaire se met à jour tout seul.

## Un exemple

```ts
import {Component, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  imports: [FormField],
  templateUrl: 'app.html',
})
export class App {
  loginModel = signal<LoginData>({ email: '', password: '' });
  loginForm = form(this.loginModel);
}
```

```html
<input type="email" [formField]="loginForm.email" />
<input type="password" [formField]="loginForm.password" />
<p>Email: {{ loginForm.email().value() }}</p>
```

## Les pièges

`loginForm.email` va dans `[formField]`. Pour afficher la valeur : `loginForm.email().value()`, avec les deux appels.

Oublier `FormField` dans `imports` : la directive `[formField]` n'existe pas pour ce composant.

`form()` enveloppe le signal du modèle. Ce n'est pas un second `signal` à part, ni un champ HTML.

## À retenir

- Modèle = `signal` ; arbre = `form(modele)` ; champ HTML = `[formField]`.
- Lire : `champ().value()` ; écrire : `champ().value.set(...)`.
- Taper dans l'input met à jour le formulaire, et `set` met à jour le modèle.
