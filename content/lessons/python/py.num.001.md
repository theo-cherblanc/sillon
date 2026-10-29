---
id: py.num.001
topic: python
order: 1
title: Nombres et variables
level: 1
minutes: 6
source:
  - https://docs.python.org/3/tutorial/introduction.html
prerequisites: []
---

## Le problème

Avant les listes et les fonctions, il faut poser un nombre, le calculer, et le garder. Sans ça, on ne peut même pas lire un exemple du tutoriel.

## L'idée

Python sépare les **entiers** (`int`, comme `2`) et les **flottants** (`float`, comme `5.0`). Les opérateurs `+`, `-`, `*`, `/` et les parenthèses font calculatrice.

La division `/` renvoie **toujours** un flottant : `8 / 5` vaut `1.6`, `17 / 3` un `float`. La division entière `//` jette la partie fractionnaire : `17 // 3` vaut `5`. `%` est le reste. `**` est la puissance : `5 ** 2` vaut `25`.

`=` assigne. Ensuite plus rien ne s'affiche, jusqu'au prochain calcul. Une variable jamais assignée lève `NameError`.

Un commentaire commence par `#` et va jusqu'à la fin de la ligne. Un `#` dans une chaîne n'est pas un commentaire.

## Un exemple

```python
# ceci est un commentaire
spam = 1  # et celui-ci aussi
text = "# Ceci n'est pas un commentaire."

width = 20
height = 5 * 9
width * height  # 900

17 / 3   # 5.666...
17 // 3  # 5
17 % 3   # 2
5 ** 2   # 25
```

## Les pièges

`/` n'est pas la division entière. Même `8 / 2` vaut `4.0`, un `float`.

`-3 ** 2` vaut `-9` : `**` passe avant le moins unaire. `(-3) ** 2` vaut `9`.

Utiliser `n` sans l'avoir assigné n'affiche pas `None`. Ça lève `NameError`.

## À retenir

- `int` et `float`. `/` donne un flottant. `//` et `%` font quotient et reste entiers. `**` élève à la puissance.
- `=` assigne. Une variable absente lève `NameError`.
- `#` commente jusqu'à la fin de ligne, sauf dans une chaîne.
