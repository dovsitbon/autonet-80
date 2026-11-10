"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import site from "@/data/site.json";
import { useLocale } from "@/components/providers";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { waLink } from "@/lib/whatsapp";

type Motif = "question" | "panne" | "pros";
const MOTIFS: Motif[] = ["question", "panne", "pros"];
type Errors = Partial<Record<"message" | "name" | "phone" | "machine", string>>;

/**
 * Formulaire de contact : motif (question, panne d'une machine, professionnels), message, nom, téléphone.
 * Rien n'est stocké : on ouvre WhatsApp (wa.me/33784769604) avec un récapitulatif bien présenté.
 * Le motif peut être prérempli par l'adresse : ?motif=panne ou ?motif=pros.
 */
export function ContactForm({ initialMotif = "question" }: { initialMotif?: Motif }) {
  const { d } = useLocale();
  const c = d.contact;
  const uid = useId();
  const reduce = useReducedMotion();
  const [motif, setMotif] = useState<Motif>(initialMotif);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const m = new URLSearchParams(window.location.search).get("motif");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- motif prérempli par l'adresse, lu après hydratation
    if (m && (MOTIFS as string[]).includes(m)) setMotif(m as Motif);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("message")) next.message = c.required;
    if (!v("name")) next.name = c.required;
    if (!v("phone")) next.phone = c.required;
    else if (v("phone").replace(/\D/g, "").length < 9) next.phone = c.phoneInvalid;
    if (motif === "panne" && !v("machine")) next.machine = c.required;
    setErrors(next);
    if (Object.keys(next).length) {
      e.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }
    const w = c.wa;
    const lines = [
      `*${w.title}*`,
      "",
      `*${w.motif} :* ${c.motifs[motif]}`,
      motif === "panne" ? `*${w.machine} :* ${v("machine")}` : null,
      motif === "pros" && v("fleet") ? `*${w.fleet} :* ${v("fleet")}` : null,
      "",
      `*${w.message} :*`,
      v("message"),
      "",
      `*${w.name} :* ${v("name")}`,
      `*${w.phone} :* ${v("phone")}`,
    ].filter((l) => l !== null);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  };

  const field = (name: keyof Errors) => ({
    id: `${uid}-${name}`,
    name,
    "aria-invalid": errors[name] ? ("true" as const) : undefined,
    "aria-describedby": errors[name] ? `${uid}-${name}-err` : undefined,
  });
  const err = (name: keyof Errors) =>
    errors[name] ? (
      <p id={`${uid}-${name}-err`} className="mt-1.5 text-[0.8125rem] text-[#b3261e]">
        {errors[name]}
      </p>
    ) : null;
  const anim = reduce ? {} : { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.25 } };

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      <fieldset>
        <legend className="label">{c.motif}</legend>
        <div className="flex flex-wrap gap-2">
          {MOTIFS.map((m) => (
            <label key={m} className="chip">
              <input type="radio" name="motif" value={m} checked={motif === m} onChange={() => setMotif(m)} className="sr-only" />
              {c.motifs[m]}
            </label>
          ))}
        </div>
      </fieldset>

      <AnimatePresence initial={false} mode="popLayout">
        {motif === "panne" && (
          <motion.div key="machine" {...anim} className="overflow-hidden">
            <label htmlFor={`${uid}-machine`} className="label">
              {c.machine}
            </label>
            <input {...field("machine")} type="text" className="field" placeholder={c.machinePlaceholder} autoComplete="off" />
            {err("machine")}
          </motion.div>
        )}
        {motif === "pros" && (
          <motion.div key="fleet" {...anim} className="overflow-hidden">
            <label htmlFor={`${uid}-fleet`} className="label">
              {c.fleet}
            </label>
            <input id={`${uid}-fleet`} name="fleet" type="text" className="field" placeholder={c.fleetPlaceholder} autoComplete="off" />
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <label htmlFor={`${uid}-message`} className="label">
          {c.message}
        </label>
        <textarea {...field("message")} rows={4} className="field resize-y" placeholder={c.messagePlaceholder} />
        {err("message")}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className="label">
            {c.name}
          </label>
          <input {...field("name")} type="text" className="field" autoComplete="name" />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className="label">
            {c.phone}
          </label>
          <input {...field("phone")} type="tel" inputMode="tel" className="field" autoComplete="tel" />
          {err("phone")}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button type="submit" className="btn btn-blue">
          <WhatsAppIcon /> {c.send}
        </button>
        <a href={`tel:${site.tel}`} className="btn btn-line text-ink">
          <PhoneIcon /> {c.call} · <span className="tabular-nums">{site.phone}</span>
        </a>
      </div>
      <p className="text-[0.8125rem] text-muted">{c.privacy}</p>
      <div aria-live="polite">
        {sent && (
          <p className="fade-in flex items-start gap-2 rounded-xl bg-mist p-4 text-[0.9375rem]">
            <CheckIcon className="mt-0.5 size-5 shrink-0 text-blue" /> {c.sent}
          </p>
        )}
      </div>
    </form>
  );
}
