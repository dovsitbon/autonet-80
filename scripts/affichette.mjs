// Affichette A5 imprimable (PDF) avec QR code vers le site, à poser à l'entrée de la station ou près des bornes.
//   npm run affichette   →   public/affichette-autonet-80-a5.pdf
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";

const ROOT = path.resolve(import.meta.dirname, "..");
const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));
const url = `${site.url}/fr`;

const hex = (h) => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const NAVY = hex("#10243E");
const BLUE = hex("#1E73BE");
const CYAN = hex("#36C2D8");
const WHITE = hex("#FFFFFF");
const MUTED = hex("#4F5D6D");
const GREY = hex("#E6E8EA");

const pdf = await PDFDocument.create();
pdf.setTitle("Autonet 80 : affichette A5");
pdf.setAuthor("Autonet 80 by ABCD Lavage");
const W = 419.53;
const H = 595.28;
const page = pdf.addPage([W, H]);
const bold = await pdf.embedFont(StandardFonts.HelveticaBoldOblique);
const boldUp = await pdf.embedFont(StandardFonts.HelveticaBold);
const sans = await pdf.embedFont(StandardFonts.Helvetica);

const center = (text, font, size, y, color = NAVY, spacing = 0) => {
  const width = font.widthOfTextAtSize(text, size) + spacing * (text.length - 1);
  let x = (W - width) / 2;
  if (!spacing) return page.drawText(text, { x, y, size, font, color });
  for (const ch of text) {
    page.drawText(ch, { x, y, size, font, color });
    x += font.widthOfTextAtSize(ch, size) + spacing;
  }
};

// Bandeau marine : goutte + voiture au trait, nom, 24 H/24
const topH = 250;
page.drawRectangle({ x: 0, y: H - topH, width: W, height: topH, color: NAVY });
for (let i = 0; i < 26; i++) page.drawLine({ start: { x: -120 + i * 24, y: H - topH }, end: { x: -40 + i * 24, y: H }, thickness: 0.4, color: WHITE, opacity: 0.06 });
const s = 1.5;
const ox = (W - 40 * s) / 2;
const oy = H - 30;
page.drawSvgPath("M20 3S6 19.5 6 30a14 14 0 0 0 28 0C34 19.5 20 3 20 3Z", { x: ox, y: oy, scale: s, borderColor: WHITE, borderWidth: 2.4 });
page.drawSvgPath("M11.5 34.5h17M12.6 34.5l1.7-4.3a2 2 0 0 1 1.9-1.3h7.6a2 2 0 0 1 1.9 1.3l1.7 4.3", { x: ox, y: oy, scale: s, borderColor: CYAN, borderWidth: 2 });
let y = H - 150;
center("AUTONET 80", bold, 40, y, WHITE, 1);
y -= 20;
center("BY ABCD LAVAGE", boldUp, 8, y, CYAN, 2.4);
y -= 44;
center("OUVERT 24 H/24 · 7 J/7", boldUp, 17, y, WHITE, 1.2);

// Corps
y = H - topH - 46;
center("Une voiture propre, à toute heure.", bold, 18, y, NAVY);
y -= 20;
center("Haute pression · Brosse · Aspirateurs · Tapis", sans, 10.5, y, MUTED);

const qrPng = await QRCode.toBuffer(url, { margin: 0, width: 600, color: { dark: "#10243E", light: "#FFFFFF" }, errorCorrectionLevel: "M" });
const qr = await pdf.embedPng(qrPng);
const qrS = 112;
y -= 30 + qrS;
page.drawRectangle({ x: (W - qrS) / 2 - 10, y: y - 10, width: qrS + 20, height: qrS + 20, borderColor: GREY, borderWidth: 1 });
page.drawImage(qr, { x: (W - qrS) / 2, y, width: qrS, height: qrS });
y -= 32;
center("Prix, itinéraire, signaler une panne : scannez", boldUp, 9, y, NAVY);
y -= 13;
center(url.replace(/^https?:\/\//, ""), sans, 8.5, y, BLUE);

// Pied
y = 44;
page.drawLine({ start: { x: 50, y: y + 22 }, end: { x: W - 50, y: y + 22 }, thickness: 0.6, color: CYAN });
center(`${site.address.street}, ${site.address.postalCode} ${site.address.city}`, sans, 9, y, NAVY);
y -= 13;
center(`${site.phone}  ·  WhatsApp  ·  ${String(site.rating.value).replace(".", ",")}/5 sur Google (${site.rating.count} avis)`, sans, 8.5, y, MUTED);

const file = path.join(ROOT, "public/affichette-autonet-80-a5.pdf");
await writeFile(file, await pdf.save());
console.log("affichette prête :", url);
