---
id: ts.check.001
topic: typescript
order: 1
title: Vérifier avant d'exécuter
level: 1
minutes: 7
source:
  - https://www.typescriptlang.org/docs/handbook/2/basic-types.html
prerequisites: []
---

## Le problème

En JavaScript, le type d'une valeur se voit surtout à l'exécution. Appeler une chaîne comme une fonction lève une `TypeError`. Lire une propriété absente renvoie `undefined`, sans exception. On découvre trop tard que `message` n'était pas appelable, ou que `location` n'existait pas.

## L'idée

TypeScript est un vérificateur de types statique. Il décrit les formes et les comportements des valeurs **avant** d'exécuter le programme, et signale ce qui déraille.

`tsc` est le compilateur. Il type-check, puis émet du JavaScript. Les annotations de types ne font pas partie de JavaScript : le compilateur les efface. Elles ne changent jamais le comportement à l'exécution.

TypeScript infère souvent le type tout seul. `const msg = "hello there!"` est déjà un `string` : inutile de le réécrire.

Par défaut, `tsc` émet quand même le `.js` s'il a vu des erreurs. `noEmitOnError` bloque cette émission. Un projet neuf gagne à activer `"strict": true` : cela allume notamment `noImplicitAny` et `strictNullChecks`.

## Un exemple

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());
```

`tsc` enlève les annotations. `Date()` sans `new` renvoie une chaîne : TypeScript refuse de la passer là où un `Date` est attendu.

## Les pièges

Les types ne s'exécutent pas. Un `as HTMLCanvasElement` disparaît à la compilation : aucune vérif runtime, aucune exception si l'assertion est fausse.

Sans `strict`, `null` et `undefined` sont assignables à presque tout. C'est le défaut « pour ne pas gêner », pas le mode d'un code neuf.

## À retenir

- TypeScript prédit les types avant l'exécution ; JavaScript les découvre en courant.
- `tsc` efface les annotations. Elles ne changent pas le runtime.
- `strict`, `noImplicitAny` et `strictNullChecks` serrent la vérif. `noEmitOnError` empêche d'émettre du JS faux.
