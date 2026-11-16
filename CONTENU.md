# Autonet 80 by ABCD Lavage : contenu du site

Tous les textes du site, en français et en anglais, avec les prix et les horaires, pour validation avec le gérant. Les corrections se font dans `locales/fr.json` et `locales/en.json` ; prix, horaires, annonces, avis et photos dans `data/*.json`. Ce fichier se régénère avec `npm run contenu`.

Aucun chiffre inventé : **aucun prix n'est renseigné** (le site affiche « Prix à confirmer ») tant que la station ne les a pas donnés. Les durées sont des repères **à valider**. La note Google (4.5/5, 91 avis) est celle relevée le 2026-11-10. Aucun avis n'est cité : le site reprend seulement les thèmes qui reviennent (prix, qualité du lavage, brosse, machines, tapis, haute pression).

Voir aussi : [INFOS-A-DEMANDER.md](INFOS-A-DEMANDER.md) et [assets/A-PHOTOGRAPHIER.md](assets/A-PHOTOGRAPHIER.md).

## Titres du hero : 3 propositions

1. **Une voiture propre, à toute heure** *(A clean car, any time of day)* : retenu sur le site
2. **Lavez quand vous voulez.** *(Wash whenever you like.)*
3. **Brillante en quelques minutes.** *(Gleaming in minutes.)*

## Prix (`data/prix.json`)

### Extérieur, sur les pistes / Outside, in the wash bays

| Programme | Durée | Prix |
|---|---|---|
| **Haute pression : eau chaude adoucie + savon**<br>*High pressure: softened hot water + soap* | par tranche de temps (à valider) | à remplir |
| **Lance jantes**<br>*Wheel lance* | inclus dans le temps de piste (à valider) | à remplir |
| **Canon à mousse active**<br>*Active snow foam cannon* | inclus dans le temps de piste (à valider) | à remplir |
| **Brosse moussante**<br>*Foaming brush* | inclus dans le temps de piste (à valider) | à remplir |
| **Cire, puis finition à l'eau déminéralisée**<br>*Wax, then demineralised-water finish* | inclus dans le temps de piste (à valider) | à remplir |
| **Portique de lavage à brosses (hauteur max. 2,30 m)**<br>*Brush wash gantry (max. height 2.30 m)* | env. 6 à 10 min (à valider) | à remplir |

### Intérieur / Inside the car

| Programme | Durée | Prix |
|---|---|---|
| **Aspirateur**<br>*Vacuum* | par tranche de temps (à valider) | à remplir |
| **Nettoyeur sièges et moquettes**<br>*Seat and carpet cleaner* | par tranche de temps (à valider) | à remplir |
| **Gonfleur**<br>*Tyre inflator* | — | à remplir |

### Produits et jetons / Products and tokens

| Programme | Durée | Prix |
|---|---|---|
| **Distributeur : lingettes humidifiées, parfums**<br>*Vending machine: wet wipes, air fresheners* | — | à remplir |
| **Jetons ou carte de lavage**<br>*Tokens or wash card* | — | à remplir · **équipement à confirmer** |

### Comparateur : 3 formules

| Formule | Accroche | Durée | Budget | Programmes inclus |
|---|---|---|---|---|
| **Rapide** / Quick | Le coup de propre de la semaine. | env. 5 min (à valider) | à remplir | Haute pression : eau chaude adoucie + savon |
| **Complet** / Full | Carrosserie et habitacle, le bon équilibre. | env. 15 min (à valider) | à remplir | Haute pression : eau chaude adoucie + savon, Canon à mousse active, Brosse moussante, Aspirateur |
| **Premium** / Premium | Le grand soin, tapis compris. | env. 25 min (à valider) | à remplir | Haute pression : eau chaude adoucie + savon, Lance jantes, Canon à mousse active, Brosse moussante, Cire, puis finition à l'eau déminéralisée, Aspirateur, Nettoyeur sièges et moquettes |

## Horaires (`data/horaires.json`)

- lundi : 00:00 – 24:00
- mardi : 00:00 – 24:00
- mercredi : 00:00 – 24:00
- jeudi : 00:00 – 24:00
- vendredi : 00:00 – 24:00
- samedi : 00:00 – 24:00
- dimanche : 00:00 – 24:00

