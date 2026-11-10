"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/providers";
import { CloseIcon } from "@/components/icons";
import { activeAnnouncement, parisNow, type Annonce } from "@/lib/shop";
import { href, type PageId } from "@/lib/routes";

const KEY = "autonet80-annonce";

/** Bandeau d'infos pratiques (data/annonces.json : « Ouvert 24 h/24 » par défaut, ou une fermeture datée), qu'on peut fermer. */
export function AnnounceBar() {
  const { lang, d } = useLocale();
  const [a, setA] = useState<Annonce | null>(null);

  useEffect(() => {
    const next = activeAnnouncement(parisNow().iso);
    let closed = false;
    try {
      closed = !!next && localStorage.getItem(KEY) === next.id;
    } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage, lisible seulement après hydratation
    setA(closed ? null : next);
  }, []);

  if (!a) return null;

  const close = () => {
    try {
      localStorage.setItem(KEY, a.id);
    } catch {}
    setA(null);
  };

  const to = href(lang, a.page as PageId | "home", a.hash ?? "");

  return (
    <div className="fade-in relative bg-navy text-white">
      <p className="mx-auto max-w-6xl px-12 py-2 text-center text-[0.8125rem] leading-snug">
        {a.text[lang]}{" "}
        <Link href={to} className="link-line ms-1 whitespace-nowrap text-cyan">
          {a.link[lang]}
        </Link>
      </p>
      <button type="button" onClick={close} aria-label={d.announce.close} className="absolute end-1 top-1/2 grid size-10 -translate-y-1/2 place-items-center opacity-75 hover:opacity-100">
        <CloseIcon />
      </button>
    </div>
  );
}
