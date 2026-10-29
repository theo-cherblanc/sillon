---
id: py.list.001
topic: python
order: 3
title: Les listes
level: 1
minutes: 7
source:
  - https://docs.python.org/3/tutorial/introduction.html
  - https://docs.python.org/3/tutorial/datastructures.html
prerequisites:
  - py.str.001
---

## Le problème

Il faut grouper des valeurs, les changer, en ajouter. Une chaîne refuse l'écriture dans un index. La liste, elle, le permet.

## L'idée

Une **liste** s'écrit entre crochets : `[1, 4, 9, 16, 25]`. Index et tranches marchent comme pour les chaînes. Une tranche de liste **renvoie une nouvelle liste**.

Contrairement aux chaînes, la liste est **mutable**. `cubes[3] = 64` remplace un élément. `append` ajoute à la fin.

`=` ne copie pas. `rgba = rgb` : les deux noms voient le même objet. `append` sur l'un se voit sur l'autre. `rgba[:]` (ou `list.copy()`) fabrique une copie peu profonde.

`len` mesure aussi les listes. On peut les imbriquer.

Méthodes courantes : `append`, `pop` (retire et rend, le dernier par défaut), `sort` et `reverse` **en place**. Les méthodes qui ne font que modifier renvoient `None` : on n'écrit pas `fruits = fruits.sort()`.

Une compréhension `[x**2 for x in range(10)]` construit une liste nouvelle.

## Un exemple

```python
squares = [1, 4, 9, 16, 25]
squares[-1]      # 25
squares[-3:]     # [9, 16, 25]
cubes = [1, 8, 27, 65, 125]
cubes[3] = 64
cubes.append(216)

rgb = ["Red", "Green", "Blue"]
rgba = rgb
rgba.append("Alph")
rgb  # ["Red", "Green", "Blue", "Alph"]

copy = rgb[:]
```

## Les pièges

`rgba = rgb` n'est pas une copie. Un `append` passe des deux côtés.

`letters[2:5] = []` supprime une tranche. `letters[:] = []` vide la liste.

`sort()` et `reverse()` rendent `None`. Chaîner `fruits.sort().append(...)` casse.

## À retenir

- Liste mutable : index, tranche, `append`, `pop`. `len` mesure.
- `=` partage l'objet. Une tranche `[:]` copie.
- `sort` / `reverse` en place, résultat `None`.
