---
id: git.push.001
type: mcq
topic: git
tags: [git]
difficulty: 1
choices:
  - { id: a, text: "Le commit reste local ; `git push` l'envoie au dépôt distant." }
  - { id: b, text: "`git commit` publie déjà le travail sur le distant." }
  - { id: c, text: "`git push` écrit le message du commit." }
correctChoiceId: a
insight: "Sans `push`, le commit reste sur la machine. Les autres ne le voient pas."
related: [git.commit.001, git.cloze.001, git.order.001]
---

Quelle différence y a-t-il entre commit et push ?

## Explication

`git commit` enregistre dans le dépôt de la machine. `git push` envoie ces commits vers un remote, par exemple un dépôt sur un serveur.
