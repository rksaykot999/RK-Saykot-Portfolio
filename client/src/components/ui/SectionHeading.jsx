/**
 * Record-style page header. The "Record No." eyebrow is a structural
 * device borrowed from the ledger metaphor: each page IS a real,
 * distinct entry in a personal dossier, so the numbering carries
 * genuine information rather than decoration.
 */
export default function SectionHeading({ recordNo, label, title, subtitle, className = '' }) {
  return (
    <section className={`relative overflow-hidden border-b border-base-300 ${className} text-center`}>
      <div className="bg-dot-grid pointer-events-none absolute inset-0 text-base-content/[0.06]" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 ">
        <div className="rv mb-4 inline-flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
          {label}
        </div>
        <h1 className="rv rv-d1 text-[clamp(2.5rem,5vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-base-content">
          {title}
        </h1>
        {subtitle && (
          <p className="rv rv-d2 mx-auto mt-5 max-w-2xl text-[1.1rem] leading-relaxed text-base-content/65">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
