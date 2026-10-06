---
id: js.bug.001
type: bug
topic: javascript
tags: [types]
difficulty: 1
lines:
  - "const n = 1"
  - "n = 2"
bugLine: 2
---

Quelle ligne fait échouer ce programme ?

## Explication

`const` interdit de donner une nouvelle valeur à `n`. La première ligne est valide. La seconde lève une erreur.
