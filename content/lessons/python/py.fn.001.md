---
id: py.fn.001
topic: python
order: 6
title: Définir une fonction
level: 1
minutes: 8
source:
  - https://docs.python.org/3/tutorial/controlflow.html
prerequisites:
  - py.for.001
---

## Le problème

Le même calcul se répète. Il faut un nom, des paramètres, et une valeur de retour — ou `None` si on a seulement affiché.

## L'idée

`def nom(paramètres):` ouvre une fonction. Le corps est indenté. La première instruction peut être une chaîne : la **docstring**.

Sans `return`, la fonction rend quand même une valeur : `None`. `return` sans expression rend `None`. Tomber à la fin du corps aussi.

`return resultat` rend cet objet et sort. `append` est une **méthode** : une fonction qui appartient à un objet, `obj.methodname`. `result.append(a)` ajoute à la liste.

Un argument peut avoir une **valeur par défaut**. On appelle alors avec moins d'arguments. Les défauts sont évalués **une fois**, à la définition, pas à chaque appel. Un défaut mutable (`[]`, `{}`) est donc **partagé** entre les appels. Le tutoriel montre `def f(a, L=[]):` qui accumule. Le remède courant : `L=None`, puis `if L is None: L = []`.

Les arguments nommés s'écrivent `kwarg=value`. Ils suivent les positionnels. `in` teste si une valeur est dans une séquence.

## Un exemple

```python
def fib2(n):
    """Return a list containing the Fibonacci series up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a + b
    return result

def ask_ok(prompt, retries=4, reminder='Please try again!'):
    ...

def f(a, L=None):
    if L is None:
        L = []
    L.append(a)
    return L
```

## Les pièges

`def f(a, L=[]):` : le même `L` survit d'un appel à l'autre. Ce n'est pas une nouvelle liste à chaque fois.

Une fonction qui `print` sans `return` rend `None`. `print(fib(0))` affiche `None`.

`function(0, a=0)` : deux valeurs pour `a`. `TypeError`.

## À retenir

- `def`, corps indenté, `return` ou bien `None`.
- Les défauts s'évaluent une fois. Pas de liste mutable en défaut.
- Une méthode appartient à l'objet (`list.append`). `in` teste l'appartenance.