**À confirmer** : ouvert 24 h/24, 7 j/7, jours fériés compris.

## Bandeau d'annonces (`data/annonces.json`)

- **Par défaut** : Ouvert 24 h/24, 7 j/7, jours fériés compris. *(Open 24 hours a day, 7 days a week, bank holidays included.)*

## Textes du site

Chaque ligne : clé, français, anglais. Les textes marqués **à valider** demandent une confirmation de la station.

### meta

| Clé | Français | English | |
|---|---|---|---|
| `meta.title` | Station de lavage 24 h/24 à Camon, près d'Amiens | Autonet 80 | 24-hour car wash in Camon, near Amiens | Autonet 80 | |
| `meta.description` | Station de lavage auto ouverte 24 h/24, 7 j/7 à Camon, à 10 minutes d'Amiens : haute pression, portique, aspirateurs, nettoyeur sièges et moquettes. 4,5/5 sur Google. | Self-service car wash open 24/7 in Camon, 10 minutes from Amiens: high-pressure jet wash, brush gantry, vacuums, seat and carpet cleaner. Rated 4.5/5 on Google. | |
| `meta.ogAlt` | Autonet 80, station de lavage 24 h/24 à Camon | Autonet 80, 24-hour car wash in Camon | |

### nav

| Clé | Français | English | |
|---|---|---|---|
| `nav.services` | Services | Services | |
| `nav.prix` | Prix | Prices | |
| `nav.pros` | Professionnels | Business | |
| `nav.infos` | Infos | Info | |
| `nav.itineraire` | Itinéraire | Directions | |
| `nav.call` | Appeler | Call | |
| `nav.contact` | Nous écrire | Message us | |
| `nav.lang` | Langue | Language | |
| `nav.menu` | Menu | Menu | |
| `nav.close` | Fermer le menu | Close menu | |
| `nav.home` | Autonet 80, accueil | Autonet 80, home | |
| `nav.skip` | Aller au contenu | Skip to content | |

### intro

| Clé | Français | English | |
|---|---|---|---|
| `intro.skip` | Passer | Skip | |

### announce

| Clé | Français | English | |
|---|---|---|---|
| `announce.close` | Fermer le bandeau | Close banner | |

### status

| Clé | Français | English | |
|---|---|---|---|
| `status.always` | Ouvert maintenant, 24 h/24 | Open now, 24 hours | |
| `status.open` | Ouvert maintenant | Open now | |
| `status.until` | jusqu'à {time} | until {time} | |
| `status.closed` | Fermé | Closed | |
| `status.reopens` | réouverture {day} à {time} | reopens {day} at {time} | |
| `status.today` | aujourd'hui | today | |
| `status.tomorrow` | demain | tomorrow | |

### rating

| Clé | Français | English | |
|---|---|---|---|
| `rating.label` | {value}/5 sur Google | {value}/5 on Google | |
| `rating.count` | {count} avis | {count} reviews | |
| `rating.asOf` | Note Google relevée en {date} | Google rating as of {date} | |

### slot

| Clé | Français | English | |
|---|---|---|---|
| `slot.todo` | Photo à venir | Photo coming soon | |
| `slot.hero` | La station, de nuit | The station at night | |
| `slot.facade` | L'entrée de la station | The station entrance | |
| `slot.pistes` | Les pistes de lavage | The wash bays | |
| `slot.aspirateurs` | Les aspirateurs | The vacuums | |
| `slot.tapis` | Le nettoyeur sièges et moquettes | The seat and carpet cleaner | |
| `slot.produits` | Le distributeur | The vending machine | |
| `slot.equipe` | L'équipe | The team | |
| `slot.station` | La station | The station | |
| `slot.portique` | Le portique | The gantry | |
| `slot.illustration` | Illustration | Illustration | |

### hero

| Clé | Français | English | |
|---|---|---|---|
| `hero.eyebrow` | Station de lavage · 24 h/24 · Camon | Car wash · 24 hours · Camon | |
| `hero.title` | Une voiture propre, à toute heure | A clean car, any time of day | |
| `hero.lead` | Haute pression, portique à brosses, aspirateurs et nettoyeur de sièges, en libre-service jour et nuit, à dix minutes du centre d'Amiens. | High-pressure jet wash, brush gantry, vacuums and a seat cleaner, self-service day and night, ten minutes from central Amiens. | |
| `hero.itineraire` | Itinéraire | Directions | |
| `hero.prix` | Voir les prix | See prices | |

