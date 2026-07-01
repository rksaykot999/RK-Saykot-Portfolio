import { ArrowUpRight, Globe, Smartphone } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import Tag from '../ui/Tag';

const TYPE_ICON = {
  'Web App': Globe,
  'Mobile App': Smartphone,
};

export default function ProjectCard({ project, index }) {
  const TypeIcon = TYPE_ICON[project.type] || Globe;
  const hasLinks = project.links?.demo || project.links?.github;

  return (
    <article
      className="rv group relative flex h-full flex-col overflow-hidden rounded-box border border-base-300 bg-base-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-base-content/40">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-field border border-base-300 bg-base-200 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wide text-base-content/60">
          <TypeIcon size={12} />
          {project.type}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
        {project.name}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-base-content/60">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t} tone="primary">{t}</Tag>
        ))}
      </div>

      {hasLinks && (
        <div className="mt-5 flex gap-4 border-t border-base-300 pt-4 font-mono text-xs">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-base-content/60 transition-colors hover:text-primary"
            >
              Live <ArrowUpRight size={13} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-base-content/60 transition-colors hover:text-primary"
            >
              <GithubIcon size={13} /> Code
            </a>
          )}
        </div>
      )}
    </article>
  );
}
