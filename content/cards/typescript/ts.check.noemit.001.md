---
id: ts.check.noemit.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 2
lesson_id: ts.check.001
choices:
  - { id: a, text: "`noEmitOnError` empêche `tsc` d'écrire le JavaScript en cas d'erreur de type." }
  - { id: b, text: "`noEmitOnError` efface les annotations mais laisse toujours le fichier `.js`." }
  - { id: c, text: "`noEmitOnError` transforme chaque erreur de type en exception au runtime." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
insight: "Le défaut reste permissif. Ce drapeau, c'est le cran « ne sors pas de JS douteux »."
common_mistake: "Confondre ce drapeau avec `strict`, qui serre la vérif sans parler d'émission."
related: [ts.check.emit.001, ts.check.strict.001]
---

À quoi sert l'option `noEmitOnError` ?

## Explication

Elle bloque la mise à jour du `.js` si le type-check a échoué. Elle n'ajoute rien au runtime, et elle n'est pas le mode `strict`.
