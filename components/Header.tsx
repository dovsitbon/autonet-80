"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import site from "@/data/site.json";
import { useLocale } from "@/components/providers";
import { Logo } from "@/components/Logo";
import { CloseIcon, MenuIcon, PhoneIcon, RouteIcon, WhatsAppIcon } from "@/components/icons";
import { locales } from "@/lib/locales";
import { href, switchPath } from "@/lib/routes";
import { waLink } from "@/lib/whatsapp";

/** En-tête : navigation à gauche, logo au centre, langue + téléphone + « Itinéraire » à droite (toujours visible). */
export function Header() {
  const { lang, d } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [panelTop, setPanelTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- refermer le menu au changement de page
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mesure du DOM à l'ouverture
    setPanelTop(headerRef.current?.getBoundingClientRect().bottom ?? 0);
  }, [open]);

  const n = d.nav;
  const links = [
    { label: n.services, to: href(lang, "home", "services") },
    { label: n.prix, to: href(lang, "home", "prix") },
    { label: n.pros, to: href(lang, "home", "pros") },
    { label: n.infos, to: href(lang, "home", "infos") },
  ];

  const langSwitch = (
    <nav aria-label={n.lang} className="flex items-center text-[0.8125rem] font-medium">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="text-muted">
              ·
            </span>
          )}
          {l === lang ? (
            <span aria-current="true" className="px-1.5 py-2 text-ink">
              {l.toUpperCase()}
            </span>
          ) : (
            <Link
              href={switchPath(pathname, l)}
              hrefLang={l}
              lang={l}
              onClick={() => {
                document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000; samesite=lax`;
              }}
              className="px-1.5 py-2 text-muted hover:text-ink"
            >
              {l.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );

  return (
    <header ref={headerRef} className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-300 ${scrolled || open ? "shadow-[0_1px_0_var(--color-line)]" : ""}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:start-2 focus:top-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2">
        {n.skip}
      </a>
      <div className="mx-auto grid h-16 max-w-[90rem] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 sm:px-6 lg:h-20 lg:px-10">
        <div className="flex items-center">
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu" className="-ms-2 grid size-11 place-items-center lg:hidden" aria-label={open ? n.close : n.menu}>
            {open ? <CloseIcon className="size-5" /> : <MenuIcon />}
          </button>
          <nav aria-label={n.menu} className="hidden lg:block">
            <ul className="flex items-center gap-x-6 xl:gap-x-8">
              {links.map((l) => (
                <li key={l.to}>
                  <Link href={l.to} className="py-2 text-[0.9375rem] font-medium text-ink/80 transition-colors hover:text-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Link href={href(lang, "home")} aria-label={n.home} className="block text-ink">
          <Logo />
        </Link>

        <div className="flex items-center justify-end gap-1 sm:gap-3">
          <div className="hidden md:block">{langSwitch}</div>
          <a href={`tel:${site.tel}`} className="hidden items-center gap-2 px-2 py-2 text-[0.9375rem] font-medium whitespace-nowrap tabular-nums hover:text-blue xl:inline-flex">
            <PhoneIcon /> {site.phone}
          </a>
          <a href={`tel:${site.tel}`} aria-label={`${n.call} ${site.phone}`} className="grid size-11 place-items-center xl:hidden">
            <PhoneIcon className="size-5" />
          </a>
          <a href={site.directions} target="_blank" rel="noopener" className="btn btn-blue !min-h-10 !px-4 !text-[0.875rem] max-sm:hidden">
            <RouteIcon /> {n.itineraire}
          </a>
        </div>
      </div>

      {open && (
        <div id="menu" style={{ top: panelTop }} className="fade-in fixed inset-x-0 bottom-0 z-40 overflow-y-auto overscroll-contain bg-white px-6 pt-4 pb-32 lg:hidden">
          <nav aria-label={n.menu}>
            <ul className="divide-y divide-line border-b border-line">
              {links.map((l) => (
                <li key={l.to}>
                  <Link href={l.to} onClick={() => setOpen(false)} className="display block py-4 text-[1.75rem]">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={href(lang, "contact")} onClick={() => setOpen(false)} className="display block py-4 text-[1.75rem]">
                  {n.contact}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            {langSwitch}
            <a href={waLink()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[0.9375rem] font-medium">
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
          <a href={`tel:${site.tel}`} className="mt-6 inline-flex items-center gap-2 text-[1.125rem] font-medium tabular-nums">
            <PhoneIcon /> {site.phone}
          </a>
        </div>
      )}
    </header>
  );
}

/** Barre fixée en bas de l'écran sur mobile : « Itinéraire » + « Appeler », toujours visibles. */
export function MobileBar() {
  const { d } = useLocale();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a href={site.directions} target="_blank" rel="noopener" className="btn btn-blue flex-1">
          <RouteIcon /> {d.nav.itineraire}
        </a>
        <a href={`tel:${site.tel}`} className="btn btn-line flex-1 text-ink">
          <PhoneIcon /> {d.nav.call}
        </a>
      </div>
    </div>
  );
}
