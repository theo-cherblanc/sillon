---
id: js.bug.003
type: bug
topic: javascript
tags: [prototypes]
difficulty: 2
lines:
  - "const doubled = numbers.map((n) => {"
  - "  n * 2"
  - "})"
bugLine: 2
---

Quelle ligne fait que `doubled` ne contient pas les doubles ?

## Explication

Les accolades créent un bloc. `n * 2` est calculé, puis jeté, parce que rien n'est renvoyé. `doubled` devient une liste de `undefined`. Un `return`, ou l'absence d'accolades, garderait les produits.
