import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A thin top-of-viewport progress bar that plays briefly on every
 * route change, giving in-app navigation a felt sense of "loading"
 * even though the route swap itself is instant.
 */
export default function RouteProgress() {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip on initial mount — SiteLoader already covers first paint.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setActive(true);
    const timer = window.setTimeout(() => setActive(false), 500);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!active) return null;

  return (
    <div className="fixed left-0 top-0 z-[70] h-[2.5px] w-full bg-transparent" aria-hidden="true">
      <div className="animate-route-progress h-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
    </div>
  );
}