### tiles

| Clé | Français | English | |
|---|---|---|---|
| `tiles.eyebrow` | Sur place | On site | |
| `tiles.title` | Tout pour laver dedans comme dehors | Everything to clean inside and out | |
| `tiles.from` | à partir de {price} | from {price} | |
| `tiles.tbc` | Prix à confirmer | Price to be confirmed | |
| `tiles.confirm` | Équipement à confirmer | Equipment to be confirmed | |
| `tiles.items.hp.title` | Haute pression | High pressure | |
| `tiles.items.hp.text` | Jantes, mousse, lavage à l'eau chaude, brosse, rinçage, cire et finition. | Wheels, foam, hot-water wash, brush, rinse, wax and finish. | |
| `tiles.items.rouleaux.title` | Portique | Portique | **à valider (rouleaux ou portique ?)** |
| `tiles.items.rouleaux.text` | Le portique à brosses lave la voiture pendant que vous patientez. Hauteur max. 2,30 m. | The brush gantry washes the car while you wait. Max. height 2.30 m. | **à valider (rouleaux ou portique ?)** |
| `tiles.items.aspi.title` | Aspirateurs | Vacuums | |
| `tiles.items.aspi.text` | Puissants, avec des embouts pour les sièges et les recoins. | Powerful, with nozzles for seats and tight corners. | |
| `tiles.items.tapis.title` | Sièges et moquettes | Seats and carpets | |
| `tiles.items.tapis.text` | Un nettoyeur pour les sièges, les moquettes et les tapis en tissu. | A cleaner for seats, carpets and fabric mats. | |
| `tiles.items.produits.title` | Produits | Products | **à valider (contenu du distributeur)** |
| `tiles.items.produits.text` | Lingettes humidifiées et parfums au distributeur. | Wet wipes and air fresheners from the vending machine. | **à valider (contenu du distributeur)** |
| `tiles.items.pros.title` | Pros et flottes | Business fleets | **à valider (offre pro)** |
| `tiles.items.pros.text` | Utilitaires, taxis, VTC, auto-écoles : parlons de vos véhicules. | Vans, taxis, ride-hailing, driving schools: let's talk. | **à valider (offre pro)** |

### strip

| Clé | Français | English | |
|---|---|---|---|
| `strip.label` | Les essentiels | The essentials | |
| `strip.items.0.title` | 24 h/24 | 24 hours | |
| `strip.items.0.text` | Lavez tôt le matin, le soir ou en pleine nuit. | Wash early in the morning, in the evening or at night. | |
| `strip.items.1.title` | 7 j/7 | 7 days | |
| `strip.items.1.text` | Dimanches et jours fériés compris. | Sundays and bank holidays included. | |
| `strip.items.2.title` | Paiement CB | Card payment | **à valider (moyens de paiement)** |
| `strip.items.2.text` | Carte bancaire à la borne, sans rendez-vous. | Pay by card at the pay station, no booking needed. | **à valider (moyens de paiement)** |
| `strip.items.3.title` | Grandes pistes | Wide bays | |
| `strip.items.3.text` | Assez de place pour les SUV et les utilitaires. | Plenty of room for SUVs and vans. | |

### prix

