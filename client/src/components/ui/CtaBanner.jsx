import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * A closing call-to-action block, used at the bottom of most pages to
 * keep the visitor moving toward Contact instead of dead-ending.
 */
export default function CtaBanner({
  eyebrow = "Let's Work Together",
  title = 'Have a project in mind?',
  subtitle = "I'm currently open to freelance work and full-time roles.",
  ctaLabel = 'Get in touch',
  ctaTo = '/contact',
}) {
  return (
    <div className="rv relative mt-24 overflow-hidden rounded-box border border-base-300 bg-base-200/40 px-8 py-14 text-center md:px-16 md:py-18">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 text-base-content/[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </span>
        <h2 className="mx-auto mt-3 max-w-lg text-balance font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-semibold leading-tight">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-base-content/60">
          {subtitle}
        </p>
        <Link
          to={ctaTo}
          className="btn btn-primary mt-7 rounded-full px-7 font-mono text-sm normal-case"
        >
          {ctaLabel} <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
