---
id: py.str.001
topic: python
order: 2
title: Les chaînes
level: 1
minutes: 7
source:
  - https://docs.python.org/3/tutorial/introduction.html
prerequisites:
  - py.num.001
---

## Le problème

Le texte est partout : un mot, un chemin, un message. Il faut le coller, le couper, et comprendre pourquoi `word[0] = 'J'` refuse.

## L'idée

Une chaîne a le type `str`. Guillemets simples ou doubles, même résultat. `print` affiche sans les guillemets et interprète `\n`. Un préfixe `r` donne une chaîne brute, où `\` n'échappe plus.

`+` concatène. `*` répète. Deux **littéraux** côte à côte se collent (`'Py' 'thon'`). Une variable et un littéral, non : il faut `+`.

L'index `word[0]` est le premier caractère. Les négatifs comptent depuis la fin : `word[-1]` est le dernier. Il n'y a pas de type caractère : un caractère est une chaîne de longueur 1.

Une **tranche** `word[0:2]` va de 0 inclus à 2 exclu. Un début omis vaut 0, une fin omise vaut la longueur. `s[:i] + s[i:]` reconstruit `s`. Un index trop grand lève `IndexError`. Une tranche hors bornes, non : elle se coupe poliment.

Les chaînes sont **immuables**. On n'écrit pas dans un index. On fabrique une nouvelle chaîne. `len` donne la longueur.

## Un exemple

```python
word = 'Python'
word[0]   # 'P'
word[-1]  # 'n'
word[0:2] # 'Py'
word[:2] + word[2:]  # 'Python'
len(word)  # 6

'J' + word[1:]  # 'Jython'
```

## Les pièges

`word[0] = 'J'` lève `TypeError` : on ne modifie pas une `str`.

`word[42]` lève `IndexError`. `word[42:]` vaut `''`.

`prefix 'thon'` est une `SyntaxError`. `prefix + 'thon'` concatène.

## À retenir

- Index 0-based, négatifs depuis la fin. Tranche : début inclus, fin exclue.
- Immuable : on construit une nouvelle chaîne. `len` mesure.
- `+` et `*` collent et répètent. Deux littéraux se collent ; une variable, non.
