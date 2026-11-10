import Link from "next/link";
import site from "@/data/site.json";
import type { Dict, Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { waLink } from "@/lib/whatsapp";
import { Logo } from "@/components/Logo";
import { PhoneIcon, RouteIcon, WhatsAppIcon } from "@/components/icons";

export function Footer({ lang, d }: { lang: Locale; d: Dict }) {
  const f = d.footer;
  const pages = [
    { label: d.pages.camon.slugLabel, to: href(lang, "camon") },
    { label: d.pages.h24.slugLabel, to: href(lang, "h24") },
    { label: d.nav.prix, to: href(lang, "home", "prix") },
    { label: d.nav.pros, to: href(lang, "home", "pros") },
    { label: d.nav.contact, to: href(lang, "contact") },
  ];
  return (
    <footer className="bg-navy pb-24 text-white/80 sm:pb-0">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10 lg:py-20">
        <div>
          <Link href={href(lang, "home")} aria-label={d.nav.home} className="inline-block text-white">
            <Logo light />
          </Link>
          <p className="mt-6 max-w-xs leading-relaxed text-white/70">{f.tagline}</p>
        </div>
        <div>
          <h2 className="text-[0.75rem] font-medium tracking-[0.14em] text-cyan uppercase">{f.visit}</h2>
          <address className="mt-4 leading-relaxed not-italic">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </address>
          <p className="mt-3">{d.infos.always}</p>
          <a href={site.directions} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 text-white hover:text-cyan">
            <RouteIcon /> {d.nav.itineraire}
          </a>
        </div>
        <div>
          <h2 className="text-[0.75rem] font-medium tracking-[0.14em] text-cyan uppercase">{f.contact}</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={`tel:${site.tel}`} className="inline-flex items-center gap-2 tabular-nums hover:text-white">
                <PhoneIcon /> {site.phone}
              </a>
            </li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-white">
                <WhatsAppIcon /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[0.75rem] font-medium tracking-[0.14em] text-cyan uppercase">{f.pages}</h2>
          <ul className="mt-4 space-y-3">
            {pages.map((p) => (
              <li key={p.to}>
                <Link href={p.to} className="hover:text-white">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-3 px-5 py-6 text-[0.8125rem] text-white/60 sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} {site.fullName}. {f.rights}
          </p>
          <Link href={href(lang, "legal")} className="hover:text-white">
            {f.legal}
          </Link>
        </div>
      </div>
    </footer>
  );
}
