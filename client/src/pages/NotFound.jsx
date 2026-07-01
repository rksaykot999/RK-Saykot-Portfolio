import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const shortcuts = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function NotFound() {
  return (
    <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 text-base-content/[0.05]" />

      <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-primary">
        Record Not Found
      </span>
      <h1 className="mt-4 font-display text-[clamp(3.5rem,12vw,7rem)] font-semibold leading-none">
        404
      </h1>
      <p className="mt-4 max-w-sm text-base-content/55">
        This page isn't in the ledger.
      </p>
      <Link to="/" className="btn btn-primary mt-8 rounded-full font-mono text-sm normal-case">
        <ArrowLeft size={15} /> Back to Home
      </Link>

      <div className="relative mt-10 flex flex-wrap items-center justify-center gap-2">
        {shortcuts.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="rounded-full border border-base-300 px-4 py-1.5 font-mono text-xs text-base-content/60 transition-colors hover:border-primary/40 hover:text-primary"
          >
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
