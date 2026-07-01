import { Link } from 'react-router-dom';
import { Mail, ArrowUp, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './ui/BrandIcons';

const socials = [
  { href: 'https://github.com/rksaykot999', label: 'GitHub', Icon: GithubIcon },
  { href: 'mailto:rksaikatkhan999@gmail.com', label: 'Email', Icon: Mail },
  { href: 'https://www.facebook.com/rksaykot999/', label: 'Facebook', Icon: FacebookIcon },
  { href: '#', label: 'LinkedIn', Icon: LinkedinIcon },
];

const columns = [
  {
    heading: 'Navigate',
    links: [
      { to: '/about', label: 'About' },
      { to: '/skills', label: 'Skills' },
      { to: '/projects', label: 'Projects' },
    ],
  },
  {
    heading: 'Record',
    links: [
      { to: '/experience', label: 'Experience' },
      { to: '/certification', label: 'Certification' },
      { to: '/contact', label: 'Contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-base-300 bg-base-200/40">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 text-base-content/[0.04]" />

      {/* CTA block */}
      <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-16 md:pt-20">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-base-300 pb-14 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
              Open to work
            </span>
            <h2 className="mt-3 max-w-xl text-balance font-display text-[clamp(1.8rem,4vw,2.75rem)] font-semibold leading-tight">
              Got a project worth building well?
            </h2>
          </div>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-base-300 bg-base-100 px-6 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary"
          >
            Start a conversation
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Link grid */}
        <div className="grid gap-10 pt-14 sm:grid-cols-2 md:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link to="/" className="font-display text-lg font-semibold tracking-tight">
              SAYKOT
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-base-content/55">
              Full-stack developer building web and mobile products end to end —
              from Barisal, Bangladesh.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-base-content/35">
                {col.heading}
              </span>
              {col.links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="w-fit text-sm text-base-content/60 transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-base-content/35">
              Connect
            </span>
            <div className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-base-300 bg-base-100 text-base-content/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-base-300">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-4 px-6 py-6 font-mono text-xs text-base-content/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Muhammad Saykot. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            Back to top
            <span className="grid h-6 w-6 place-items-center rounded-full border border-base-300 transition-colors group-hover:border-primary">
              <ArrowUp size={11} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
