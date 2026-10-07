# Design Sillon

Téléphone d'abord. L'écran est un HUD : fond bleu nuit, chiffres condensés, coins droits, file du jour et niveau. L'orange et la flamme restent ceux de Sillon. Le texte des cartes est en Roboto, le code en IBM Plex Mono, l'interface en Oswald (capitales par CSS).

La gamification est discrète. La série, la barre d'XP et le juste ou faux servent l'apprentissage. Ils ne prennent pas la place de la carte.

À éviter : dégradés violet ou bleu, emojis, ombres lourdes, cartes arrondies, animations sans rôle, illustrations décoratives.

Le signe `brand/source/flamme.svg` est dans la barre du haut de chaque écran, via `Mark`. C'est aussi le favicon et l'icône PWA. L'orange du logo est la seule couleur d'action : aplats, barres, coins HUD, onglet en cours.

L'écran est une colonne téléphone (`max-w-md`, `h-full`, `100%` sur `html` / `body` / `#root`). Le corps ne défile pas : le contenu défile. Les actions principales sont dans un bandeau bas, au-dessus des trois onglets. La session, la leçon et la bibliothèque n'ont pas d'onglets : Fermer est en haut, la suite est dans le bandeau.

Trois onglets seulement : Aujourd'hui, Progression, Réglages. Apprendre n'est pas un onglet.

## Palette

Le sombre est le défaut, posé sur `:root`. Le clair est `html[data-theme="light"]`. Le choix est dans Réglages, stocké sur cet appareil (`sillon.theme`). `theme-color` suit le fond : `#0f1923` ou `#ece8e1`. Les noms CSS sont en anglais.

L'accent est l'orange du logo, `#ff8a4c`, avec un texte navy `#0f1923`. Le vert et le rouge n'apparaissent qu'après une réponse, et dans la coloration des fences. Les barres, l'onglet actif et les coins HUD utilisent `--accent`.

```css
:root {
  --bg: #0f1923;
  --surface: #16202c;
  --border: #2c3d4f;
  --text: #ece8e1;
  --text-muted: #9aabbe;
  --accent: #ff8a4c;
  --accent-ink: #0f1923;
  --success: #5ddeaf;
  --danger: #ff6b7a;
  --code: #0b1219;
}

html[data-theme="light"] {
  --bg: #ece8e1;
  --surface: #f6f3ec;
  --border: #d4cfc4;
  --text: #0f1923;
  --text-muted: #3e4c5e;
  --accent: #ff8a4c;
  --accent-ink: #0f1923;
  --success: #0c6840;
  --danger: #b42318;
  --code: #e4dfd6;
}
```

Les classes Tailwind lisent ces variables : `bg`, `surface`, `line`, `ink`, `muted`, `accent`, `accent-ink`, `success`, `danger`, `code`.

| Rôle | Variable | Sombre | Clair |
| --- | --- | --- | --- |
| Fond | `--bg` | `#0f1923` | `#ece8e1` |
| Surface | `--surface` | `#16202c` | `#f6f3ec` |
| Bordure | `--border` | `#2c3d4f` | `#d4cfc4` |
| Texte | `--text` | `#ece8e1` | `#0f1923` |
| Texte atténué | `--text-muted` | `#9aabbe` | `#3e4c5e` |
| Accent | `--accent` / `--accent-ink` | `#ff8a4c` / `#0f1923` | `#ff8a4c` / `#0f1923` |
| Succès | `--success` | `#5ddeaf` | `#0c6840` |
| Erreur | `--danger` | `#ff6b7a` | `#b42318` |
| Code | `--code` | `#0b1219` | `#e4dfd6` |

`--accent` remplit le bouton principal, le chip actif, les barres et le trait d'onglet. `--accent-ink` est le texte sur cet aplat. L'orange n'est pas un texte courant : sur le papier clair il est à 1,9:1. `--code` est le fond des blocs et du code inline.

## Typographie

L'interface est en **Oswald** (500–700), toujours en capitales via `uppercase`. Le texte des cartes et des leçons est en **Roboto** (400 et 500). Le code est en **IBM Plex Mono** (400).

| Jeton | Taille | Graisse | Usage |
| --- | --- | --- | --- |
| kicker | 13px | 500 | Métadonnées d'écran, onglet, libellé de stat |
| `text-sm` / meta | 14px | 500 | Compteur, delay, chip |
| bouton | 16px | 500 | Boutons `plain`, `left`, `square` |
| corps | 16px | 400 | Body, champs |
| énoncé | 17px | 400 | Carte, leçon, explication |
| `text-sm` mono | 14px | 400 | Code, choix code, champ mono |
| lede / h2 leçon | 22–26px | 700 | « Bonne réponse. », titres de section |
| titre d'écran | 28px | 700 | `Screen` |
| stat | 32px | 700 | Série, record, comptes |
| display | 48px | 700 | XP de fin de journée |
| lobby | 96px | 700 | Nombre de cartes du jour |

Interligne : 1,45 pour le body, 1,55 pour l'énoncé, 1,15–1,3 pour les titres et les boutons. Tracking serré sur Oswald (`0,04em` à `0,08em`). Les chiffres d'XP, de série et de compteur sont tabulaires. La série s'affiche sur deux chiffres (`02`).

## Espacements, rayons, ombres, bordures

