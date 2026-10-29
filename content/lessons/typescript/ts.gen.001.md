---
id: ts.gen.001
topic: typescript
order: 7
title: Les génériques
level: 2
minutes: 8
source:
  - https://www.typescriptlang.org/docs/handbook/2/generics.html
prerequisites:
  - ts.fn.001
---

## Le problème

Une fonction identité qui ne marche que sur `number` est trop étroite. La même avec `any` accepte tout, mais on perd le type au retour : un `number` entré redevient `any` en sortie.

## L'idée

Un **générique** capte un type pour le réutiliser. Une **variable de type** (`Type`, souvent `T`) travaille sur les types, pas sur les valeurs.

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
```

L'argument et le retour sont le **même** type. On n'a rien perdu. On appelle `identity<string>("myString")` en passant le type, ou plus souvent `identity("myString")` : le compilateur **infère** `Type` depuis l'argument.

Dans le corps, `Type` peut être n'importe quel type. `arg.length` est donc refusé : un `number` n'a pas `length`. Pour un tableau : `arg: Type[]`. Pour « tout type qui a `length` » : une **contrainte** `Type extends { length: number }`.

Les génériques existent aussi sur les types : `type Box<Type> = { contents: Type }`, et sur les classes.

## Un exemple

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity("myString");

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

function longest<Type extends { length: number }>(a: Type, b: Type) {
  return a.length >= b.length ? a : b;
}
```

## Les pièges

`any` n'est pas un générique. Ça accepte tout **et** oublie ce qui est entré.

Sans contrainte, on ne lit pas une propriété « évidente » sur `Type`. Il faut `extends` ou travailler sur `Type[]`.

L'inférence échoue parfois sur des cas tordus. On passe alors le type entre `<>`.

## À retenir

- `<Type>` capte un type et le fait ressortir. Plus précis que `any`.
- L'inférence évite souvent d'écrire `identity<string>(...)`.
- Une contrainte `extends` autorise les opérations communes (comme `length`).
