---
id: py.if.indent.001
type: mcq
topic: python
tags: [python]
difficulty: 1
lesson_id: py.if.001
choices:
  - { id: a, text: "L'indentation groupe les instructions d'un bloc ; toutes les lignes d'un bloc ont le même décalage." }
  - { id: b, text: "Les accolades groupent les blocs ; l'indentation n'est qu'une convention de lecture." }
  - { id: c, text: "Un seul espace d'indentation est interdit ; Python n'accepte que les tabulations." }
correctChoiceId: a
source: https://docs.python.org/3/tutorial/introduction.html
insight: "Pas d'accolades de bloc. Mélanger tabs et espaces dans un même bloc casse."
common_mistake: "Ouvrir `{` après le `:` comme en JS."
related: [py.if.colon.001, py.fn.def.001]
---

Comment Python groupe-t-il le corps d'un `if` ou d'un `while` ?

## Explication

Par l'indentation. Pas par des `{}`. Le tutoriel ne dit pas que seuls les tabs marchent.
