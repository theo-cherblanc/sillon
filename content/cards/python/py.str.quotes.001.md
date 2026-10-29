---
id: py.str.quotes.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.str.001
choices:
  - { id: a, text: "Les guillemets simples et doubles délimitent la même sorte de chaîne." }
  - { id: b, text: "Les guillemets simples créent des caractères ; les doubles créent des chaînes." }
  - { id: c, text: "Les guillemets doubles interpolent des variables ; les simples restent bruts." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "On choisit la paire qui évite d'échapper. L'interpolation, c'est plutôt une f-string, autre sujet."
common_mistake: "Importer la distinction char/string du C, ou le template JS des backticks."
related: [py.str.concat.001, py.num.hash.001]
---

Quelle différence y a-t-il entre `'spam'` et `"spam"` ?

## Explication

Aucune pour le type : c'est une `str` dans les deux cas. Pas un caractère vs une chaîne, pas d'interpolation magique.
