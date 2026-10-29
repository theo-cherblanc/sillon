---
id: py.err.001
topic: python
order: 8
title: Erreurs, None et identité
level: 2
minutes: 7
source:
  - https://docs.python.org/3/tutorial/errors.html
  - https://docs.python.org/3/tutorial/controlflow.html
  - https://docs.python.org/3/library/stdtypes.html#comparisons
prerequisites:
  - py.fn.001
---

## Le problème

Le parseur refuse une ligne (`SyntaxError`). Ou la ligne est correcte, et c'est l'exécution qui casse (`ZeroDivisionError`, `NameError`, `TypeError`). Il faut distinguer, rattraper, et comparer `None` sans le confondre avec `==`.

## L'idée

Deux familles. Les **erreurs de syntaxe** : le parseur n'accepte pas le texte (`while True print('Hello world')` : il manque `:`). Les **exceptions** : le texte est valide, l'exécution échoue. Le type s'affiche (`ZeroDivisionError`), puis un détail, puis une trace.

`try` / `except` rattrape. On exécute le `try`. Sans exception, on saute le `except`. Avec une exception du type nommé, on exécute le `except`, puis on continue après le bloc. Un autre type remonte. Plusieurs `except` sont possibles ; le **premier** qui matche gagne.

`None` est le nom bâti pour « pas de valeur ». Une fonction sans `return` rend `None`.

`==` compare les **valeurs**. `is` compare l'**identité** : le même objet. `x is y` est vrai seulement si `x` et `y` sont le même objet. Pour tester `None`, le tutoriel écrit `if L is None`.

## Un exemple

```python
while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")

print(fib(0))  # None, si fib n'a pas de return

def f(a, L=None):
    if L is None:
        L = []
    L.append(a)
    return L
```

## Les pièges

`'2' + 2` n'est pas une erreur de syntaxe. C'est `TypeError` à l'exécution.

`except` trop large, ou dans le mauvais ordre (la classe parente d'abord), avale des cas qu'on voulait distinguer.

`L == None` marche souvent, mais le tutoriel et la comparaison d'identité disent `is None`. Deux listes égales `==` peuvent ne pas être `is`.

## À retenir

- Syntaxe : le parseur. Exception : l'exécution. `try` / `except` rattrape un type.
- Sans `return`, le résultat est `None`.
- `==` : valeur. `is` : le même objet. `None` se teste avec `is`.
