# Photos à prendre sur place

Aucune photo n'a été trouvée (pas de fichier `autonet_*.jpg` dans Téléchargements) : le site affiche des emplacements discrets à la place. Uniquement de vraies photos de la station ; pas de visages de clients, pas de plaques lisibles.

| Emplacement (`data/photos.json`) | Dossier | Photo | Conseil |
|---|---|---|---|
| `hero` | `assets/hero/` | La station de nuit, éclairée, pistes vides ou une voiture sous la mousse | Paysage, à l'heure bleue (juste après le coucher du soleil). La plus belle photo du site. |
| `facade` | `assets/facade/` | L'entrée vue de la rue, avec l'enseigne | Paysage, de jour, enseigne lisible. Aide aussi à reconnaître la station. |
| `pistes` | `assets/pistes/` | Une piste haute pression en action (jet, mousse) | Paysage ou carré, de près, gouttes visibles. |
| `aspirateurs` | `assets/aspirateurs/` | La rangée d'aspirateurs | Paysage. |
| `tapis` | `assets/tapis/` | La machine à tapis, un tapis propre qui en sort | Carré. |
| `produits` | `assets/produits/` | Le distributeur de produits | Portrait ou carré. |
| `equipe` | `assets/equipe/` | Le gérant devant la station (s'il le souhaite) | Facultatif. |

Ensuite : déposer les fichiers dans les dossiers, les ajouter à `PICKS` dans `scripts/media.mjs`, lancer `npm run media`, puis renseigner les chemins dans `data/photos.json` et les textes alternatifs dans `locales/*.json` (clé `alt`).