| Clé | Français | English | |
|---|---|---|---|
| `prix.eyebrow` | Prix | Prices | |
| `prix.title` | Des prix clairs, affichés avant de laver | Clear prices, shown before you wash | |
| `prix.lead` | En libre-service, vous payez le temps que vous utilisez. Les montants ci-dessous sont ceux affichés sur les bornes. | It's self-service: you pay for the time you use. The amounts below match the ones displayed on the pay stations. | |
| `prix.head.programme` | Programme | Programme | |
| `prix.head.duree` | Durée | Time | |
| `prix.head.prix` | Prix | Price | |
| `prix.from` | à partir de {price} | from {price} | |
| `prix.price` | {price} | {price} | |
| `prix.tbc` | Prix à confirmer | Price to be confirmed | |
| `prix.dash` | — | — | |
| `prix.note` | Prix TTC relevés le {date}. En cas d'écart, le tarif affiché sur la borne fait foi. | Prices incl. VAT as of {date}. If they differ, the price shown on the pay station applies. | |
| `prix.compare.eyebrow` | Formules | Options | |
| `prix.compare.title` | Trois façons de laver | Three ways to wash | |
| `prix.compare.lead` | Pas de forfait à acheter : ce sont des repères pour savoir quoi enchaîner et combien de temps prévoir. | Nothing to buy upfront: these are simple guides to what to combine and how long to allow. | |
| `prix.compare.duration` | Durée | Time | |
| `prix.compare.budget` | Budget | Budget | |
| `prix.compare.cta` | Itinéraire | Directions | |
| `prix.compare.notIncluded` | non inclus | not included | |

### blocks

| Clé | Français | English | |
|---|---|---|---|
| `blocks.hp.eyebrow` | Carrosserie | Bodywork | |
| `blocks.hp.title` | La haute pression, sans rien laisser au hasard | High pressure, nothing left to chance | |
| `blocks.hp.text` | Lance jantes, canon à mousse, lavage à l'eau chaude adoucie, brosse moussante, rinçage, cire puis finition à l'eau déminéralisée pour sécher sans traces. Les pistes sont assez larges pour tourner autour de la voiture. | Wheel lance, snow foam cannon, wash with softened hot water, foaming brush, rinse, wax, then a demineralised-water finish so it dries without marks. The bays are wide enough to walk all the way round the car. | |
| `blocks.hp.cta` | Voir les prix | See prices | |
| `blocks.interieur.eyebrow` | Habitacle | Interior | |
| `blocks.interieur.title` | L'intérieur aussi : aspirateurs, sièges et moquettes | The inside too: vacuums, seats and carpets | |
| `blocks.interieur.text` | Des aspirateurs puissants, un nettoyeur pour les sièges et les moquettes, un gonfleur pour les pneus et des lingettes au distributeur. Pratique avant un long trajet, après la plage ou à la fin de l'hiver. | Powerful vacuums, a seat and carpet cleaner, a tyre inflator and wipes from the vending machine. Handy before a long drive, after the beach or at the end of winter. | |
| `blocks.interieur.cta` | Itinéraire | Directions | |
| `blocks.pros.eyebrow` | Professionnels | Business | **à valider (offre pro)** |
| `blocks.pros.title` | Pour les flottes et les utilitaires | For fleets and vans | **à valider (offre pro)** |
| `blocks.pros.text` | Artisans, sociétés de location, taxis, VTC, auto-écoles : vos véhicules doivent rester présentables. Écrivez-nous le nombre de véhicules et la fréquence de lavage, on vous répond avec une proposition adaptée. | Tradespeople, rental companies, taxis, ride-hailing drivers, driving schools: your vehicles need to look the part. Tell us how many vehicles and how often, and we'll come back with a suitable offer. | **à valider (offre pro)** |
| `blocks.pros.cta` | Nous contacter | Contact us | **à valider (offre pro)** |

### reviews

| Clé | Français | English | |
|---|---|---|---|
| `reviews.eyebrow` | Avis Google | Google reviews | |
| `reviews.title` | Ce que nos clients remarquent | What our customers notice | |
| `reviews.themes.0` | Les prix | The prices | |
| `reviews.themes.1` | La qualité du lavage | Wash quality | |
| `reviews.themes.2` | La brosse | The brush | |
| `reviews.themes.3` | Les machines | The machines | |
| `reviews.themes.4` | Les tapis | The mats | |
| `reviews.themes.5` | La haute pression | High pressure | |
| `reviews.soon` | Les avis de nos clients seront publiés ici, avec leur accord. | Customer reviews will be shown here, with their permission. | |
| `reviews.cta` | Lire les avis sur Google | Read the reviews on Google | |

### infos

