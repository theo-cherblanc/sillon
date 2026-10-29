---
id: ts.union.001
topic: typescript
order: 3
title: Unions et littéraux
level: 1
minutes: 7
source:
  - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
prerequisites:
  - ts.everyday.001
---

## Le problème

Une valeur n'est pas toujours d'un seul type : un identifiant est un `number` ou un `string`, un alignement vaut `"left"` ou `"right"`. Si on type trop large (`string`), n'importe quel texte passe. Si on type trop étroit, l'autre cas est refusé.

## L'idée

Une **union** `A | B` est formée de deux types ou plus. La valeur peut être n'importe lequel des membres. Fournir un membre convient. Une opération n'est autorisée que si elle est valable **pour chaque** membre. Sur `string | number`, `toUpperCase` est refusé : il n'existe pas sur `number`. Il faut d'abord **réduire** (narrow) l'union, par exemple avec `typeof`.

Les **littéraux** nomment une valeur précise : `"hello"`, `0`, `true`. Seuls, ils servent peu. En union, ils décrivent un ensemble fermé : `"left" | "right" | "center"`. `boolean` est l'alias de `true | false`.

`const` d'une chaîne infère le littéral. `let` infère `string`, parce que la variable peut changer. Sur un objet, TypeScript suppose que les champs pourront être réécrits : `{ method: "GET" }` a `method: string`, pas `"GET"`.

Avec `strictNullChecks`, `null` et `undefined` ne sont plus assignables à tout. On les ajoute à l'union quand ils sont possibles : `string | null`.

## Un exemple

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function printText(s: string, alignment: "left" | "right" | "center") {}
printText("Hello, world", "left");
```

## Les pièges

Une union n'est pas un « et ». `number | string` n'est pas un objet qui serait les deux à la fois. L'intersection `A & B` est l'autre opérateur.

`typeof null === "object"` en JavaScript. Un test `typeof x === "object"` ne sort pas `null` d'une union `string[] | null`.

Sans assertion ni `as const`, `req.method` inféré depuis `{ method: "GET" }` est un `string`, trop large pour `"GET" | "POST"`.

## À retenir

- `A | B` : un membre ou l'autre. On n'utilise que ce qui est commun, ou on réduit.
- Les littéraux en union ferment un jeu de valeurs (`"left" | "right"`).
- `const` garde le littéral ; `let` et les champs d'objet s'élargissent souvent.
