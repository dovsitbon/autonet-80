// Génère CONTENU.md : tous les textes du site en français et en anglais, les tarifs et délais,
// pour relecture et validation par la station.   npm run contenu
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const json = async (p) => JSON.parse(await readFile(path.join(ROOT, p), "utf8"));
const fr = await json("locales/fr.json");
const en = await json("locales/en.json");
const prix = await json("data/prix.json");
const annonces = await json("data/annonces.json");
const horaires = await json("data/horaires.json");
const site = await json("data/site.json");

const out = [];
const w = (s = "") => out.push(s);
const strip = (s) => s.replace(/<br>/g, " ").replace(/<\/?em>/g, "*");

w("# Autonet 80 by ABCD Lavage : contenu du site");
w();
w("Tous les textes du site, en français et en anglais, avec les prix et les horaires, pour validation avec le gérant. Les corrections se font dans `locales/fr.json` et `locales/en.json` ; prix, horaires, annonces, avis et photos dans `data/*.json`. Ce fichier se régénère avec `npm run contenu`.");
w();
w(`Aucun chiffre inventé : **aucun prix n'est renseigné** (le site affiche « Prix à confirmer ») tant que la station ne les a pas donnés. Les durées sont des repères **à valider**. La note Google (${site.rating.value}/5, ${site.rating.count} avis) est celle relevée le ${site.rating.asOf}. Aucun avis n'est cité : le site reprend seulement les thèmes qui reviennent (prix, qualité du lavage, brosse, machines, tapis, haute pression).`);
w();
w("Voir aussi : [INFOS-A-DEMANDER.md](INFOS-A-DEMANDER.md) et [assets/A-PHOTOGRAPHIER.md](assets/A-PHOTOGRAPHIER.md).");
w();

w("## Titres du hero : 3 propositions");
w();
w(`1. **${fr.hero.title}** *(${en.hero.title})* : retenu sur le site`);
w("2. **Lavez quand vous voulez.** *(Wash whenever you like.)*");
w("3. **Brillante en quelques minutes.** *(Gleaming in minutes.)*");
w();

w("## Prix (`data/prix.json`)");
w();
for (const c of prix.categories) {
  w(`### ${c.name.fr} / ${c.name.en}`);
  w();
  w("| Programme | Durée | Prix |");
  w("|---|---|---|");
  for (const s of c.items) w(`| **${s.name.fr}**<br>*${s.name.en}* | ${s.duration ? `${s.duration.fr} (à valider)` : "—"} | ${s.price == null ? "à remplir" : `${s.from ? "à partir de " : ""}${s.price} €`}${s.confirm ? " · **équipement à confirmer**" : ""} |`);
  w();
}
w("### Comparateur : 3 formules");
w();
w("| Formule | Accroche | Durée | Budget | Programmes inclus |");
w("|---|---|---|---|---|");
const nameOf = (id) => prix.categories.flatMap((c) => c.items).find((p) => p.id === id)?.name.fr ?? id;
for (const f of prix.formules) w(`| **${f.name.fr}** / ${f.name.en} | ${f.pitch.fr} | ${f.duration.fr} (à valider) | ${f.price == null ? "à remplir" : `${f.price} €`} | ${f.includes.map(nameOf).join(", ")} |`);
w();

w("## Horaires (`data/horaires.json`)");
w();
const days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
for (const d of [1, 2, 3, 4, 5, 6, 0]) {
  const r = horaires.week[String(d)];
  w(`- ${days[d]} : ${r ? r.map(([a, b]) => `${a} – ${b}`).join(", ") : "fermé"}`);
}
w();
w("**À confirmer** : ouvert 24 h/24, 7 j/7, jours fériés compris.");
w();
w("## Bandeau d'annonces (`data/annonces.json`)");
w();
w(`- **Par défaut** : ${annonces.default.text.fr} *(${annonces.default.text.en})*`);
for (const a of annonces.items) w(`- **${a.from} → ${a.to}** : ${a.text.fr} *(${a.text.en})* — lien « ${a.link.fr} »`);
w();

w("## Textes du site");
w();
w("Chaque ligne : clé, français, anglais. Les textes marqués **à valider** demandent une confirmation de la station.");
w();
const flags = {
  "strip.items.2": "à valider (moyens de paiement)",
  "tiles.items.rouleaux": "à valider (rouleaux ou portique ?)",
  "tiles.items.produits": "à valider (contenu du distributeur)",
  "tiles.items.pros": "à valider (offre pro)",
  "blocks.pros": "à valider (offre pro)",
  "faq.items.1": "à valider (moyens de paiement)",
  "faq.items.2": "à valider (durées)",
  "faq.items.3": "à valider (gabarits acceptés)",
  "faq.items.5": "à valider (offre pro)",
  "infos.accessText": "à valider (accès, stationnement)",
  "pages.camon.sections.1": "à valider (accès)",
  "pages.h24.sections.1": "à valider (itinéraire)",
};
const flagOf = (key) => Object.entries(flags).find(([k]) => key === k || key.startsWith(`${k}.`))?.[1];

const SKIP = new Set(["alt", "days"]);
function walk(a, b, key = "") {
  if (typeof a === "string") {
    const f = flagOf(key);
    w(`| \`${key}\` | ${strip(a).replace(/\n/g, "<br>")} | ${strip(b ?? "").replace(/\n/g, "<br>")} |${f ? ` **${f}** |` : " |"}`);
    return;
  }
  if (Array.isArray(a)) return a.forEach((x, i) => walk(x, b?.[i], `${key}.${i}`));
  for (const k of Object.keys(a)) walk(a[k], b?.[k], key ? `${key}.${k}` : k);
}
for (const section of Object.keys(fr)) {
  if (SKIP.has(section)) continue;
  w(`### ${section}`);
  w();
  w("| Clé | Français | English | |");
  w("|---|---|---|---|");
  walk(fr[section], en[section], section);
  w();
}

w("## Textes alternatifs des photos");
w();
w("| Photo | Français | English |");
w("|---|---|---|");
for (const k of Object.keys(fr.alt)) w(`| ${k} | ${fr.alt[k]} | ${en.alt[k]} |`);
w();

await writeFile(path.join(ROOT, "CONTENU.md"), out.join("\n"));
console.log("CONTENU.md écrit");
