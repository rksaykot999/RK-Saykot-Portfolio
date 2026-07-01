import { Code2, Server, Smartphone, Wrench, Sparkles } from 'lucide-react';
import Tag from '../ui/Tag';

const GROUP_ICON = {
  Frontend: Code2,
  Backend: Server,
  Mobile: Smartphone,
  'Tools & Platforms': Wrench,
  Other: Sparkles,
};

export default function SkillCard({ group, items, index }) {
  const Icon = GROUP_ICON[group] || Sparkles;

  return (
    <div
      className="rv group rounded-box border border-base-300 bg-base-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-field border border-base-300 bg-base-200 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <div>
          <span className="block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-base-content/40">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-display text-lg font-semibold leading-tight">{group}</h3>
        </div>
      </div>

      <hr className="my-5 border-base-300" />

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  );
}
