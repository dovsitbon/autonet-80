import Image from "next/image";
import type { ReactNode } from "react";
import site from "@/data/site.json";
import { fill, type Dict, type Locale } from "@/lib/i18n";
import { img } from "@/lib/media";
import { hourLabel, isAlways, upcomingClosures, weekRows } from "@/lib/shop";
import { intlLocale } from "@/lib/locales";
import { waLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";
import { OpenStatus } from "@/components/OpenStatus";
import { PhoneIcon, RouteIcon, StarIcon, WhatsAppIcon } from "@/components/icons";

export const alt = (d: Dict, src: string) => (d.alt as Record<string, string>)[src.split("/").pop()!.replace(/\.\w+$/, "")] ?? "";

/** Photo de public/media avec ses vraies dimensions et son texte alternatif dans la langue de la page. */
export function Photo({ src, d, className = "", sizes, priority = false }: { src: string; d: Dict; className?: string; sizes: string; priority?: boolean }) {
  const i = img(src);
  return <Image src={i.src} width={i.width} height={i.height} alt={alt(d, src)} sizes={sizes} priority={priority} quality={80} className={className} />;
}

/**
 * Emplacement photo : la vraie photo si elle existe (data/photos.json), sinon un panneau gris clair à fines lignes d'eau,
 * avec le picto au trait et la légende de la photo attendue. Jamais de fausse photo.
 */
export function Slot({ src, d, sizes, className = "", icon, label, priority = false, dark = false, imgClass = "" }: { src: string | null; d: Dict; sizes: string; className?: string; icon?: ReactNode; label?: string; priority?: boolean; dark?: boolean; imgClass?: string }) {
  if (src)
    return (
      <div className={`overflow-hidden rounded-2xl bg-grey ${className}`}>
        <Photo src={src} d={d} sizes={sizes} priority={priority} className={`size-full object-cover ${imgClass}`} />
      </div>
    );
  return (
    <div className={`slot grid place-items-center rounded-2xl ${dark ? "dark text-cyan" : "text-blue"} ${className}`}>
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        {icon}
        {label && <span className={`text-[0.875rem] font-medium ${dark ? "text-white/85" : "text-ink/80"}`}>{label}</span>}
        <span className={`text-[0.6875rem] font-medium tracking-[0.14em] uppercase ${dark ? "text-white/60" : "text-muted"}`}>{d.slot.todo}</span>
      </div>
    </div>
  );
}

export function SectionHead({ eyebrow, title, lead, center = false, id, light = false }: { eyebrow: string; title: string; lead?: string; center?: boolean; id?: string; light?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "!text-cyan" : ""}`}>{eyebrow}</p>
      <h2 id={id} className="display mt-4 text-[clamp(2rem,3.6vw,3.25rem)]">
        {title}
      </h2>
      {lead && <p className={`lead mt-5 ${light ? "!text-white/75" : ""}`}>{lead}</p>}
    </Reveal>
  );
}

/** Note Google (4,5/5, 91 avis), avec la date du relevé. */
export function Rating({ lang, d, className = "", dark = false }: { lang: Locale; d: Dict; className?: string; dark?: boolean }) {
  const r = site.rating;
  const value = new Intl.NumberFormat(intlLocale[lang], { maximumFractionDigits: 1 }).format(r.value);
  const date = new Intl.DateTimeFormat(intlLocale[lang], { month: "long", year: "numeric" }).format(new Date(r.asOf));
  return (
    <a href={site.maps} target="_blank" rel="noopener" className={`inline-flex items-center gap-2 ${className}`} title={fill(d.rating.asOf, { date })}>
      <span className={`flex ${dark ? "text-[#ffc94d]" : "text-[#c98a00]"}`} aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} />
        ))}
      </span>
      <span>
        {fill(d.rating.label, { value })} · {fill(d.rating.count, { count: r.count })}
      </span>
    </a>
  );
}

/** Horaires de la semaine (data/horaires.json) et fermetures annoncées. */
export function HoursTable({ lang, d }: { lang: Locale; d: Dict }) {
  const closures = upcomingClosures(new Date().toISOString().slice(0, 10));
  return (
    <div>
      {isAlways() ? (
        <p className="text-[1.0625rem] font-medium">{d.infos.always}</p>
      ) : (
        <table className="w-full text-[0.9375rem]">
          <tbody>
            {weekRows().map((r) => (
              <tr key={r.day} className="border-b border-line last:border-0">
                <th scope="row" className="py-2 text-start font-normal capitalize">
                  {d.days[r.day]}
                </th>
                <td className="py-2 text-end tabular-nums">{r.ranges ? r.ranges.map(([a, b]) => `${hourLabel(a, lang)} – ${hourLabel(b, lang)}`).join(", ") : d.status.closed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {closures.length > 0 && (
        <p className="mt-3 text-[0.875rem] text-muted">
          {d.infos.closures}
          {lang === "fr" ? " : " : ": "}
          {closures
            .map((c) => {
              const f = new Intl.DateTimeFormat(intlLocale[lang], { day: "numeric", month: "long", timeZone: "UTC" });
              const from = f.format(new Date(c.from));
              return `${c.label[lang]} (${c.from === c.to ? from : `${from} – ${f.format(new Date(c.to))}`})`;
            })
            .join(", ")}
        </p>
      )}
    </div>
  );
}

/** Infos pratiques : adresse, carte, horaires, accès et stationnement, téléphone. */
export function InfosBlock({ lang, d }: { lang: Locale; d: Dict }) {
  const i = d.infos;
  return (
    <section id="infos" aria-labelledby="infos-title" className="bg-mist">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:px-10 lg:py-28">
        <div>
          <SectionHead eyebrow={i.eyebrow} title={i.title} id="infos-title" />
          <dl className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
            <div>
              <dt className="eyebrow !text-muted">{i.address}</dt>
              <dd className="mt-3 text-[1.0625rem] leading-relaxed">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </dd>
            </div>
            <div>
              <dt className="eyebrow !text-muted">{i.hours}</dt>
              <dd className="mt-3">
                <HoursTable lang={lang} d={d} />
                <div className="mt-1 text-[0.875rem] text-muted">
                  <OpenStatus />
                </div>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="eyebrow !text-muted">{i.access}</dt>
              <dd className="mt-3 leading-relaxed text-muted">{i.accessText}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="eyebrow !text-muted">{i.phone}</dt>
              <dd className="mt-3 flex flex-wrap items-center gap-3">
                <a href={`tel:${site.tel}`} className="display me-3 text-[1.6rem] tabular-nums hover:text-blue">
                  {site.phone}
                </a>
                <a href={waLink()} target="_blank" rel="noopener" className="btn btn-line !min-h-11 text-ink">
                  <WhatsAppIcon /> {i.whatsapp}
                </a>
              </dd>
            </div>
          </dl>
          <a href={site.directions} target="_blank" rel="noopener" className="btn btn-blue mt-10">
            <RouteIcon /> {i.directions}
          </a>
        </div>
        <Reveal className="min-h-[22rem] overflow-hidden rounded-2xl bg-grey lg:min-h-[30rem]">
          <iframe title={i.mapTitle} src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full min-h-[22rem] border-0 lg:min-h-[30rem]" />
        </Reveal>
      </div>
    </section>
  );
}

export function Faq({ d, className = "" }: { d: Dict; className?: string }) {
  return (
    <section id="faq" aria-labelledby="faq-title" className={`mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 ${className}`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHead eyebrow={d.faq.eyebrow} title={d.faq.title} id="faq-title" />
        <div className="divide-y divide-line border-y border-line">
          {d.faq.items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.0625rem] font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-blue transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a href={`tel:${site.tel}`} className={className}>
      <PhoneIcon /> {site.phone}
    </a>
  );
}
