---
id: shell.order.001
type: order
topic: shell
tags: [shell]
difficulty: 1
steps:
  - Produire le texte
  - Garder les lignes qui correspondent
  - Écrire le résultat dans le fichier
---

Dans quel ordre ces actions envoient-elles un texte filtré dans un fichier ?

## Explication

Le shell lit un tube de gauche à droite. `echo` produit le texte, `grep` n'en garde qu'une partie, puis `>` écrit cette sortie dans le fichier. Le fichier reçoit le texte déjà filtré.
