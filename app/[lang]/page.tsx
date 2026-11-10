import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import site from "@/data/site.json";
import avis from "@/data/avis.json";
import { fill, getDict, isLocale, type Dict, type Locale } from "@/lib/i18n";
import { slot, tileSlot } from "@/lib/media";
import { href } from "@/lib/routes";
import { categories, formules, fromPrice, programme, prixAsOf } from "@/lib/prix";
import { money } from "@/lib/shop";
import { intlLocale } from "@/lib/locales";
import { faqJsonLd } from "@/lib/jsonld";
import { Faq, InfosBlock, Rating, SectionHead, Slot } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { OpenStatus } from "@/components/OpenStatus";
import { Reveal } from "@/components/Reveal";
import { HeroArt } from "@/components/HeroArt";
import { ArrowIcon, BayIcon, BottleIcon, CalendarIcon, CardIcon, CheckIcon, ClockIcon, JetIcon, MatIcon, RollerIcon, RouteIcon, StarIcon, VacuumIcon, VanIcon } from "@/components/icons";

type TileId = keyof Dict["tiles"]["items"];
const TILES: { id: TileId; icon: ReactNode; hash: string; price?: string; confirm?: boolean }[] = [
  { id: "hp", icon: <JetIcon />, hash: "prix", price: "hp" },
  { id: "rouleaux", icon: <RollerIcon />, hash: "prix", price: "rouleaux", confirm: true },
  { id: "aspi", icon: <VacuumIcon />, hash: "interieur", price: "aspi" },
  { id: "tapis", icon: <MatIcon />, hash: "interieur", price: "tapis" },
  { id: "produits", icon: <BottleIcon />, hash: "prix", price: "distributeur" },
  { id: "pros", icon: <VanIcon />, hash: "pros" },
];

const priceLabel = (lang: Locale, d: Dict, price: number | null, from: boolean) => (price == null ? d.prix.tbc : fill(from ? d.prix.from : d.prix.price, { price: money(price, lang) }));

/** Décor au trait : lignes d'eau qui glissent lentement en bas du hero. */
function WaterLines() {
  const wave = "M0 20c50 0 50-14 100-14s50 14 100 14 50-14 100-14 50 14 100 14 50-14 100-14 50 14 100 14 50-14 100-14 50 14 100 14 50-14 100-14 50 14 100 14 50-14 100-14 50 14 100 14";
  return (
    <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-cyan" viewBox="0 0 1000 80" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <g className="flow" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
        <path d={wave} opacity="0.55" transform="translate(0 18)" />
        <path d={wave} opacity="0.3" transform="translate(-60 38)" />
        <path d={wave} opacity="0.15" transform="translate(-30 56)" />
      </g>
    </svg>
  );
}

function Hero({ lang, d }: { lang: Locale; d: Dict }) {
  const h = d.hero;
  const photo = slot("hero");
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy text-white">
      {photo ? (
        <div className="absolute inset-0 -z-10">
          <Slot src={photo} d={d} priority sizes="100vw" className="size-full !rounded-none" />
          <div className="absolute inset-0 bg-navy-deep/55" />
        </div>
      ) : (
        <div className="slot dark absolute inset-0 -z-10 !rounded-none" aria-hidden="true" />
      )}
      <div className="mx-auto flex min-h-[calc(100svh-6.5rem)] max-w-[90rem] flex-col justify-center px-5 pt-16 pb-36 sm:px-8 lg:min-h-[calc(100svh-7.5rem)] lg:px-10 lg:pe-[46%]">
        <p className="rise text-[0.75rem] font-medium tracking-[0.18em] text-cyan uppercase">{h.eyebrow}</p>
        <h1 id="hero-title" className="display rise mt-6 max-w-[14ch] text-[clamp(2.9rem,8.4vw,7rem)] [animation-delay:0.08s]">
          {h.title}
        </h1>
        <p className="rise mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-white/80 [animation-delay:0.16s] sm:text-[1.125rem]">{h.lead}</p>
        <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:0.24s]">
          <a href={site.directions} target="_blank" rel="noopener" className="btn btn-blue !border-blue">
            <RouteIcon /> {h.itineraire}
          </a>
          <Link href={href(lang, "home", "prix")} className="btn btn-line on-dark text-white">
            {h.prix}
          </Link>
        </div>
        <div className="rise mt-7 flex flex-col gap-2 text-[0.9375rem] text-white/85 [animation-delay:0.32s] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
          <Rating lang={lang} d={d} dark className="hover:text-white" />
          <OpenStatus dark />
        </div>
      </div>
      {!photo && <HeroArt className="pointer-events-none absolute end-[max(1rem,calc((100vw-90rem)/2))] top-1/2 -z-10 hidden w-[min(46vw,40rem)] -translate-y-1/2 lg:block" />}
      <WaterLines />
    </section>
  );
}

