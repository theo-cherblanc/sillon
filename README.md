# Sillon

PWA personnelle de répétition espacée, téléphone d'abord. Les cartes et les mini-leçons sont en français. La mémoire reste sur l'appareil (IndexedDB). Un compte optionnel recopie cette mémoire sur Supabase.

Prod : [sillon-sigma.vercel.app](https://sillon-sigma.vercel.app)

La charte (palette HUD, typo, composants) est dans [DESIGN.md](DESIGN.md).

## Lancer

Node 22. Copier `.env.example` vers `.env` si tu veux le sync ; sans ça, l'app tourne en local seul.

```sh
npm install
npm run dev
```

Le service worker ne s'enregistre pas en dev.

```sh
npm test
npm run build
```

Les tests passent par `node --experimental-strip-types`. `tsc` tourne dans `npm run build`.

## Contenu

Les cartes sont dans `content/cards/`, les leçons dans `content/lessons/`. Après un changement :

```sh
npm run content
```

Ça valide le paquet et écrit `src/shared/content/cards.json` et `lessons.json`. Une carte avec `lesson_id` n'entre dans la file du jour qu'une fois la leçon marquée lue. Les cartes sans leçon restent libres.

## Sync

`VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` (clé anon seulement, jamais la secret). Réglages : compte, export, import.
