---
id: py.dict.001
topic: python
order: 7
title: Tuples, ensembles et dictionnaires
level: 2
minutes: 8
source:
  - https://docs.python.org/3/tutorial/datastructures.html
prerequisites:
  - py.list.001
  - py.fn.001
---

## Le problème

La liste suffit pour une suite ordonnée et mutable. Il manque : une suite **figée**, un sac **sans doublons**, et des paires **clé → valeur**.

## L'idée

Un **tuple** est une suite immuable : `t = 12345, 54321, 'hello!'`. Les parenthèses sont souvent optionnelles. Un singleton s'écrit `('hello',)` : la virgule fait le tuple, pas les parenthèses. On l'indexe comme une liste. On ne réassigne pas un élément. L'**unpacking** `x, y, z = t` dénomme les éléments.

Un **ensemble** (`set`) est non ordonné, sans doublons. `{'apple', 'orange'}`. `in` y est rapide. `{x for x in 'abracadabra' if x not in 'abc'}` est une compréhension d'ensemble. `{}` n'est **pas** un ensemble vide : c'est un dict vide. L'ensemble vide s'écrit `set()`.

Un **dictionnaire** associe des clés à des valeurs : `{'jack': 4098, 'sape': 4139}`. Les clés sont uniques. `tel['guido'] = 4127` ajoute ou remplace. `del tel['sape']` retire. `list(tel)` liste les clés. `in` teste une **clé**. `dict(sape=4139, guido=4127)` construit aussi. `items()` donne les paires `(clé, valeur)` pour un `for`.

## Un exemple

```python
t = 12345, 54321, 'hello!'
x, y, z = t

basket = {'apple', 'orange', 'apple', 'pear'}
'orange' in basket  # True
set()               # ensemble vide
{}                  # dict vide

tel = {'jack': 4098, 'sape': 4139}
tel['guido'] = 4127
del tel['sape']
'guido' in tel
for k, v in tel.items():
    print(k, v)
```

## Les pièges

`('hello')` est une chaîne entre parenthèses. `('hello',)` est un tuple.

`{}` est un dict, pas un `set`.

`in` sur un dict teste les clés, pas les valeurs. `'jack' in tel` : oui. `4098 in tel` : non, sauf si `4098` est aussi une clé.

## À retenir

- Tuple : suite immuable. La virgule fait le singleton. Unpacking : `x, y = t`.
- `set` : unique, `in` rapide. Vide : `set()`, pas `{}`.
- Dict : clé → valeur. `in` et `list(d)` parlent des clés. `items()` pour les paires.
