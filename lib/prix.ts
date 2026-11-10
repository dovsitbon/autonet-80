import data from "@/data/prix.json";
import type { L10n } from "@/lib/locales";

export type Programme = { id: string; name: L10n; duration: L10n | null; price: number | null; from: boolean; confirm?: boolean };
export type Category = { id: string; name: L10n; items: Programme[] };
export type Formule = { id: string; name: L10n; pitch: L10n; duration: L10n; price: number | null; includes: string[]; highlight?: boolean };

export const categories = data.categories as Category[];
export const formules = data.formules as Formule[];
export const prixAsOf = data.asOf;
const all = categories.flatMap((c) => c.items);
export const programme = (id: string) => all.find((p) => p.id === id);
/** Prix « à partir de » d'un programme (null si non renseigné). */
export const fromPrice = (id: string) => programme(id)?.price ?? null;
