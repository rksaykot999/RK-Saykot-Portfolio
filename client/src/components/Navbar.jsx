import { NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';

const links = [
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/certification', label: 'Certification' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  const navRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  function moveIndicatorTo(el) {
    if (!el || !navRef.current) return;
    const navBox = navRef.current.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    setIndicator({ left: box.left - navBox.left, width: box.width, visible: true });
  }

  function showActiveIndicator() {
    const activeLink = links.find((l) => pathname.startsWith(l.to));
    const el = activeLink ? linkRefs.current[activeLink.to] : null;
    if (el) moveIndicatorTo(el);
    else setIndicator((i) => ({ ...i, visible: false }));
  }

  useEffect(() => {
    // Wait a frame so refs/layout are ready (fonts, route swap, etc.)
    const raf = requestAnimationFrame(showActiveIndicator);
    window.addEventListener('resize', showActiveIndicator);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', showActiveIndicator);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`pointer-events-auto mx-auto flex max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 ${scrolled
            ? 'border-base-300 bg-base-100/80 shadow-lg shadow-base-content/[0.04] backdrop-blur-xl'
            : 'border-base-300/60 bg-base-100/40 backdrop-blur-md'
          }`}
      >
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0 font-display text-lg font-semibold tracking-tight">
          SAYKOT
        </Link>

        <nav
          ref={navRef}
          onMouseLeave={showActiveIndicator}
          className="relative hidden items-center gap-1 md:flex"
        >
          <span
            className={`absolute top-1/2 h-8 -translate-y-1/2 rounded-full bg-base-content/[0.06] transition-all duration-300 ease-out ${indicator.visible ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ left: indicator.left, width: indicator.width }}
          />
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              ref={(el) => { linkRefs.current[l.to] = el; }}
              onMouseEnter={(e) => moveIndicatorTo(e.currentTarget)}
              className={({ isActive }) =>
                `relative z-10 rounded-full px-3.5 py-1.5 text-sm transition-colors ${isActive ? 'text-primary' : 'text-base-content/65 hover:text-base-content'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <ThemeToggle />
          <Link
            to="/contact"
            className="btn btn-primary btn-sm rounded-full px-4 font-mono text-xs normal-case"
          >
            Contact
          </Link>
        </div>

        <button
          className="grid h-9 w-9 place-items-center rounded-full text-base-content md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`pointer-events-auto fixed inset-0 z-[100] flex flex-col bg-base-100/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-6">
          <Link to="/" onClick={() => setOpen(false)} className="font-display text-xl font-bold tracking-tight">
            SAYKOT
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-base-content/5 text-base-content backdrop-blur-sm transition-colors hover:bg-base-content/10"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 text-base-content/[0.03]" />

        {/* Drawer Content */}
        <div className="flex flex-1 flex-col justify-center px-6 pb-12">
          <nav className="flex flex-col gap-2">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-3xl px-6 py-4 font-display text-2xl font-medium transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary' : 'text-base-content hover:bg-base-content/5'
                  }`
                }
                style={{
                  transitionDelay: open ? `${i * 50 + 100}ms` : '0ms',
                  transform: open ? 'translateY(0)' : 'translateY(24px)',
                  opacity: open ? 1 : 0,
                }}
              >
                {l.label}
                <ArrowUpRight
                  size={24}
                  className={`text-base-content/20 transition-all duration-300 group-hover:text-primary ${open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                    }`}
                  style={{ transitionDelay: open ? `${i * 50 + 150}ms` : '0ms' }}
                />
              </NavLink>
            ))}
          </nav>

          <div
            className="mt-8 flex flex-col gap-4"
            style={{
              transitionDelay: open ? '400ms' : '0ms',
              transform: open ? 'translateY(0)' : 'translateY(24px)',
              opacity: open ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary flex w-full items-center justify-center gap-2 rounded-full py-4 font-mono text-sm normal-case shadow-lg shadow-primary/20"
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </Link>

            <div className="flex items-center justify-between rounded-full bg-base-content/5 px-6 py-2">
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-base-content/60">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
