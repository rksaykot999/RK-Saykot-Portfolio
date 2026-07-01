import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const STORAGE_KEY = 'saykot-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'ledgerlight';
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'ledgerdark'
    : 'ledgerlight';
}

/**
 * A ledger-styled theme switch: a small index-card "flip" between
 * LIGHT and DARK records. Persists the choice to localStorage.
 */
export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const isDark = theme === 'ledgerdark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'ledgerlight' : 'ledgerdark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} record`}
      className={`group inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/60 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-base-content/70 transition-colors hover:border-primary/50 hover:text-primary ${className}`}
    >
      {isDark ? <Moon size={13} strokeWidth={2} /> : <Sun size={13} strokeWidth={2} />}
      <span>{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}
