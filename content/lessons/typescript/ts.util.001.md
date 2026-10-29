---
id: ts.util.001
topic: typescript
order: 8
title: Partial, Pick et keyof
level: 2
minutes: 8
source:
  - https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
  - https://www.typescriptlang.org/docs/handbook/utility-types.html
prerequisites:
  - ts.alias.001
  - ts.gen.001
---

## Le problème

On a déjà un type `Todo`. Il faut parfois le même objet tout optionnel, ou seulement `title` et `completed`, ou un dictionnaire dont les clés sont un union de noms. Réécrire à la main casse dès que `Todo` bouge.

## L'idée

`keyof T` produit l'union des clés de `T`. Pour `{ name: string; age: number }`, `keyof` vaut `"name" | "age"`.

TypeScript fournit des **utilitaires** globaux :

- `Partial<Type>` : toutes les propriétés deviennent optionnelles
- `Required<Type>` : l'inverse, tout est requis
- `Readonly<Type>` : les propriétés ne se réassignent plus
- `Record<Keys, Type>` : un objet dont les clés sont `Keys` et les valeurs `Type`
- `Pick<Type, Keys>` : garde seulement `Keys`
- `Omit<Type, Keys>` : enlève `Keys` (l'inverse de `Pick`)
- `Exclude<UnionType, ExcludedMembers>` : retire des membres d'une union
- `NonNullable<Type>` : retire `null` et `undefined`
- `ReturnType<Type>` : le type de retour d'une fonction

Ce sont des transformations de types. Elles n'existent pas à l'exécution.

## Un exemple

```ts
type Point = { x: number; y: number };
type P = keyof Point; // "x" | "y"

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoUpdate = Partial<Todo>;
type TodoInfo = Omit<Todo, "completed">;

type CatName = "miffy" | "boris" | "mordred";
type CatInfo = { age: number; breed: string };
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```

## Les pièges

`Partial` ne rend pas les valeurs `undefined` « sémantiquement optionnelles » à l'exécution. C'est un type. L'objet JS peut toujours manquer un champ, ou pas.

`Pick` et `Omit` travaillent sur des **clés** (littéraux ou unions de littéraux). `Exclude` travaille sur une **union** de types.

`keyof` d'un index signature large peut devenir `string | number`. Ce n'est pas toujours une union de noms précis.

## À retenir

- `keyof T` : union des clés.
- `Partial`, `Pick`, `Omit`, `Record`, `Readonly` transforment un type objet.
- `Exclude` et `NonNullable` transforment une union. Rien de tout ça n'existe au runtime.