Échelle de 4 : 4, 8, 12, 16, 24, 32, plus 10 et 22 dans le châssis (`gap-2.5`, `px-5.5`). La colonne téléphone a 22px de marge. Deux blocs se suivent à 24px (`gap-6`). Les boutons empilés sont à 8px.

Rayon : 0 partout. Le bouton accent a les coins coupés (`clip-path`, 16px). La carte HUD (`Sheet`) a deux équerres orange, haut-gauche et bas-droite. Bordure : 1px `--border`, sauf le filet sous le header (2px `--accent`). Aucune ombre portée. L'aplat orange est réservé à l'action principale, aux chips actifs, aux barres et au trait de l'onglet en cours.

## Composants

### Écran

Header : flamme 28px (36px sur Aujourd'hui et fin de journée), titre, action à droite. Contenu : filet orange, puis défilement. Dock : pile au-dessus des onglets, hors du scroll.

### Carte de révision

Une `Sheet` : fond `--surface`, bord `--border`, équerres accent. L'énoncé est en 17px Roboto. Le compteur (« 2 sur 8 ») est en Oswald, `--text-muted`, au-dessus, à côté de la barre. Les choix sont des cases bordées, pas des lignes nues. La case choisie reçoit un trait intérieur de 4px à gauche. La réponse et l'explication remplacent l'énoncé dans le flux, sous « Bonne réponse. » / « Mauvaise réponse. ».

### Boutons

Tout le chrome bouton est Oswald, capitales.

- `accent` : aplat orange, coins coupés, 22px, `--accent-ink`. Actions d'écran : Réviser les cartes, Vérifier, Marquer comme lue, Retour.
- `plain` : contour `--border`, fond transparent, centré. Apprendre, Voir les cartes.
- `left` : même contour, aligné à gauche. Les quatre notes : « À revoir », « J'ai deviné », « J'ai hésité », « Je savais ». Aucune n'est orange.
- `square` : 44px, contour, pour + / − et réordonner.

Fermer est un `TextButton` : pas de bord, capitales, dans le header.

Après la correction, le choix (pas le bouton de note) prend la couleur du résultat, en texte, bordure et trait gauche, sans fond durable :

- bonne réponse : `--success`
- mauvaise réponse : `--danger`

Le rouge marque une réponse ratée, pas le choix de difficulté.

### Barre de progression

Si la file a 16 cartes ou moins : segments 8×16px, inclinés de 18°, `--accent` / `--line`. Au-delà : rail 8px `--surface`, remplissage `--accent`. Le texte « 2 sur 8 » est à côté, en Oswald.

### Barre d'XP

Même rail 8px. Le remplissage est `--accent`. Au-dessus : « Niveau n » à gauche, « xp / seuil » à droite. Elle grandit jusqu'au prochain seuil, puis le seuil change. Elle ne boucle pas.

### Série

Pas de pastille. Une plaque `Stat` : fond `--surface`, bord `--border`, valeur en Oswald 32px sur deux chiffres, libellé « Série ». Le record est une plaque voisine, même traitement.

### Badge de succès

Plaque 2 colonnes. Obtenu : bord `--accent`, fond orange à 16 %. Pas encore : bord `--line`, texte `--text-muted`, kicker « Verrouillé ». Kicker « Débloqué » une fois obtenu. Pas de pastille.

### Chip

Oswald 14px, capitales, 44px de haut. Actif : aplat `--accent`, texte `--accent-ink`. Inactif : contour `--border`.

### Bloc de code

Fond `--code`, IBM Plex Mono 14px, padding 12px 14px. Défilement horizontal. Fences seulement : Prism colore les jetons (mots-clés et balises `--accent`, chaînes et nombres `--success`, commentaires et ponctuation `--text-muted`, le reste `--text`). Pas de HTML injecté. Le code dans une phrase reste sans couleur, même police, 0,92em, fond `--code`, padding 0 4px.

## Animation

| Jeton | Valeur | Usage |
| --- | --- | --- |
| `arrive` | 180ms `cubic-bezier(0.16, 1, 0.3, 1)` | L'écran monte de 10px |
| `card` | 160ms, même courbe | La carte suivante fait la même chose, plus court |
| `hit` | 280ms, même courbe | Flash de fond sur le choix noté |
| barre | 280ms, même courbe | Largeur d'XP |
| bouton | 140ms `linear` | Couleur au survol / pressé |

On anime l'arrivée d'un écran, l'arrivée d'une carte, le flash juste ou faux, et l'allongement de la barre d'XP.

On n'anime pas les listes, les réglages, ni quoi que ce soit si `prefers-reduced-motion: reduce`. Pas de rebond, pas de boucle, pas d'échelle au clic.

## Accessibilité

- Texte courant : contraste d'au moins 4,5:1. Le plus juste ici est le rouge d'erreur en thème clair, à 5,4:1. L'orange sur crème n'est pas un texte : il sert d'aplat (navy sur orange, 7,6:1).
- Juste ou faux s'accompagne d'une phrase (« Bonne réponse. », « Mauvaise réponse. »).
- Cible tactile d'au moins 44px.
- Focus clavier : outline 2px `--text`, décalé de 2px.
- Le nom accessible d'un bouton est son libellé visible.
- `prefers-reduced-motion` coupe les trois animations et les transitions de barre et de bouton.
- Le thème est `data-theme` sur `<html>`. Sans attribut, le sombre s'applique.
