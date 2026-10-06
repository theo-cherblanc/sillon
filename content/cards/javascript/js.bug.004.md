---
id: js.bug.004
type: bug
topic: javascript
tags: [async]
difficulty: 2
lines:
  - "function load() {"
  - "const value = await fetch(\"/api\")"
  - "}"
bugLine: 2
---

Quelle ligne empêche ce programme de démarrer ?

## Explication

`await` ne s'écrit que dans une fonction `async`. `load` est une fonction ordinaire, donc la seconde ligne est refusée avant même l'appel.
