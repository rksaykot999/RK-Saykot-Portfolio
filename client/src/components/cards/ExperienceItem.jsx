import Tag from '../ui/Tag';

const TYPE_TONE = {
  'Full-time': 'primary',
  Freelance: 'accent',
  Education: 'secondary',
};

export default function ExperienceItem({ item, index, isLast }) {
  return (
    <div className="rv relative grid grid-cols-[auto_1fr] gap-x-6" style={{ transitionDelay: `${index * 80}ms` }}>
      {/* Timeline rail */}
      <div className="relative flex flex-col items-center">
        <span className="z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-primary bg-base-100" />
        {!isLast && <span className="w-px flex-1 bg-base-300" />}
      </div>

      <div className={`pb-12 ${isLast ? 'pb-0' : ''}`}>
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-primary">
          {item.period}
        </span>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="font-display text-xl font-semibold">{item.role}</h3>
          <Tag tone={TYPE_TONE[item.type] || 'neutral'}>{item.type}</Tag>
        </div>
        <p className="mt-1 text-sm font-medium text-base-content/55">{item.org}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-base-content/65">
          {item.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.skills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
