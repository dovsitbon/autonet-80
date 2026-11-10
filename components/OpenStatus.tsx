"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/providers";
import { fill } from "@/lib/i18n";
import { hourLabel, openStatus, type OpenStatus as S } from "@/lib/shop";

/** « Ouvert maintenant, 24 h/24 » ou, en cas de fermeture annoncée, « Fermé, réouverture demain à 0 h ». En direct (heure de Paris). */
export function OpenStatus({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const { lang, d } = useLocale();
  const [s, setS] = useState<S | null>(null);

  useEffect(() => {
    const tick = () => setS(openStatus());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!s) return <span className={`inline-block min-h-[1.5em] ${className}`} aria-hidden="true" />;

  const t = d.status;
  let text: string;
  if (s.open) text = s.always ? t.always : `${t.open}, ${fill(t.until, { time: hourLabel(s.until === "24:00" ? "00:00" : s.until, lang) })}`;
  else if (s.nextDay === null) text = t.closed;
  else {
    const day = s.offset === 0 ? t.today : s.offset === 1 ? t.tomorrow : d.days[s.nextDay];
    text = `${t.closed}, ${fill(t.reopens, { day, time: hourLabel(s.at, lang) })}`;
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`} role="status">
      <span className="relative flex size-2" aria-hidden="true">
        <span className={`size-2 rounded-full ${s.open ? (dark ? "bg-[#5fd38d]" : "bg-[#1f8f4e]") : "bg-[#b3261e]"}`} />
      </span>
      {text}
    </span>
  );
}
