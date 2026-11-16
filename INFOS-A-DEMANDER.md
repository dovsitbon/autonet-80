# Autonet 80 : infos à demander au gérant

Tout ce qui est marqué « à remplir » ou « à confirmer » sur le site vient de cette liste. Une fois les réponses obtenues : mettre à jour `data/*.json` et `locales/*.json`, puis lancer `npm run contenu`.

## Le gérant et la station
- [ ] Son prénom (et s'il veut apparaître sur le site).
- [ ] L'histoire de la station : depuis quand, quel lien avec **ABCD Lavage** (réseau, franchise, enseigne ?).
- [ ] Vérifier si le réseau ABCD Lavage a déjà un site (lien à ajouter, charte à respecter ?).

## Équipements et prix (`data/prix.json`)
- [ ] Nombre de pistes haute pression et leur gabarit (SUV, utilitaires, camping-cars ?).
- [x] Portique à brosses (Istobal, hauteur max. 2,30 m) : vu sur les photos Google. Prix et durée à donner.
- [x] Programmes (panneau « Conseils d'utilisation ») : jantes, canon à mousse, lavage eau chaude adoucie, brosse, rinçage, cire, finition eau déminéralisée.
- [ ] Prix de chaque programme (prix à la minute, par jeton, montant minimum).
- [ ] Aspirateurs, nettoyeur sièges et moquettes, gonfleur (vus sur les photos) : nombre et prix. Y a-t-il aussi une machine à laver les tapis caoutchouc ?
- [ ] Contenu et prix du distributeur de produits.
- [ ] Valider les durées indicatives des 3 formules (5, 15 et 25 min).

## Paiement
- [ ] Carte bancaire à la borne : vue sur les photos. Pièces, billets, jetons, carte de lavage prépayée ?

## Professionnels et flottes
- [ ] Existe-t-il une offre pro (cartes prépayées, facture mensuelle, remise au volume) ?
- [ ] Qui répond aux demandes pro, et sous quel délai ?

## Horaires (`data/horaires.json`)
- [ ] Confirmer 24 h/24, 7 j/7, jours fériés compris. Fermetures en cas de gel ?
- [ ] Un autre numéro apparaît dans certains annuaires (06 95 53 73 56) : est-il encore valable ? Sinon, le faire corriger.

## Coordonnées et mentions légales (`data/site.json`)
- [ ] Email de contact.
- [ ] Raison sociale et **SIRET** : l'annuaire des entreprises indique la société LG2N (SIREN 793 574 187), enseigne AUTONET 80, au 424 rue Édouard Branly. À confirmer, avec le numéro d'établissement exact.
- [ ] Nom du directeur de la publication.
- [ ] Nom de domaine souhaité (par exemple autonet80.fr).

## Visuels
- [ ] Le logo (fichier vectoriel si possible). En attendant, le site utilise un logo provisoire : `public/logo.svg` et `app/icon.svg`.
- [ ] Photos : le site utilise 9 photos de la fiche Google (voir [PHOTOS-SOURCES.md](PHOTOS-SOURCES.md)). Faire valider leur usage, ou les remplacer par des photos prises sur place ([assets/A-PHOTOGRAPHIER.md](assets/A-PHOTOGRAPHIER.md)), surtout une photo de nuit pour le hero.
- [ ] Couleurs : l'enseigne actuelle est verte (ABCD LAVAGE), le site est en bleu eau. Garder le bleu ou passer au vert de l'enseigne ?
- [ ] Accord pour reprendre quelques vrais avis Google sur le site (`data/avis.json`).
