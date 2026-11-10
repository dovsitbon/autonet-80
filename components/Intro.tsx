"use client";

import { useEffect, useState, type CSSProperties } from "react";

const KEY = "autonet80-intro";
const at = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;
// Bulles : décalage final (x, y) en px, rayon, départ
const BUBBLES: [number, number, number, number][] = [
  [-46, -30, 5, 0.34],
  [-28, -54, 3.5, 0.36],
  [-8, -40, 2.5, 0.35],
  [14, -58, 4, 0.37],
  [34, -36, 6, 0.34],
  [52, -16, 3, 0.38],
  [-58, -8, 3, 0.37],
  [24, -14, 2.2, 0.39],
];

/**
 * Ouverture (1,2 s max, une fois par session), en CSS (globals.css) : fond blanc, une goutte tombe et éclate en bulles
 * bleues, « AUTONET 80 » apparaît puis « 24 H/24 », fondu sur le hero. Bouton « Passer ».
 * Ignorée si l'utilisateur préfère réduire les animations (script en tête du layout).
 */
export function Intro({ skipLabel }: { skipLabel: string }) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      document.documentElement.classList.add("intro-seen");
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="intro-curtain flex flex-col items-center justify-center text-ink">
      <svg aria-hidden="true" viewBox="-80 -80 160 100" className="h-28 w-auto overflow-visible" fill="none">
        <path className="intro-drop" d="M0 -26S-11 -12 -11 -3a11 11 0 0 0 22 0C11 -12 0 -26 0 -26Z" fill="var(--color-blue)" />
        <ellipse className="intro-ring" cx="0" cy="8" rx="26" ry="6" stroke="var(--color-cyan)" strokeWidth="1.5" />
        {BUBBLES.map(([x, y, r, d], i) => (
          <circle key={i} className="intro-bubble" cx="0" cy="0" r={r} fill={i % 3 ? "none" : "var(--color-blue)"} stroke={i % 3 ? "var(--color-blue)" : "none"} strokeWidth="1.4" style={{ ...at(d), "--x": `${x}px`, "--y": `${y}px` } as CSSProperties} />
        ))}
      </svg>
      <p className="intro-fade wide mt-2 text-[2rem] italic sm:text-[2.6rem]" style={at(0.5)} translate="no" aria-hidden="true">
        Autonet <span className="text-blue">80</span>
      </p>
      <p className="intro-fade mt-3 text-[0.8125rem] font-medium tracking-[0.3em] text-muted" style={at(0.66)} translate="no" aria-hidden="true">
        24 H/24
      </p>
      <button
        type="button"
        onClick={() => {
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {}
          document.documentElement.classList.add("intro-seen");
          setGone(true);
        }}
        className="absolute end-4 bottom-4 min-h-11 px-4 text-[0.875rem] text-muted transition-colors hover:text-ink"
      >
        {skipLabel}
      </button>
    </div>
  );
}
