---
id: docker.copy.001
type: mcq
topic: docker
tags: [docker]
difficulty: 2
choices:
  - { id: a, text: "`COPY` et `ADD` font la même chose. On peut les échanger." }
  - { id: b, text: "`COPY` copie un fichier local. `ADD` peut aussi extraire une archive, ou télécharger une URL." }
  - { id: c, text: "`ADD` est plus sûr, parce qu'il refuse les archives et les URL." }
correctChoiceId: b
source: "https://docs.docker.com/reference/dockerfile/#copy"
insight: "Pour un fichier du projet, `COPY` suffit. `ADD` a des effets de bord : une archive `.tar` peut s'extraire toute seule."
common_mistake: "Utiliser `ADD` par habitude, puis chercher pourquoi l'archive a disparu au profit de son contenu."
related: [docker.file.001, docker.secret.001]
---

Que distinguent `COPY` et `ADD` dans un Dockerfile ?

## Explication

`COPY` prend un chemin du contexte, et l'écrit dans l'image. Rien d'autre. `ADD` peut extraire un tar, ou suivre une URL. Pour un fichier ordinaire, ces extra sont des pièges. Les docs Docker recommandent `COPY` par défaut.
