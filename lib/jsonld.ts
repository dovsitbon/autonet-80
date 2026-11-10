import site from "@/data/site.json";
import horaires from "@/data/horaires.json";
import { getDict, type Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { categories } from "@/lib/prix";
import { slot } from "@/lib/media";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const BUSINESS_ID = `${site.url}/#station`;

/** Schema.org AutoWash : adresse, horaires (00:00–23:59 = 24 h/24), téléphone, note Google datée, programmes. */
export function businessJsonLd(lang: Locale) {
  const d = getDict(lang);
  const week = horaires.week as unknown as Record<string, [string, string][] | null>;
  const hours = Object.entries(week).flatMap(([day, ranges]) =>
    (ranges ?? []).map(([opens, closes]) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${DAYS[Number(day)]}`, opens: `${opens}:00`, closes: closes === "24:00" ? "23:59:59" : `${closes}:00` })),
  );
  const images = [`${site.url}/og.jpg`, ...[slot("hero"), slot("facade"), slot("pistes")].filter(Boolean).map((p) => `${site.url}${p}`)];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoWash",
        "@id": BUSINESS_ID,
        name: site.name,
        alternateName: site.fullName,
        description: d.meta.description,
        url: `${site.url}/${lang}`,
        image: images,
        logo: `${site.url}/logo.svg`,
        telephone: site.phoneIntl,
        priceRange: "€",
        currenciesAccepted: "EUR",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          postalCode: site.address.postalCode,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        hasMap: site.maps,
        openingHoursSpecification: hours,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.value,
          reviewCount: site.rating.count,
          bestRating: 5,
          worstRating: 1,
          description: `Google, ${site.rating.asOf}`,
          dateModified: site.rating.asOf,
        },
        areaServed: [{ "@type": "City", name: "Camon" }, { "@type": "City", name: "Amiens" }, { "@type": "City", name: "Rivery" }, { "@type": "City", name: "Longueau" }],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: d.prix.title,
          itemListElement: categories.map((c) => ({
            "@type": "OfferCatalog",
            name: c.name[lang],
            itemListElement: c.items.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.name[lang] },
              ...(s.price != null ? { priceSpecification: { "@type": "PriceSpecification", [s.from ? "minPrice" : "price"]: s.price, priceCurrency: "EUR" } } : {}),
            })),
          })),
        },
        potentialAction: { "@type": "CommunicateAction", target: `${site.url}${href(lang, "contact")}` },
      },
      { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: ["fr", "en"], publisher: { "@id": BUSINESS_ID } },
    ],
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function breadcrumbJsonLd(lang: Locale, name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: site.name, item: `${site.url}/${lang}` },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
}
