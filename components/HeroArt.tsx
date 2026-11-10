/**
 * Visuel du hero tant que la vraie photo de nuit n'est pas prise : une piste de lavage au trait, éclairée,
 * avec une voiture sous le jet. Dessin vectoriel, pas une fausse photo. Masqué sur mobile.
 */
export function HeroArt({ className = "" }: { className?: string }) {
  const drops = Array.from({ length: 22 }, (_, i) => {
    const t = i / 21;
    return { x: 300 + Math.sin(i * 2.3) * 60 + (t - 0.5) * 40, y: 150 + t * 120, r: 1.2 + (i % 3) * 0.6 };
  });
  return (
    <svg viewBox="0 0 600 460" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Halo de la rampe d'éclairage, très léger */}
      <ellipse cx="300" cy="96" rx="210" ry="18" fill="#36c2d8" opacity="0.06" />
      {/* Portique de la piste */}
      <g stroke="#fff" strokeOpacity="0.32" strokeWidth="1.5">
        <path d="M70 420V96M530 420V96M56 88h488M56 104h488" />
        <path d="M90 104v8M150 104v8M210 104v8M270 104v8M330 104v8M390 104v8M450 104v8M510 104v8" />
      </g>
      {/* Lance haute pression */}
      <g stroke="#fff" strokeOpacity="0.55" strokeWidth="1.5">
        <path d="M300 104v26M292 130h16l-3 10h-10Z" />
      </g>
      {/* Jet : arcs et gouttes cyan */}
      <g stroke="#36c2d8" strokeWidth="1.5">
        <path d="M300 142c-10 40-40 80-90 120" opacity="0.7" />
        <path d="M300 142c0 46-6 86-16 122" opacity="0.9" />
        <path d="M300 142c12 40 40 78 86 118" opacity="0.6" />
      </g>
      {drops.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#36c2d8" opacity={0.35 + (i % 4) * 0.15} />
      ))}
      {/* Voiture au trait */}
      <g stroke="#fff" strokeWidth="2" strokeOpacity="0.9">
        <path d="M146 352h-14a10 10 0 0 1-10-10v-24c0-8 5-14 13-16l40-10 44-34c6-4 12-6 20-6h96c9 0 17 3 23 9l38 37 54 8c10 2 18 10 18 20v16a10 10 0 0 1-10 10h-16" />
        <path d="M206 352h168M244 296l30-24h56l30 24ZM296 272v24" />
        <circle cx="176" cy="352" r="28" />
        <circle cx="404" cy="352" r="28" />
        <circle cx="176" cy="352" r="10" strokeOpacity="0.5" />
        <circle cx="404" cy="352" r="10" strokeOpacity="0.5" />
      </g>
      {/* Sol mouillé : reflets */}
      <g stroke="#fff" strokeWidth="1.2">
        <path d="M60 392h480" strokeOpacity="0.25" />
        <path d="M150 404h90M330 404h120M210 414h60M380 414h50" strokeOpacity="0.12" />
      </g>
    </svg>
  );
}
