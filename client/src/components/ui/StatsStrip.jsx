/**
 * A row of key numbers. `stats` is an array of { value, label }.
 * Every number passed in should be real — this renders whatever
 * it's given, it doesn't invent figures.
 */
export default function StatsStrip({ stats, className = '' }) {
  return (
    <div className={`grid grid-cols-2 divide-x divide-base-300 rounded-box border border-base-300 bg-base-100 sm:grid-cols-4 ${className}`}>
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="rv rv-scale flex flex-col items-center gap-1 px-4 py-7 text-center"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <span className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold text-primary">
            {s.value}
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-base-content/50">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
