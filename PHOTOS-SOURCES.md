# Sources des images

Relevé du 16 novembre 2026. **9 photos réelles de la station, 1 illustration libre de droits.**

## Photos réelles de la station (9)

Source : fiche Google Maps « Autonet 80 by ABCD LAVAGE », 424 rue Édouard Branly, 80450 Camon (onglet Photos), récupérées en haute résolution. Ce sont des photos publiées sur la fiche (propriétaire ou contributeurs Google).

**Droits :** Google ne donne pas de licence de réutilisation pour ces photos. Leur usage sur le site est à **faire valider par le gérant** (ses propres photos) ou à remplacer par des photos prises sur place (voir `assets/A-PHOTOGRAPHIER.md`).

| Fichier (`public/media/`) | Emplacement sur le site | Ce qu'on voit | Retouche |
|---|---|---|---|
| `hero/pistes-abcd-lavage.jpg` | Hero, image de partage (og.jpg) | Les pistes sous l'auvent vert ABCD LAVAGE | — |
| `facade/portique-abcd-lavage.jpg` | Page « Station de lavage à Camon » | Le portique d'entrée ABCD LAVAGE et une piste | — |
| `facade/ancienne-enseigne-lavage-auto.jpg` | Tuile et bloc « Pros et flottes » | Vue d'ensemble de la station, ancienne enseigne Autonet « Lavage auto 7j/7 24/24 » | Plaque d'immatriculation floutée |
| `pistes/canon-a-mousse-piste.jpg` | Bloc « Haute pression », page « 24 h/24 près d'Amiens » | Une voiture sous la mousse active, sur une piste | Plaque couverte de mousse, illisible |
| `pistes/mousse-active-carrosserie.jpg` | Tuile « Haute pression » | Carrosserie couverte de mousse | Recadrage |
| `pistes/portique-brosses.jpg` | Tuile « Portique » | Le portique à brosses en action | Recadrage |
| `pistes/borne-de-paiement-portique.jpg` | (réserve, emplacement `portique`) | La borne de paiement par carte, portique Istobal, hauteur max. 2,30 m | — |
| `aspirateurs/aspirateurs-gonfleur.jpg` | Tuile « Aspirateurs », bloc « Intérieur » | Aspirateurs, gonfleur, nettoyeur sièges et moquettes, distributeur de lingettes | Recadrage |
| `tapis/nettoyeur-sieges-moquettes.jpg` | Tuile « Sièges et moquettes » | Le nettoyeur sièges et moquettes | Recadrage de la photo précédente |

Écartées : 4 photos remontées avec la fiche mais sans rapport avec la station (un kebab, une boulangerie, un restaurant, un bâtiment), 3 doublons, 1 photo de travers. Le logo affiché sur PagesJaunes pour cette adresse est celui d'Éléphant Bleu : il n'a pas été utilisé.

## Illustration libre de droits (1)

| Fichier | Emplacement | Source | Auteur | Licence |
|---|---|---|---|---|
| `produits/microfibre-unsplash-gogonano.jpg` | Tuile « Produits » | https://unsplash.com/photos/qy20XW0tSlw | GoGoNano | [Licence Unsplash](https://unsplash.com/license) : usage commercial autorisé, sans attribution obligatoire |

Elle porte la mention « Illustration » sur le site et son texte alternatif commence par « Illustration ». Elle n'est jamais présentée comme une photo de la station.

## Remplacer une image

Déposer la nouvelle photo dans `assets/<dossier>/`, l'ajouter à `PICKS` dans `scripts/media.mjs`, lancer `npm run media`, puis mettre son chemin dans `data/photos.json` et son texte alternatif dans `locales/*.json` (clé `alt`).
