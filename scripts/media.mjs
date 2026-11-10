// Prépare les photos d'Autonet 80 pour le web.   npm run media
// Sources : assets/<dossier>/ (hero, facade, pistes, aspirateurs, tapis, produits, equipe), photos prises sur place.
// Version web dans public/media/<dossier>/ (next/image sert ensuite AVIF/WebP), dimensions dans data/media-sizes.json.
// Pour une nouvelle photo : l'ajouter à PICKS, relancer, puis la brancher dans data/photos.json.
// Génère aussi l'image de partage public/og.jpg (photo du hero si elle existe, sinon visuel typographique).
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = ["raw", "hero", "facade", "pistes", "aspirateurs", "tapis", "produits", "equipe"];

// [fichier source (depuis assets/), dossier, nom, recadrage { top, bottom, left, right } en pixels retirés]
const PICKS = [
  // Exemples, à décommenter quand les photos seront prises :
  // ["hero/station-de-nuit.jpg", "hero", "station-de-nuit", {}],
  // ["facade/entree-rue-branly.jpg", "facade", "entree-station", {}],
  // ["pistes/piste-haute-pression.jpg", "pistes", "piste-haute-pression", {}],
  // ["aspirateurs/aspirateurs.jpg", "aspirateurs", "aspirateurs", {}],
];

const sizes = {};
for (const [src, dir, name, c] of PICKS) {
  const file = path.join(ROOT, "assets", src);
  const meta = await sharp(file).rotate().metadata();
  const box = { left: c.left ?? 0, top: c.top ?? 0, width: meta.width - (c.left ?? 0) - (c.right ?? 0), height: meta.height - (c.top ?? 0) - (c.bottom ?? 0) };
  await mkdir(path.join(ROOT, "public/media", dir), { recursive: true });
  const max = dir === "hero" ? 2400 : 1600;
  const info = await sharp(file).rotate().extract(box).resize({ width: max, height: max, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(ROOT, "public/media", dir, `${name}.jpg`));
  sizes[`/media/${dir}/${name}.jpg`] = [info.width, info.height];
}
for (const dir of DIRS) await mkdir(path.join(ROOT, "assets", dir), { recursive: true });

const hero = PICKS.find((p) => p[1] === "hero");
if (hero) {
  await sharp(path.join(ROOT, "assets", hero[0])).rotate().resize(1200, 630, { fit: "cover" }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(ROOT, "public/og.jpg"));
} else {
  const lines = Array.from({ length: 34 }, (_, i) => `<path d="M${-200 + i * 48} 640 L${200 + i * 48} 0" stroke="#ffffff" stroke-opacity="0.05"/>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#10243E"/>${lines}
  <g transform="translate(96 150) scale(2.4)" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 3S6 19.5 6 30a14 14 0 0 0 28 0C34 19.5 20 3 20 3Z" stroke="#fff" stroke-width="2.6"/>
    <path d="M11.5 34.5h17M12.6 34.5l1.7-4.3a2 2 0 0 1 1.9-1.3h7.6a2 2 0 0 1 1.9 1.3l1.7 4.3" stroke="#36C2D8" stroke-width="2.2"/>
  </g>
  <text x="96" y="380" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-style="italic" font-size="96" fill="#fff">AUTONET <tspan fill="#36C2D8">80</tspan></text>
  <text x="100" y="440" font-family="Arial, sans-serif" font-size="34" fill="#ffffff" fill-opacity="0.85">Station de lavage 24 h/24 · Camon, près d'Amiens</text>
  <text x="100" y="530" font-family="Arial, sans-serif" font-size="24" fill="#36C2D8">Haute pression · Brosse · Aspirateurs · Tapis</text>
</svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(path.join(ROOT, "public/og.jpg"));
}

await writeFile(path.join(ROOT, "data/media-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");
console.log(`${PICKS.length} photo(s) prête(s), og.jpg généré`);
