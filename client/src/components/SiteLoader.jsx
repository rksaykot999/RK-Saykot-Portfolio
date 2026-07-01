import { useEffect, useState } from 'react';

const SESSION_KEY = 'saykot-site-loaded';
const MIN_DISPLAY_MS = 900;

/**
 * One-time splash shown on the first load of a session (not on every
 * client-side navigation — that's RouteProgress's job). Skips itself
 * entirely on repeat visits within the same tab via sessionStorage.
 */
export default function SiteLoader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem(SESSION_KEY);
  });
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);
      window.setTimeout(() => {
        setLeaving(true);
        sessionStorage.setItem(SESSION_KEY, '1');
        window.setTimeout(() => setVisible(false), 450);
      }, wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
      // Safety net in case 'load' never fires in time
      const fallback = window.setTimeout(finish, 2500);
      return () => {
        window.removeEventListener('load', finish);
        window.clearTimeout(fallback);
      };
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-base-100 transition-opacity duration-450 ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="bg-dot-grid pointer-events-none absolute inset-0 text-base-content/[0.05]" />

      <div className="animate-loader-stamp relative flex flex-col items-center">
        <span className="rounded-field border-2 border-primary px-4 py-1.5 font-display text-2xl font-semibold tracking-tight text-base-content">
          SAYKOT
        </span>
        <span className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-base-content/40">
          Opening the ledger
        </span>
      </div>

      <div className="relative h-px w-40 overflow-hidden bg-base-300">
        <div className="animate-loader-bar absolute inset-0 bg-primary" />
      </div>
    </div>
  );
}
