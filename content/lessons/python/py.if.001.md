---
id: py.if.001
topic: python
order: 4
title: if et l'indentation
level: 1
minutes: 6
source:
  - https://docs.python.org/3/tutorial/introduction.html
  - https://docs.python.org/3/tutorial/controlflow.html
prerequisites:
  - py.num.001
---

## Le problème

Le programme doit choisir : négatif, zéro, un, ou plus. En Python, ce n'est pas des accolades qui groupent les lignes. C'est l'indentation.

## L'idée

`if`, zéro ou plusieurs `elif`, `else` optionnel. `elif` est le « else if », pour éviter d'empiler les indentations. Une suite `if` / `elif` / `elif` remplace le `switch` d'autres langages.

Les comparaisons : `<`, `>`, `==`, `<=`, `>=`, `!=`.

Le corps d'un `if` ou d'un `while` est **indenté**. Toutes les lignes d'un même bloc ont le même décalage. L'indentation, c'est le groupement des instructions.

`while` répète tant que la condition reste vraie. En Python, `0` est faux, un entier non nul est vrai. Une séquence vide est fausse, une séquence non vide est vraie.

`pass` ne fait rien. Il tient la place d'un bloc encore vide. `True` et `False` sont les booléens.

## Un exemple

```python
x = 42
if x < 0:
    x = 0
    print('Negative changed to zero')
elif x == 0:
    print('Zero')
elif x == 1:
    print('Single')
else:
    print('More')

a, b = 0, 1
while a < 10:
    print(a)
    a, b = b, a + b
```

## Les pièges

Oublier `:` après `if x < 0` est une `SyntaxError`. Ce n'est pas l'indentation qui manque en premier dans ce cas.

`=` assigne. `==` compare. `if x = 0` n'est pas un test.

Le `else` d'une boucle `for` / `while` n'est **pas** celui du `if`. Il s'exécute si la boucle finit **sans** `break`. On le verra avec `for`. Ici, `else` appartient à `if`.

## À retenir

- `if` / `elif` / `else`. L'indentation groupe le bloc. Un `:` ouvre le bloc.
- `==` compare, `=` assigne. `while` répète tant que c'est vrai.
- `pass` tient un bloc vide.
