---
id: ts.everyday.001
topic: typescript
order: 2
title: Les types du quotidien
level: 1
minutes: 7
source:
  - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
prerequisites:
  - ts.check.001
---

## Le problème

Il faut nommer ce qu'une variable, un paramètre ou un tableau a le droit de contenir. Sans ça, TypeScript retombe sur `any` et arrête de vérifier.

## L'idée

Les primitifs courants s'écrivent **en minuscules** : `string`, `number`, `boolean`. Ce sont les mêmes noms que `typeof` à l'exécution. `String`, `Number`, `Boolean` existent, mais désignent d'autres objets internes : on ne les utilise pas comme types du quotidien. JavaScript n'a pas d'`int` distinct d'un `float` : tout nombre est `number`.

Un tableau de nombres s'écrit `number[]`, ou `Array<number>`. `[number]` est autre chose : un tuple d'un élément.

`any` coupe la vérif : on peut tout lire, tout appeler, tout assigner. Sans annotation, si TypeScript n'infère rien, il retombe sur `any`. `noImplicitAny` en fait une erreur.

L'annotation se place **après** le nom : `let myName: string = "Alice"`. Pas `string myName`. Souvent l'inférence suffit.

Une propriété optionnelle s'écrit `last?: string`. À la lecture, il faut compter avec `undefined`.

## Un exemple

```ts
let myName: string = "Alice";
const names: string[] = ["Alice", "Bob", "Eve"];

function printName(obj: { first: string; last?: string }) {
  console.log(obj.first);
  console.log(obj.last?.toUpperCase());
}
```

`names.forEach(function (s) { s.toUpperCase(); })` : `s` est un `string` par typage contextuel, sans annotation sur le paramètre.

## Les pièges

`any` n'est pas un « type souple ». C'est l'absence de vérif. Une ligne en `any` contamine ce qu'on en tire.

`String` n'est pas `string`. Le type du quotidien est minuscule.

Lire `obj.last` sans test peut planter : la propriété optionnelle vaut parfois `undefined`.

## À retenir

- `string`, `number`, `boolean` en minuscules. Tableaux : `T[]`.
- L'annotation suit le nom. L'inférence et le typage contextuel évitent souvent de la répéter.
- `any` désactive la suite des contrôles. `?` rend une propriété absente possible.
