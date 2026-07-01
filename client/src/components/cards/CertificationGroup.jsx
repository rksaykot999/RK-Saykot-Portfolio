export function CertificationGroup({ category, items }) {
  return (
    <div className="rv">
      <h3 className="mb-3 flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-base-content/40">
        {category}
        <span className="h-px flex-1 bg-base-300" />
        <span>{items.length}</span>
      </h3>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {items.map((c) => (
          <CertificationRow key={c.id} cert={c} />
        ))}
      </div>
    </div>
  );
}

function CertificationRow({ cert }) {
  return (
    <div className="group flex items-start gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3.5 transition-colors hover:border-primary/40">
      <span className="mt-0.5 shrink-0 font-mono text-[0.68rem] text-base-content/35">
        {String(cert.id).padStart(2, '0')}
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-base-content group-hover:text-primary">
          {cert.credential}
        </p>
        <p className="mt-0.5 truncate text-xs text-base-content/55">{cert.institute}</p>
      </div>
    </div>
  );
}
