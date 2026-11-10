// Pictos au trait, dessinés pour le site (1,5 px, bouts arrondis).
type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const PhoneIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 4h3.2l1.6 4-2 1.3a10 10 0 0 0 6.9 6.9l1.3-2 4 1.6V19a1.8 1.8 0 0 1-1.9 1.8C10.4 20.3 3.7 13.6 3.2 5.9A1.8 1.8 0 0 1 5 4Z" />
  </svg>
);
export const WhatsAppIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 20l1.2-3.9A8.2 8.2 0 1 1 8 18.9L4 20Z" />
    <path d="M9 8.6c0 3 2.4 5.9 5.6 6.4l1.2-1.4-1.9-1-1 .9c-1-.4-2-1.4-2.4-2.4l.9-1-1-1.9L9 8.6Z" />
  </svg>
);
export const RouteIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);
export const ArrowIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 12h15M14 7l5 5-5 5" />
  </svg>
);
export const CloseIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const MenuIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const CheckIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="m5 12.5 4.2 4L19 7" />
  </svg>
);
export const StarIcon = ({ className = "size-3.5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="m12 3 2.7 5.6 6.1.8-4.5 4.3 1.1 6L12 16.8l-5.4 2.9 1.1-6-4.5-4.3 6.1-.8L12 3Z" />
  </svg>
);
export const DropIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3.5s-6 6.6-6 11a6 6 0 0 0 12 0c0-4.4-6-11-6-11Z" />
  </svg>
);

/* — Tuiles et bande de services — */
export const JetIcon = ({ className = "size-10" }: P) => (
  <svg viewBox="0 0 48 48" className={className} {...base}>
    <path d="M6 30h12l3-4h6v8h-6l-3-4" />
    <path d="M10 30v8M27 28h2l4-2M27 32h2l4 2" />
    <path d="M36 22l6-3M37 26h7M36 30l6 3" />
    <path d="M14 22c0-3 2-5 2-5s2 2 2 5a2 2 0 0 1-4 0Z" />
  </svg>
);
export const RollerIcon = ({ className = "size-10" }: P) => (
  <svg viewBox="0 0 48 48" className={className} {...base}>
    <path d="M8 40V12a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v28" />
    <rect x="12" y="13" width="6" height="20" rx="3" />
    <rect x="30" y="13" width="6" height="20" rx="3" />
    <path d="M13 18h4M13 23h4M13 28h4M31 18h4M31 23h4M31 28h4M4 40h40" />
  </svg>
);
export const VacuumIcon = ({ className = "size-10" }: P) => (
  <svg viewBox="0 0 48 48" className={className} {...base}>
    <rect x="8" y="10" width="14" height="28" rx="3" />
    <path d="M12 16h6M12 20h6" />
    <path d="M22 18c8 0 10 4 10 10v6" />
    <path d="M28 34h8l3 4H25l3-4Z" />
    <path d="M8 42h16" />
  </svg>
);
export const MatIcon = ({ className = "size-10" }: P) => (
  <svg viewBox="0 0 48 48" className={className} {...base}>
    <path d="M12 8h22l4 30a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3l4-30Z" />
    <path d="M14 14h18M14.5 20h17M15 26h16M15.5 32h15" />
  </svg>
);
export const BottleIcon = ({ className = "size-10" }: P) => (
  <svg viewBox="0 0 48 48" className={className} {...base}>
    <path d="M18 6h8v6l4 4v24a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3V16l4-4V6Z" />
    <path d="M14 22h16M14 32h16M26 6h6l2 3" />
  </svg>
);
export const VanIcon = ({ className = "size-10" }: P) => (
  <svg viewBox="0 0 48 48" className={className} {...base}>
    <path d="M4 33V15a3 3 0 0 1 3-3h22v21" />
    <path d="M29 18h7l6 7v8h-3M29 33h-12M4 33h3" />
    <circle cx="12" cy="34" r="3.5" />
    <circle cx="35" cy="34" r="3.5" />
    <path d="M32 18v7h10" />
  </svg>
);
export const ClockIcon = ({ className = "size-8" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <circle cx="16" cy="16" r="12" />
    <path d="M16 9v7l4.5 3" />
  </svg>
);
export const CalendarIcon = ({ className = "size-8" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <rect x="5" y="7" width="22" height="20" rx="3" />
    <path d="M5 13h22M11 4v6M21 4v6M10 18h2M15 18h2M20 18h2M10 22h2M15 22h2M20 22h2" />
  </svg>
);
export const CardIcon = ({ className = "size-8" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <rect x="4" y="8" width="24" height="16" rx="3" />
    <path d="M4 13h24M8 19h6" />
  </svg>
);
export const BayIcon = ({ className = "size-8" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <path d="M5 28V6M27 28V6" />
    <path d="M10 22l1.5-4.5A2 2 0 0 1 13.4 16h5.2a2 2 0 0 1 1.9 1.5L22 22v3h-12v-3Z" />
    <path d="M8 4l-3 2M24 4l3 2" />
  </svg>
);
