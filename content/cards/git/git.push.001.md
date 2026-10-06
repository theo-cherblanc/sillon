---
id: git.push.001
type: mcq
topic: git
tags: [git]
difficulty: 1
choices:
  - { id: a, text: "le commit est local. `git push` l'envoie au dépôt distant" }
  - { id: b, text: "`git commit` publie déjà le travail" }
  - { id: c, text: "`git push` crée le message du commit" }
correctChoiceId: a
---

Quelle différence y a-t-il entre commit et push ?

## Explication

`git commit` enregistre dans le dépôt de la machine. `git push` envoie ces commits vers un remote, par exemple un dépôt sur un serveur. Sans push, les autres ne voient pas le commit.
