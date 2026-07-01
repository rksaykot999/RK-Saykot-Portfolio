import { useEffect } from 'react';

/**
 * Observes all elements with the `.rv` class within the current page
 * and adds `.in` when they scroll into view. Re-runs whenever `deps`
 * change so it works after async data loads in.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
