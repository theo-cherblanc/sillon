---
id: http.status.302
type: mcq
topic: http
tags: [http, status]
difficulty: 2
choices:
  - { id: a, text: "`Found`. La ressource a changé d'adresse, mais seulement pour cette fois." }
  - { id: b, text: "`Moved Permanently`. La ressource a changé d'adresse pour de bon." }
  - { id: c, text: "`Bad Request`. Le serveur n'a pas compris la requête." }
correctChoiceId: a
---

Que signifie le statut HTTP `302` ?

## Explication

Le client va ailleurs pour cette requête. L'adresse d'origine reste la bonne pour plus tard. `301` dit au contraire que le déménagement est définitif.
