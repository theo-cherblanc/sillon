---
id: ts.narrow.001
topic: typescript
order: 4
title: Réduire une union
level: 2
minutes: 8
source:
  - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
prerequisites:
  - ts.union.001
---

## Le problème

Sur `number | string`, `padding.repeat(4)` est refusé : `repeat` attend un `number`. Il faut d'abord montrer à TypeScript dans quelle branche on est.

## L'idée

Le **narrowing** affine un type déclaré vers un type plus précis, d'après le flux du code. TypeScript lit les `if`, ternaires, boucles, et des formes spéciales appelées **type guards**.

`typeof` est un garde. Il ne renvoie qu'un jeu fixe : `"string"`, `"number"`, `"bigint"`, `"boolean"`, `"symbol"`, `"undefined"`, `"object"`, `"function"`. Pas `"null"` : `typeof null` vaut `"object"`.

D'autres gardes : une valeur « truthy », `===` / `!==`, `in` (`"swim" in pet`), `instanceof`. Une affectation affine aussi le type ensuite.

Une **union discriminée** partage un champ littéral (`kind: "circle" | "square"`). Un `switch` sur ce champ réduit chaque branche. Si un cas reste, `never` le signale : c'est le type des valeurs qui n'arrivent jamais. Un `default` qui assigne à `never` rend le `switch` exhaustif.

## Un exemple

```ts
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```

## Les pièges

`typeof null === "object"`. Après `typeof strs === "object"`, TypeScript laisse `string[] | null`, pas seulement le tableau.

Un `if (x)` écarte `0`, `""`, `NaN`, `null` et `undefined`. Ce n'est pas un test « est défini ».

`in` vérifie un nom de propriété. Ce n'est pas `typeof`, ni `instanceof`.

## À retenir

- Narrowing : le flux affine le type. `typeof`, égalité, `in`, `instanceof` sont des gardes.
- `typeof` ne dit pas `"null"`. `null` reste un objet pour `typeof`.
- Un champ littéral (`kind`) discrimine une union. `never` attrape les cas oubliés.
