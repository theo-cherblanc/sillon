---
id: ts.fn.001
topic: typescript
order: 6
title: Typer les fonctions
level: 2
minutes: 7
source:
  - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
  - https://www.typescriptlang.org/docs/handbook/2/functions.html
prerequisites:
  - ts.everyday.001
---

## Le problème

Les fonctions font circuler les données. Sans types sur les paramètres, n'importe quel argument passe. Sans type de retour, une fonction qui devrait renvoyer un nombre peut se mettre à renvoyer autre chose sans bruit.

## L'idée

L'annotation d'un paramètre suit le nom : `function greet(name: string)`. Les arguments sont alors vérifiés. Même sans annotation, TypeScript compte les arguments.

Le type de retour se place après la liste : `function getFavoriteNumber(): number`. Souvent l'inférence suffit, d'après les `return`. Une fonction async s'annote `Promise<number>`.

Dans un callback passé à `forEach` sur `string[]`, le paramètre est typé par le **contexte**. Pas besoin de le réécrire.

`void` décrit une fonction dont la valeur de retour n'est pas utilisable. Ce n'est pas `undefined` comme type de valeur, même si beaucoup de fonctions `void` renvoient `undefined` en JS.

Un paramètre optionnel s'écrit `name?: string`. Il peut être omis. Un défaut `name = "world"` rend aussi le paramètre optionnel, et TypeScript infère le type depuis la valeur.

Une expression de type fonction s'écrit `(a: string) => void`.

## Un exemple

```ts
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

function getFavoriteNumber(): number {
  return 26;
}

async function getFavoriteNumberAsync(): Promise<number> {
  return 26;
}

const names = ["Alice", "Bob", "Eve"];
names.forEach((s) => {
  console.log(s.toUpperCase());
});
```

## Les pièges

`void` n'interdit pas d'écrire `return true` dans une fonction de type `() => void` dans certains contextes (callback). Ça veut dire : l'appelant n'utilise pas la valeur. Ce n'est pas un `undefined` obligatoire.

Omettre le type de retour n'est pas grave si l'inférence est claire. L'écrire sert à figer le contrat.

`greet(42)` est une erreur de type, pas un crash TypeScript : le JS émis peut quand même s'exécuter si on ignore `tsc`.

## À retenir

- Paramètre : `name: string`. Retour : `(): number` ou `Promise<T>`.
- Le contexte type souvent les callbacks. `?` et les défauts rendent un paramètre omissible.
- `void` : la valeur de retour n'est pas à utiliser.
