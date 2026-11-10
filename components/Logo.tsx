// Logo provisoire (aucun logo officiel fourni) : une goutte au trait qui contient une voiture stylisée,
// et « AUTONET 80 » en Archivo large. À remplacer par le vrai logo : public/logo.svg et app/icon.svg.
export function Mark({ className = "h-9 w-auto", stroke = "currentColor", accent = "var(--color-cyan)" }: { className?: string; stroke?: string; accent?: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 3S6 19.5 6 30a14 14 0 0 0 28 0C34 19.5 20 3 20 3Z" stroke={stroke} strokeWidth="2.6" />
      <path d="M11.5 34.5h17M12.6 34.5l1.7-4.3a2 2 0 0 1 1.9-1.3h7.6a2 2 0 0 1 1.9 1.3l1.7 4.3" stroke={accent} strokeWidth="2.2" />
      <path d="M15 37.6v.1M25 37.6v.1" stroke={accent} strokeWidth="3" />
    </svg>
  );
}

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} translate="no">
      <Mark className="h-9 w-auto shrink-0 sm:h-10" stroke={light ? "#fff" : "var(--color-blue)"} accent={light ? "var(--color-cyan)" : "var(--color-ink)"} />
      <span className="flex flex-col leading-none">
        <span className="wide text-[1.15rem] italic sm:text-[1.3rem]">
          Autonet <span className={light ? "text-cyan" : "text-blue"}>80</span>
        </span>
        <span className={`mt-1 text-[0.5625rem] font-medium tracking-[0.2em] uppercase ${light ? "text-white/65" : "text-muted"}`}>by ABCD Lavage</span>
      </span>
    </span>
  );
}