| Clé | Français | English | |
|---|---|---|---|
| `infos.eyebrow` | Infos pratiques | Practical info | |
| `infos.title` | Venir à la station | Getting here | |
| `infos.address` | Adresse | Address | |
| `infos.hours` | Horaires | Opening hours | |
| `infos.always` | Tous les jours, 24 h/24 | Every day, 24 hours | |
| `infos.closures` | Fermetures annoncées | Announced closures | |
| `infos.access` | Accès et stationnement | Access and parking | |
| `infos.accessText` | Dans la zone d'activités de Camon, à l'est d'Amiens. Accès direct en voiture, places d'attente devant les pistes et emplacements dédiés aux aspirateurs. | In the Camon business park, east of Amiens. Direct access by car, waiting space in front of the bays and dedicated spots at the vacuums. | **à valider (accès, stationnement)** |
| `infos.phone` | Téléphone | Phone | |
| `infos.whatsapp` | WhatsApp | WhatsApp | |
| `infos.mapTitle` | Carte : Autonet 80, 424 rue Édouard Branly à Camon | Map: Autonet 80, 424 rue Édouard Branly, Camon | |
| `infos.directions` | Itinéraire | Directions | |

### faq

| Clé | Français | English | |
|---|---|---|---|
| `faq.eyebrow` | Questions fréquentes | FAQ | |
| `faq.title` | Avant de venir | Before you come | |
| `faq.items.0.q` | La station est-elle vraiment ouverte la nuit ? | Is the station really open at night? | |
| `faq.items.0.a` | Oui, Autonet 80 est en libre-service 24 h/24 et 7 j/7, dimanches et jours fériés compris. Si une piste est fermée pour entretien, nous l'annonçons en haut de ce site. | Yes, Autonet 80 is self-service 24 hours a day, 7 days a week, Sundays and bank holidays included. If a bay is closed for maintenance, we post it at the top of this site. | |
| `faq.items.1.q` | Comment paie-t-on ? | How do I pay? | **à valider (moyens de paiement)** |
| `faq.items.1.a` | Directement à la borne de paiement, par carte bancaire, sans rendez-vous. Le tarif est affiché sur chaque borne avant le lancement. Pièces et jetons : à confirmer. | At the pay station, by bank card, no booking needed. The price is shown on each pay station before you start. Coins and tokens: to be confirmed. | **à valider (moyens de paiement)** |
| `faq.items.2.q` | Combien de temps faut-il prévoir ? | How long should I allow? | **à valider (durées)** |
| `faq.items.2.a` | Comptez environ 5 minutes pour un passage rapide à la haute pression, 15 minutes pour un lavage complet avec aspirateur, et 25 minutes si vous nettoyez aussi les sièges et les moquettes. | About 5 minutes for a quick high-pressure wash, 15 minutes for a full wash with vacuuming, and 25 minutes if you also clean the seats and carpets. | **à valider (durées)** |
| `faq.items.3.q` | Peut-on laver un utilitaire ou un camping-car ? | Can I wash a van or a motorhome? | **à valider (gabarits acceptés)** |
| `faq.items.3.a` | Les pistes haute pression sont signalées à 3 m de hauteur et conviennent aux SUV et aux utilitaires. Le portique à brosses accepte les véhicules jusqu'à 2,30 m. Pour un véhicule plus haut ou très long, appelez-nous avant de venir. | The high-pressure bays are signed at 3 m high and suit SUVs and vans. The brush gantry takes vehicles up to 2.30 m. For anything taller or very long, call us before you come. | **à valider (gabarits acceptés)** |
| `faq.items.4.q` | Une machine ne fonctionne pas, que faire ? | A machine isn't working. What should I do? | |
| `faq.items.4.a` | Signalez-le en un clic avec le formulaire de contact (motif « Panne d'une machine ») ou par WhatsApp, en précisant la piste ou la borne. Nous intervenons au plus vite. | Report it in one click with the contact form (reason: “Machine fault”) or on WhatsApp, saying which bay or pay station. We'll sort it out as quickly as we can. | |
| `faq.items.5.q` | Proposez-vous des tarifs pour les professionnels ? | Do you have rates for businesses? | **à valider (offre pro)** |
| `faq.items.5.a` | Oui, pour les entreprises qui lavent régulièrement plusieurs véhicules. Indiquez-nous votre flotte et la fréquence souhaitée, nous vous faisons une proposition (offre à confirmer). | Yes, for companies that regularly wash several vehicles. Tell us about your fleet and how often you need it, and we'll make you an offer (to be confirmed). | **à valider (offre pro)** |

### contact

| Clé | Français | English | |
|---|---|---|---|
| `contact.eyebrow` | Contact | Contact | |
| `contact.title` | Une question, une panne, une flotte ? | A question, a fault, a fleet? | |
| `contact.lead` | Votre message part sur WhatsApp, bien présenté. Pour une urgence, appelez directement. | Your message goes to WhatsApp, neatly laid out. For anything urgent, just call. | |
| `contact.motif` | Motif | Reason | |
| `contact.motifs.question` | Une question | A question | |
| `contact.motifs.panne` | Panne d'une machine | Machine fault | |
| `contact.motifs.pros` | Professionnels et flottes | Business and fleets | |
| `contact.machine` | Quelle machine ? | Which machine? | |
| `contact.machinePlaceholder` | Ex. : piste 2, aspirateur de gauche, monnayeur… | E.g. bay 2, left-hand vacuum, coin slot… | |
| `contact.fleet` | Nombre de véhicules | Number of vehicles | |
| `contact.fleetPlaceholder` | Ex. : 6 utilitaires… | E.g. 6 vans… | |
| `contact.message` | Message | Message | |
| `contact.messagePlaceholder` | Décrivez votre demande en quelques mots… | Tell us what you need in a few words… | |
| `contact.name` | Nom | Name | |
| `contact.phone` | Téléphone | Phone | |
| `contact.send` | Envoyer sur WhatsApp | Send on WhatsApp | |
| `contact.call` | Appeler | Call | |
| `contact.required` | Champ obligatoire | Required | |
| `contact.phoneInvalid` | Numéro de téléphone incomplet | Phone number looks incomplete | |
| `contact.sent` | WhatsApp s'est ouvert avec votre message. Il ne reste plus qu'à l'envoyer. | WhatsApp has opened with your message. Just press send. | |
| `contact.privacy` | Vos coordonnées servent uniquement à vous répondre. | Your details are only used to reply to you. | |
| `contact.wa.title` | Demande depuis le site Autonet 80 | Message from the Autonet 80 website | |
| `contact.wa.motif` | Motif | Reason | |
| `contact.wa.machine` | Machine | Machine | |
| `contact.wa.fleet` | Véhicules | Vehicles | |
| `contact.wa.message` | Message | Message | |
| `contact.wa.name` | Nom | Name | |
| `contact.wa.phone` | Téléphone | Phone | |

### footer

| Clé | Français | English | |
|---|---|---|---|
| `footer.tagline` | Station de lavage en libre-service, ouverte 24 h/24 à Camon, près d'Amiens. | Self-service car wash, open 24 hours in Camon, near Amiens. | |
| `footer.visit` | La station | The station | |
| `footer.contact` | Contact | Contact | |
| `footer.pages` | À découvrir | Explore | |
| `footer.legal` | Mentions légales | Legal notice | |
| `footer.rights` | Tous droits réservés. | All rights reserved. | |
| `footer.by` | by ABCD Lavage | by ABCD Lavage | |

### pages

| Clé | Français | English | |
|---|---|---|---|
| `pages.camon.slugLabel` | Station de lavage à Camon | Car wash in Camon | |
| `pages.camon.metaTitle` | Station de lavage à Camon (80450) | Autonet 80 | Car wash in Camon (80450) | Autonet 80 | |
| `pages.camon.metaDescription` | Autonet 80, la station de lavage auto de Camon : haute pression, portique, aspirateurs, nettoyeur sièges et moquettes. Ouvert 24 h/24, 424 rue Édouard Branly. | Autonet 80, the self-service car wash in Camon: high-pressure jet wash, brush gantry, vacuums, seat and carpet cleaner. Open 24/7, 424 rue Édouard Branly. | |
| `pages.camon.eyebrow` | Camon · 80450 | Camon · 80450 | |
| `pages.camon.h1` | Station de lavage à Camon | Car wash in Camon | |
| `pages.camon.intro` | Autonet 80 est la station de lavage en libre-service de Camon, rue Édouard Branly. Vous lavez vous-même, à votre rythme, avec des machines entretenues et des prix affichés. | Autonet 80 is the self-service car wash in Camon, on rue Édouard Branly. You wash the car yourself, at your own pace, with well-kept machines and clearly displayed prices. | |
| `pages.camon.sections.0.h` | Ce que vous trouvez sur place | What you'll find on site | |
| `pages.camon.sections.0.p` | Des pistes de lavage haute pression avec lance jantes, canon à mousse, brosse moussante, rinçage, cire et finition à l'eau déminéralisée, un portique à brosses, des aspirateurs, un nettoyeur sièges et moquettes, un gonfleur et un distributeur de lingettes et de parfums. | High-pressure wash bays with wheel lance, snow foam, foaming brush, rinse, wax and a demineralised-water finish, a brush gantry, vacuums, a seat and carpet cleaner, a tyre inflator and a wipes and air freshener vending machine. | |
| `pages.camon.sections.1.h` | Facile d'accès depuis Camon et Rivery | Easy to reach from Camon and Rivery | **à valider (accès)** |
| `pages.camon.sections.1.p` | La station se trouve dans la zone d'activités de Camon, avec un accès direct en voiture. Les pistes sont larges, et les aspirateurs ont leurs propres emplacements pour ne pas bloquer ceux qui lavent. | The station is in the Camon business park, with direct access by car. The bays are wide, and the vacuums have their own spots so nobody blocks the wash bays. | **à valider (accès)** |
| `pages.camon.sections.2.h` | Ouverte à toute heure | Open at any hour | |
| `pages.camon.sections.2.p` | Pas d'horaires à retenir : la station est ouverte 24 h/24 et 7 j/7. Le soir et tôt le matin, il y a rarement de l'attente. | No opening hours to remember: the station is open 24/7. In the evening and early morning there's rarely a queue. | |
| `pages.h24.slugLabel` | Lavage 24 h/24 près d'Amiens | 24-hour car wash near Amiens | |
| `pages.h24.metaTitle` | Lavage voiture 24 h/24 près d'Amiens | Autonet 80 | 24-hour car wash near Amiens | Autonet 80 | |
| `pages.h24.metaDescription` | Lavage auto haute pression ouvert 24 h/24 et 7 j/7 près d'Amiens, à Camon. Portique, aspirateurs, brosse. 4,5/5 sur Google, 91 avis. | High-pressure car wash open 24/7 near Amiens, in Camon. Brush gantry, vacuums, foaming brush. Rated 4.5/5 on Google from 91 reviews. | |
| `pages.h24.eyebrow` | Amiens · 24 h/24 | Amiens · 24 hours | |
| `pages.h24.h1` | Lavage voiture 24 h/24 près d'Amiens | 24-hour car wash near Amiens | |
| `pages.h24.intro` | Besoin de laver votre voiture tard le soir ou un dimanche matin ? Autonet 80, à Camon, est ouverte jour et nuit, à une dizaine de minutes du centre d'Amiens. | Need to wash the car late at night or on a Sunday morning? Autonet 80 in Camon is open day and night, about ten minutes from central Amiens. | |
| `pages.h24.sections.0.h` | Lavage haute pression à toute heure | High-pressure wash at any hour | |
| `pages.h24.sections.0.p` | Prélavage, lavage et rinçage au jet, brosse moussante : vous enchaînez les programmes comme vous le souhaitez, et vous ne payez que le temps utilisé. | Pre-wash, wash and rinse with the jet, plus the foaming brush: combine the programmes as you like and only pay for the time you use. | |
| `pages.h24.sections.1.h` | Depuis Amiens | From Amiens | **à valider (itinéraire)** |
| `pages.h24.sections.1.p` | Depuis le centre d'Amiens, prenez la direction de Camon par l'est de la ville. La station est au 424 rue Édouard Branly, dans la zone d'activités. | From central Amiens, head east towards Camon. The station is at 424 rue Édouard Branly, in the business park. | **à valider (itinéraire)** |
| `pages.h24.sections.2.h` | Un souci avec une machine ? | Problem with a machine? | |
| `pages.h24.sections.2.p` | Même la nuit, vous pouvez nous signaler une panne en un clic sur WhatsApp. Le message nous arrive avec la piste ou la borne concernée. | Even at night, you can report a fault in one click on WhatsApp. The message reaches us with the bay or pay station concerned. | |
| `pages.contact.slugLabel` | Contact | Contact | |
| `pages.contact.metaTitle` | Contact, panne ou demande pro | Autonet 80, Camon | Contact, machine fault or business enquiry | Autonet 80, Camon | |
| `pages.contact.metaDescription` | Une question, une machine en panne ou une flotte de véhicules à laver ? Écrivez à Autonet 80 sur WhatsApp ou appelez le 07 84 76 96 04. | A question, a machine out of order or a fleet of vehicles to wash? Message Autonet 80 on WhatsApp or call +33 7 84 76 96 04. | |
| `pages.legal.slugLabel` | Mentions légales | Legal notice | |
| `pages.legal.metaTitle` | Mentions légales | Autonet 80 | Legal notice | Autonet 80 | |
| `pages.legal.metaDescription` | Mentions légales du site Autonet 80, station de lavage à Camon. | Legal notice for the Autonet 80 website, car wash in Camon. | |
| `pages.legal.h1` | Mentions légales | Legal notice | |
| `pages.legal.editor` | Éditeur | Publisher | |
| `pages.legal.host` | Hébergement | Hosting | |
| `pages.legal.data` | Données personnelles | Personal data | |
| `pages.legal.dataText` | Le formulaire de contact n'enregistre rien sur ce site : il prépare un message que vous envoyez vous-même sur WhatsApp. Vos coordonnées servent uniquement à vous répondre. Aucun cookie publicitaire n'est utilisé. | The contact form stores nothing on this site: it prepares a message that you send yourself on WhatsApp. Your details are only used to reply to you. No advertising cookies are used. | |
| `pages.legal.credits` | Photos | Photos | |
| `pages.legal.creditsText` | Photos de la station prises sur place. Aucune image de banque d'images. | Photos of the station taken on site. No stock images. | |
| `pages.legal.company` | Société | Company | |
| `pages.legal.siret` | SIRET | SIRET | |
| `pages.legal.director` | Directeur de la publication | Publication director | |
| `pages.legal.address` | Adresse | Address | |
| `pages.legal.phone` | Téléphone | Phone | |
| `pages.back` | Retour à l'accueil | Back to home | |
| `pages.related` | Voir aussi | See also | |

## Textes alternatifs des photos

| Photo | Français | English |
|---|---|---|
| pistes-abcd-lavage | Les pistes de lavage haute pression de la station Autonet 80 by ABCD Lavage à Camon, sous l'auvent vert | The high-pressure wash bays at Autonet 80 by ABCD Lavage in Camon, under the green canopy |
| portique-abcd-lavage | Le portique d'entrée ABCD Lavage et une piste de lavage haute pression à Camon | The ABCD Lavage entrance gantry and a high-pressure wash bay in Camon |
| ancienne-enseigne-lavage-auto | Vue d'ensemble de la station de lavage Autonet à Camon, avec les pistes couvertes | Overview of the Autonet car wash in Camon, with its covered bays |
| canon-a-mousse-piste | Une voiture couverte de mousse active sur une piste de la station | A car covered in active foam in one of the station's bays |
| mousse-active-carrosserie | Carrosserie couverte de mousse active avant le rinçage haute pression | Bodywork covered in active foam before the high-pressure rinse |
| portique-brosses | Le portique de lavage à brosses de la station, une voiture en cours de lavage | The station's brush wash gantry, with a car being washed |
| borne-de-paiement-portique | La borne de paiement par carte devant le portique de lavage, hauteur maximale 2,30 m | The card pay station in front of the wash gantry, maximum height 2.30 m |
| aspirateurs-gonfleur | Les aspirateurs, le gonfleur et le nettoyeur sièges et moquettes de la station | The station's vacuums, tyre inflator and seat and carpet cleaner |
| nettoyeur-sieges-moquettes | Le nettoyeur sièges et moquettes et le distributeur de lingettes de la station | The station's seat and carpet cleaner and wipes vending machine |
| microfibre-unsplash-gogonano | Illustration : une microfibre posée sur le capot d'une voiture bleue | Illustration: a microfibre cloth on the bonnet of a blue car |