function Tiles({ lang, d }: { lang: Locale; d: Dict }) {
  const t = d.tiles;
  return (
    <section id="services" aria-labelledby="tiles-title" className="mx-auto max-w-[90rem] px-5 pt-20 pb-16 sm:px-8 lg:px-10 lg:pt-24">
      <SectionHead eyebrow={t.eyebrow} title={t.title} id="tiles-title" />
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {TILES.map((tile, i) => {
          const it = t.items[tile.id];
          const photo = tileSlot(tile.id);
          const p = tile.price ? fromPrice(tile.price) : null;
          const note = tile.confirm ? t.confirm : tile.price ? (p != null ? fill(t.from, { price: money(p, lang) }) : t.tbc) : d.blocks.pros.cta;
          return (
            <Reveal as="li" key={tile.id} delay={(i % 6) * 0.04} className="h-full">
              <Link href={href(lang, "home", tile.hash)} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-blue">
                {photo ? (
                  <Slot src={photo} d={d} sizes="(min-width:1280px) 16vw, (min-width:1024px) 30vw, 48vw" className="aspect-[16/10] !rounded-none" />
                ) : (
                  <span className="grid aspect-[16/10] place-items-center bg-mist [&>svg]:size-14 text-blue transition-colors duration-300 group-hover:bg-[#e8f1f9]">{tile.icon}</span>
                )}
                <span className="flex flex-1 flex-col p-4 sm:p-5">
                  <span className="flex items-center justify-between gap-2">
                    <h3 className="text-[1.0625rem] font-medium sm:text-[1.125rem]">{it.title}</h3>
                    <ArrowIcon className="size-4 shrink-0 text-blue transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180" />
                  </span>
                  <span className="mt-1.5 flex-1 text-[0.875rem] leading-snug text-muted">{it.text}</span>
                  <span className="mt-3 text-[0.8125rem] font-medium text-blue tabular-nums">{note}</span>
                </span>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

/** Bande de services en 4 pictos. */
function Strip({ d }: { d: Dict }) {
  const icons = [<ClockIcon key="c" />, <CalendarIcon key="j" />, <CardIcon key="p" />, <BayIcon key="b" />];
  return (
    <section aria-label={d.strip.label} className="border-y border-line">
      <ul className="mx-auto grid max-w-[90rem] grid-cols-2 lg:grid-cols-4">
        {d.strip.items.map((it, i) => (
          <Reveal as="li" key={it.title} delay={i * 0.05} className={`flex flex-col items-center px-4 py-9 text-center sm:px-8 lg:py-12 ${i % 2 ? "border-s border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-s" : ""}`}>
            <span className="text-blue">{icons[i]}</span>
            <span className="display mt-4 text-[1.375rem] sm:text-[1.5rem]">{it.title}</span>
            <span className="mt-2 max-w-[24ch] text-[0.875rem] leading-snug text-muted">{it.text}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function Prix({ lang, d }: { lang: Locale; d: Dict }) {
  const p = d.prix;
  const date = new Intl.DateTimeFormat(intlLocale[lang], { day: "numeric", month: "long", year: "numeric" }).format(new Date(prixAsOf));
  return (
    <section id="prix" aria-labelledby="prix-title" className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] lg:gap-16 xl:gap-20">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionHead eyebrow={p.eyebrow} title={p.title} lead={p.lead} id="prix-title" />
          <Rating lang={lang} d={d} className="mt-6 text-[0.875rem] text-muted hover:text-ink" />
          <p className="mt-6 text-[0.8125rem] text-muted">{fill(p.note, { date })}</p>
        </div>
        <div className="space-y-12">
          {categories.map((c) => (
            <Reveal key={c.id}>
              <table className="w-full border-collapse text-start">
                <caption className="border-b-2 border-ink pb-3 text-start">
                  <span className="display text-[1.5rem] sm:text-[1.75rem]">{c.name[lang]}</span>
                </caption>
                <thead className="sr-only sm:not-sr-only">
                  <tr className="text-[0.8125rem] text-muted">
                    <th scope="col" className="pt-4 pb-2 text-start font-medium">
                      {p.head.programme}
                    </th>
                    <th scope="col" className="w-56 pt-4 pb-2 text-start font-medium">
                      {p.head.duree}
                    </th>
                    <th scope="col" className="w-40 pt-4 pb-2 text-end font-medium">
                      {p.head.prix}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {c.items.map((s) => (
                    <tr key={s.id} className="grid grid-cols-[1fr_auto] gap-x-6 py-3.5 sm:table-row sm:py-0">
                      <th scope="row" className="text-start text-[1rem] font-normal sm:py-4">
                        {s.name[lang]}
                        {s.confirm && <span className="mt-0.5 block text-[0.75rem] text-muted">{d.tiles.confirm}</span>}
                      </th>
                      <td className="order-3 col-span-2 text-[0.875rem] text-muted sm:w-56 sm:py-4 sm:text-[0.9375rem]">{s.duration ? s.duration[lang] : p.dash}</td>
                      <td className={`text-end text-[0.9375rem] whitespace-nowrap tabular-nums sm:w-40 sm:py-4 ${s.price == null ? "text-muted" : "font-medium"}`}>{priceLabel(lang, d, s.price, s.from)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          ))}
        </div>
      </div>
      <Compare lang={lang} d={d} />
    </section>
  );
}

/** Comparateur de 3 formules côte à côte (rapide, complet, premium), mêmes lignes pour toutes. */
function Compare({ lang, d }: { lang: Locale; d: Dict }) {
  const c = d.prix.compare;
  const rows = Array.from(new Set(formules.flatMap((f) => f.includes)));
  return (
    <div className="mt-24 lg:mt-32">
      <SectionHead eyebrow={c.eyebrow} title={c.title} lead={c.lead} center />
      <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:gap-6">
        {formules.map((f, i) => (
          <Reveal as="li" key={f.id} delay={i * 0.06} className={`flex flex-col rounded-2xl p-7 lg:p-9 ${f.highlight ? "bg-navy text-white" : "border border-line bg-white"}`}>
            <div className="flex min-h-7 items-center justify-between gap-3">
              <span className={`text-[0.8125rem] font-medium tabular-nums ${f.highlight ? "text-cyan" : "text-blue"}`}>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="display mt-4 text-[2.25rem]">{f.name[lang]}</h3>
            <p className={`mt-2 ${f.highlight ? "text-white/75" : "text-muted"}`}>{f.pitch[lang]}</p>
            <dl className={`mt-7 grid grid-cols-2 gap-4 border-y py-5 ${f.highlight ? "border-white/15" : "border-line"}`}>
              <div>
                <dt className={`text-[0.75rem] ${f.highlight ? "text-white/60" : "text-muted"}`}>{c.duration}</dt>
                <dd className="mt-1 font-medium">{f.duration[lang]}</dd>
              </div>
              <div>
                <dt className={`text-[0.75rem] ${f.highlight ? "text-white/60" : "text-muted"}`}>{c.budget}</dt>
                <dd className="mt-1 font-medium tabular-nums">{priceLabel(lang, d, f.price, true)}</dd>
              </div>
            </dl>
            <ul className="mt-6 flex-1 space-y-3">
              {rows.map((id) => {
                const on = f.includes.includes(id);
                return (
                  <li key={id} className={`flex items-start gap-3 text-[0.9375rem] ${on ? "" : f.highlight ? "text-white/35" : "text-muted/60"}`}>
                    {on ? <CheckIcon className={`mt-0.5 size-4 shrink-0 ${f.highlight ? "text-cyan" : "text-blue"}`} /> : <span className="mt-2 h-px w-4 shrink-0 bg-current" aria-hidden="true" />}
                    <span>
                      {programme(id)?.name[lang]}
                      {!on && <span className="sr-only"> ({c.notIncluded})</span>}
                    </span>
                  </li>
                );
              })}
            </ul>
            <a href={site.directions} target="_blank" rel="noopener" className={`btn mt-8 ${f.highlight ? "btn-white" : "btn-line text-ink"}`}>
              <RouteIcon /> {c.cta}
            </a>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/** Bloc alterné : photo + texte court + un seul bouton. */
function Feature({ id, eyebrow, title, text, cta, media, flip = false }: { id: string; eyebrow: string; title: string; text: string; cta: ReactNode; media: ReactNode; flip?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-[90rem] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-20">
        <Reveal className={flip ? "md:order-2" : ""}>{media}</Reveal>
        <Reveal delay={0.08} className="max-w-xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="display mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)]">
            {title}
          </h2>
          <p className="lead mt-5">{text}</p>
          <div className="mt-8">{cta}</div>
        </Reveal>
      </div>
    </section>
  );
}

function Features({ lang, d }: { lang: Locale; d: Dict }) {
  const b = d.blocks;
  const box = "aspect-[4/3] md:aspect-[5/4]";
  return (
    <div className="bg-white py-8 lg:py-12">
      <Feature
        id="haute-pression"
        {...b.hp}
        cta={
          <Link href={href(lang, "home", "prix")} className="btn btn-blue">
            {b.hp.cta}
          </Link>
        }
        media={<Slot src={slot("pistes")} d={d} sizes="(min-width:768px) 45vw, 100vw" className={box} icon={<JetIcon className="size-14" />} label={d.slot.pistes} />}
      />
      <Feature
        id="interieur"
        flip
        {...b.interieur}
        cta={
          <a href={site.directions} target="_blank" rel="noopener" className="btn btn-blue">
            <RouteIcon /> {b.interieur.cta}
          </a>
        }
        media={<Slot src={slot("aspirateurs")} d={d} sizes="(min-width:768px) 45vw, 100vw" className={box} icon={<VacuumIcon className="size-14" />} label={d.slot.aspirateurs} />}
      />
      <Feature
        id="pros"
        {...b.pros}
        cta={
          <Link href={`${href(lang, "contact")}?motif=pros`} className="btn btn-blue">
            {b.pros.cta}
          </Link>
        }
        media={<Slot src={slot("facade")} d={d} sizes="(min-width:768px) 45vw, 100vw" className={box} icon={<VanIcon className="size-14" />} label={d.slot.facade} dark />}
      />
    </div>
  );
}

type Avis = { author: string; date: string; rating: number; text: Record<Locale, string> };

function Reviews({ lang, d }: { lang: Locale; d: Dict }) {
  const r = d.reviews;
  const value = new Intl.NumberFormat(intlLocale[lang], { maximumFractionDigits: 1 }).format(site.rating.value);
  const items = avis.items as Avis[];
  return (
    <section aria-labelledby="reviews-title" className="bg-mist">
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
          <Reveal className="flex items-end gap-5">
            <p className="display text-[clamp(5rem,11vw,8rem)] leading-[0.8] tabular-nums">{value}</p>
            <div className="pb-1">
              <p className="eyebrow">{r.eyebrow}</p>
              <Rating lang={lang} d={d} className="mt-2 text-[0.875rem] text-muted hover:text-ink" />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="reviews-title" className="display text-[clamp(1.75rem,3.2vw,2.4rem)]">
              {r.title}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {r.themes.map((t) => (
                <li key={t} className="rounded-full border border-line bg-white px-4 py-2 text-[0.9375rem]">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        {/* À REMPLIR avec de vrais avis clients : data/avis.json (avec l'accord de leurs auteurs, aucun avis inventé) */}
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {items.length
            ? items.slice(0, 3).map((a) => (
                <Reveal as="li" key={a.author + a.date} className="rounded-2xl bg-white p-7">
                  <span className="flex text-[#c98a00]" aria-label={`${a.rating}/5`}>
                    {Array.from({ length: a.rating }, (_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </span>
                  <blockquote className="mt-4 leading-relaxed">{a.text[lang]}</blockquote>
                  <p className="mt-4 text-[0.875rem] text-muted">{a.author}</p>
                </Reveal>
              ))
            : [0, 1, 2].map((i) => (
                <li key={i} className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-[#c3cad1] p-7 text-center text-[0.875rem] text-muted">
                  {i === 1 ? r.soon : <span aria-hidden="true">“ ”</span>}
                </li>
              ))}
        </ul>
        <a href={site.maps} target="_blank" rel="noopener" className="link-line mt-8 inline-block text-[0.9375rem] font-medium text-blue">
          {r.cta}
        </a>
      </div>
    </section>
  );
}

function Contact({ d }: { d: Dict }) {
  const c = d.contact;
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-10 lg:py-28">
        <SectionHead eyebrow={c.eyebrow} title={c.title} lead={c.lead} id="contact-title" />
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(d.faq.items)) }} />
      <Hero lang={lang} d={d} />
      <Tiles lang={lang} d={d} />
      <Strip d={d} />
      <Prix lang={lang} d={d} />
      <Features lang={lang} d={d} />
      <Reviews lang={lang} d={d} />
      <InfosBlock lang={lang} d={d} />
      <Faq d={d} />
      <Contact d={d} />
    </>
  );
}
