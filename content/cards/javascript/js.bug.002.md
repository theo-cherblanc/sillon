---
id: js.bug.002
type: bug
topic: javascript
tags: [types]
difficulty: 2
lines:
  - "if (ready = true) {"
  - "  start()"
  - "}"
bugLine: 1
---

Quelle ligne fait échouer l'intention de ce test ?

## Explication

`=` range `true` dans `ready` et le test est toujours vrai. Pour comparer, il faut `===`.
