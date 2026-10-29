---
id: ts.alias.001
topic: typescript
order: 5
title: type et interface
level: 2
minutes: 7
source:
  - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
prerequisites:
  - ts.union.001
---

## Le problème

On répète `{ x: number; y: number }` à chaque fonction. Il faut un nom. Et il faut savoir si ce nom se déclare avec `type` ou avec `interface`.

## L'idée

Un **alias** `type Point = { x: number; y: number }` donne un nom à n'importe quel type : objet, union, littéral. Ce n'est qu'un nom : `type ID = number | string` n'invente pas un nouvel `ID` distinct. Remplacer l'alias par le type écrit revient au même.

Une **interface** nomme aussi une forme d'objet :

```ts
interface Point {
  x: number;
  y: number;
}
```

TypeScript ne regarde que la **structure**. Un objet `{ x: 100, y: 100 }` convient s'il a les propriétés attendues, qu'on ait utilisé `type` ou `interface`. C'est le typage structurel.

`type` et `interface` sont très proches. On choisit souvent librement. L'écart utile : une `interface` peut être rouverte pour ajouter des champs (declaration merging). Un `type` ne se rouvre pas. On étend une interface avec `extends`, un type objet avec une intersection `&`.

Le handbook propose une heuristique : partir d'`interface`, passer à `type` quand on a besoin de ses traits (union, primitive renommée).

Une **assertion** `as HTMLCanvasElement` dit un type plus précis que ce que TypeScript infère. Elle est effacée. Aucun contrôle à l'exécution. TypeScript refuse les conversions « impossibles » (`"hello" as number`) sauf à passer par `unknown` ou `any`.

## Un exemple

```ts
type ID = number | string;

interface Bear {
  name: string;
  honey: boolean;
}

function printCoord(pt: { x: number; y: number }) {
  console.log(pt.x, pt.y);
}
printCoord({ x: 100, y: 100 });
```

## Les pièges

Un alias n'est pas une classe, ni une marque à l'exécution. `UserInputSanitizedString` reste un `string`.

`interface` ne renomme pas un primitif. `type ID = string` oui.

L'assertion n'est pas un cast runtime. Si le DOM n'a pas de canvas, le programme continue avec le mauvais objet.

## À retenir

- `type` nomme n'importe quel type. `interface` nomme une forme d'objet, et peut se fusionner.
- Seule la structure compte, pas le nom de la déclaration.
- `as` disparaît à la compilation. Ce n'est pas une vérif.
