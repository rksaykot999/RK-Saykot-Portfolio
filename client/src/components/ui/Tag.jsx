/**
 * Small mono-set tag used for tech stacks, skill items, and category
 * labels throughout the site. `tone` maps to daisyUI semantic colors.
 */
const TONES = {
  neutral: 'border-base-300 bg-base-100/70 text-base-content/70',
  primary: 'border-primary/30 bg-primary/10 text-primary',
  secondary: 'border-secondary/30 bg-secondary/10 text-secondary',
  accent: 'border-accent/30 bg-accent/10 text-accent',
};

export default function Tag({ children, tone = 'neutral', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-field border px-2.5 py-1 font-mono text-[0.72rem] leading-none tracking-tight ${TONES[tone] || TONES.neutral} ${className}`}
    >
      {children}
    </span>
  );
}
