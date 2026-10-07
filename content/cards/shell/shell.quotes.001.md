---
id: shell.quotes.001
type: mcq
topic: shell
tags: [shell]
difficulty: 2
choices:
  - { id: a, text: "Les doubles gardent le texte tel quel. Les simples laissent `$HOME` s'étendre." }
  - { id: b, text: "Les simples gardent le texte tel quel. Les doubles laissent `$HOME` s'étendre." }
  - { id: c, text: "Les deux empêchent toute substitution. `|` non plus ne s'exécute pas." }
correctChoiceId: b
insight: "Un espace dans un nom de fichier : `\"$file\"`. Sans guillemets, `rapport 2.txt` devient deux arguments."
common_mistake: "Mettre un mot de passe entre doubles guillemets s'il contient un `$`. Le shell substitue la variable avant la commande."
related: [shell.home.001, shell.path.001]
---

Quelle différence y a-t-il entre `'...'` et `"..."` dans le shell ?

## Explication

Entre simples quotes, rien n'est spécial : `$HOME` reste le texte `$HOME`. Entre doubles, les variables et certaines substitutions passent. Dans les deux cas, les espaces restent dans le même argument — c'est déjà ça.
