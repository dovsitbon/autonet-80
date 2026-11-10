import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import site from "@/data/site.json";
import { getDict, isLocale, locales, type Dict, type Locale } from "@/lib/i18n";
import { href, PAGES, pageOf, type PageId } from "@/lib/routes";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { ogLocale } from "@/lib/locales";
import { slot } from "@/lib/media";
import { waLink } from "@/lib/whatsapp";
import { Faq, InfosBlock, Rating, Slot } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { OpenStatus } from "@/components/OpenStatus";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, JetIcon, PhoneIcon, RouteIcon, WhatsAppIcon } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => Object.values(PAGES).map((s) => ({ lang, slug: s[lang] })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const id = pageOf(lang, slug);
  if (!id) return {};
  const d = getDict(lang);
  const p = d.pages[id];
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: {
      canonical: href(lang, id),
      languages: { ...Object.fromEntries(locales.map((l) => [l, href(l, id)])), "x-default": href("fr", id) },
    },
    openGraph: { type: "website", url: href(lang, id), siteName: site.name, title: p.metaTitle, description: p.metaDescription, locale: ogLocale[lang], images: [{ url: "/og.jpg", width: 1200, height: 630, alt: d.meta.ogAlt }] },
    robots: id === "legal" ? { index: false, follow: true } : undefined,
  };
}

/** Pages SEO locales : « Station de lavage à Camon » et « Lavage voiture 24 h/24 près d'Amiens ». */
function SeoPage({ lang, d, id }: { lang: Locale; d: Dict; id: "camon" | "h24" }) {
  const p = d.pages[id];
  const other = id === "camon" ? "h24" : "camon";
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-[90rem] items-center gap-10 px-5 pt-14 pb-16 sm:px-8 md:grid-cols-[1.2fr_1fr] lg:gap-20 lg:px-10 lg:pt-20 lg:pb-24">
          <div>
            <p className="text-[0.75rem] font-medium tracking-[0.18em] text-cyan uppercase">{p.eyebrow}</p>
            <h1 className="display mt-5 text-[clamp(2.5rem,6vw,4.75rem)]">{p.h1}</h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/80">{p.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={site.directions} target="_blank" rel="noopener" className="btn btn-blue">
                <RouteIcon /> {d.nav.itineraire}
              </a>
              <Link href={href(lang, "home", "prix")} className="btn btn-line on-dark text-white">
                {d.hero.prix}
              </Link>
            </div>
            <div className="mt-7 flex flex-col gap-2 text-[0.9375rem] text-white/85 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <Rating lang={lang} d={d} dark />
              <OpenStatus dark />
            </div>
          </div>
          <Slot src={slot(id === "camon" ? "facade" : "pistes")} d={d} sizes="(min-width:768px) 40vw, 100vw" className="aspect-[4/3]" icon={<JetIcon className="size-14" />} label={id === "camon" ? d.slot.facade : d.slot.pistes} dark />
        </div>
      </section>
      <section className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 md:grid-cols-3 lg:gap-14">
          {p.sections.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.06}>
              <span className="text-[0.75rem] font-medium tracking-[0.14em] text-blue">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display mt-3 text-[1.6rem]">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-14 text-[0.9375rem]">
          {d.pages.related} :{" "}
          <Link href={href(lang, other)} className="link-line inline-flex items-center gap-1 font-medium text-blue">
            {d.pages[other].slugLabel} <ArrowIcon className="size-3.5" />
          </Link>
        </p>
      </section>
      <InfosBlock lang={lang} d={d} />
      <Faq d={d} />
    </>
  );
}

function ContactPage({ d }: { d: Dict }) {
  const c = d.contact;
  return (
    <section className="mx-auto grid max-w-[90rem] gap-12 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-10 lg:pt-20 lg:pb-28">
      <div>
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,5vw,4rem)]">{c.title}</h1>
        <p className="lead mt-5 max-w-md">{c.lead}</p>
        <div className="mt-9 space-y-4">
          <a href={`tel:${site.tel}`} className="display flex items-center gap-3 text-[1.75rem] tabular-nums hover:text-blue">
            <PhoneIcon className="size-6" /> {site.phone}
          </a>
          <a href={waLink()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-medium text-blue">
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
        <p className="mt-9 leading-relaxed text-muted">
          {site.address.street}, {site.address.postalCode} {site.address.city}
          <br />
          {d.infos.always}
        </p>
      </div>
      <ContactForm />
    </section>
  );
}

function LegalPage({ d }: { d: Dict }) {
  const l = d.pages.legal;
  const s = site.legal;
  return (
    <section className="mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 lg:pt-20">
      <h1 className="display text-[clamp(2.4rem,5vw,3.5rem)]">{l.h1}</h1>
      <div className="mt-12 space-y-10 leading-relaxed">
        <div>
          <h2 className="text-[1.125rem] font-medium">{l.editor}</h2>
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-muted">
            <dt>{l.company}</dt>
            <dd>
              {site.fullName} · {s.company}
            </dd>
            <dt>{l.siret}</dt>
            <dd>{s.siret}</dd>
            <dt>{l.director}</dt>
            <dd>{s.director}</dd>
            <dt>{l.address}</dt>
            <dd>
              {site.address.street}, {site.address.postalCode} {site.address.city}
            </dd>
            <dt>{l.phone}</dt>
            <dd>{site.phone}</dd>
          </dl>
        </div>
        <div>
          <h2 className="text-[1.125rem] font-medium">{l.host}</h2>
          <p className="mt-3 text-muted">{s.host}</p>
        </div>
        <div>
          <h2 className="text-[1.125rem] font-medium">{l.data}</h2>
          <p className="mt-3 text-muted">{l.dataText}</p>
        </div>
        <div>
          <h2 className="text-[1.125rem] font-medium">{l.credits}</h2>
          <p className="mt-3 text-muted">{l.creditsText}</p>
        </div>
      </div>
    </section>
  );
}

export default async function Page({ params }: PageProps<"/[lang]/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const id: PageId | null = pageOf(lang, slug);
  if (!id) notFound();
  const d = getDict(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(lang, d.pages[id].slugLabel, href(lang, id))) }} />
      {id === "camon" || id === "h24" ? <SeoPage lang={lang} d={d} id={id} /> : id === "contact" ? <ContactPage d={d} /> : <LegalPage d={d} />}
    </>
  );
}
