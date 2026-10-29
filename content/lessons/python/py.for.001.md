---
id: py.for.001
topic: python
order: 5
title: for, range et break
level: 1
minutes: 7
source:
  - https://docs.python.org/3/tutorial/controlflow.html
prerequisites:
  - py.if.001
  - py.list.001
---

## Le problème

Il faut parcourir les éléments d'une liste, ou une suite de nombres. En C, `for` compte. En Python, `for` parcourt une séquence, dans l'ordre.

## L'idée

`for w in words` prend chaque élément, dans l'ordre. Modifier la collection qu'on parcourt est délicat : on boucle plutôt sur une copie, ou on construit une nouvelle collection.

`range` fabrique une progression arithmétique. `range(5)` produit `0, 1, 2, 3, 4` : la borne de fin **n'y est pas**. `range(5, 10)` commence à 5. Un troisième argument est le pas, éventuellement négatif. `range(10)` affiché tout seul s'écrit `range(0, 10)` : ce n'est pas une liste. C'est un **itérable**, qui donne les valeurs à la demande. `list(range(5, 10))` matérielise. `sum(range(4))` vaut `6` (`0+1+2+3`).

`break` sort de la boucle **la plus interne**. `continue` passe à l'itération suivante.

Un `else` sur `for` ou `while` s'exécute si la boucle finit **sans** `break`. Ce n'est pas le `else` d'un `if`. Le tutoriel le dit clairement : regarder à qui le `else` est accroché.

## Un exemple

```python
words = ['cat', 'window', 'defenestrate']
for w in words:
    print(w, len(w))

for i in range(5):
    print(i)  # 0 1 2 3 4

list(range(5, 10))      # [5, 6, 7, 8, 9]
list(range(0, 10, 3))   # [0, 3, 6, 9]

for num in range(2, 10):
    if num % 2 == 0:
        print(f"Found an even number {num}")
        continue
    print(f"Found an odd number {num}")
```

## Les pièges

`range(10)` ne contient pas `10`. Les indices légaux d'une séquence de longueur 10 sont `0` à `9`.

`for i in range(len(a))` marche, mais `enumerate` est souvent plus clair. (On peut s'en passer au début.)

Le `else` d'un `for` n'est pas « sinon, si la liste est vide ». Il veut dire « aucun `break` n'a eu lieu ».

## À retenir

- `for` parcourt les éléments, dans l'ordre. `range` compte, fin exclue.
- `range(...)` n'est pas une liste. `break` sort, `continue` saute.
- `else` sur une boucle : seulement s'il n'y a pas eu de `break`.
