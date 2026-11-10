import site from "@/data/site.json";

/** Lien WhatsApp vers la station, avec un message prérempli. */
export const waLink = (text?: string) => `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
