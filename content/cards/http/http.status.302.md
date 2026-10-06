---
id: http.status.302
type: mcq
topic: http
tags: [http, status]
difficulty: 2
choices:
  - { id: a, text: "une redirection temporaire : on garde l'ancienne adresse" }
  - { id: b, text: "une redirection permanente" }
  - { id: c, text: "une erreur du client" }
correctChoiceId: a
---

Que fait un statut `302`, comparé à un `301` ?

## Explication

`302 Found` envoie vers une autre adresse pour cette fois. L'adresse d'origine reste la bonne pour plus tard. `301` dit au contraire que le déménagement est définitif.
