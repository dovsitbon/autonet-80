# Autonet 80 by ABCD Lavage

Site vitrine de la station de lavage Autonet 80, 424 rue Édouard Branly, 80450 Camon (près d'Amiens), ouverte 24 h/24. Next.js 16, Tailwind 4, Motion (Framer Motion). Français (défaut) et anglais, URLs `/fr` et `/en`.

- `npm run dev` : développement
- `npm run media` : prépare les photos (`assets/` → `public/media/`, `data/media-sizes.json`, `public/og.jpg`)
- `npm run affichette` : affichette A5 avec QR code (`public/affichette-autonet-80-a5.pdf`)
- `npm run contenu` : régénère `CONTENU.md`

Données : `data/prix.json`, `data/horaires.json`, `data/annonces.json`, `data/avis.json`, `data/photos.json`, `data/site.json`. Textes : `locales/fr.json`, `locales/en.json`.

Contact : le formulaire ouvre WhatsApp (wa.me/33784769604) avec un récapitulatif. Rien n'est stocké, pas de base de données.

Voir `CONTENU.md`, `INFOS-A-DEMANDER.md` et `assets/A-PHOTOGRAPHIER.md`.
