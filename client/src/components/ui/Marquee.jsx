/**
 * Continuous auto-scrolling strip of words/tags — used on Home to give
 * a quick, ambient read of the stack without another static list.
 * `items` is duplicated internally so the loop has no visible seam.
 */
export default function Marquee({ items }) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-base-300 bg-base-200/40 py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.1em] text-base-content/40"
          >
            {item}
            <span className="text-primary/50">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
