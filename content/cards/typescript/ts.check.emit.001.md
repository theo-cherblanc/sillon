---
id: ts.check.emit.001
type: mcq
topic: typescript
tags: [typescript]
difficulty: 1
lesson_id: ts.check.001
choices:
  - { id: a, text: "Par défaut, `tsc` émet quand même le JavaScript s'il a signalé des erreurs." }
  - { id: b, text: "Par défaut, `tsc` refuse d'écrire le `.js` dès qu'une erreur de type existe." }
  - { id: c, text: "Par défaut, `tsc` supprime les lignes en erreur et émet le reste du fichier." }
correctChoiceId: a
source: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
insight: "C'est voulu : en migrant du JS, le code tournait déjà. TypeScript ne bloque pas l'émission par défaut."
common_mistake: "Croire qu'une erreur rouge dans `tsc` empêche toujours d'obtenir un `.js`."
related: [ts.check.noemit.001, ts.check.erase.001]
---

Que fait `tsc` par défaut quand le type-check trouve une erreur ?

## Explication

Il signale l'erreur et écrit tout de même le `.js`. Il ne coupe pas les lignes fautives. Pour bloquer l'émission, il faut `noEmitOnError`.
