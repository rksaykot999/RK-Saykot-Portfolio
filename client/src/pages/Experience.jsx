import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { useReveal } from '../lib/useReveal';
import SectionHeading from '../components/ui/SectionHeading';
import ExperienceItem from '../components/cards/ExperienceItem';
import CtaBanner from '../components/ui/CtaBanner';
import { LoadingState, ErrorState } from '../components/ui/StatusState';
import { Users, PenLine } from 'lucide-react';

const beyondResume = [
  {
    icon: Users,
    title: 'Independent tutoring',
    d: 'Teaching programming fundamentals to students outside of formal employment — ongoing, alongside full-time work.',
  },
  {
    icon: PenLine,
    title: 'Bengali creative writing',
    d: 'Publishing short stories and poetry on Asom Aptogolpo Kobitar Bhandar, a personal writing project.',
  },
];

export default function Experience() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    api.getExperience()
      .then((data) => { setItems(data); setStatus('ready'); })
      .catch(() => setStatus('error'));
  }, []);

  useReveal([items]);

  return (
    <div className="pb-16 md:pb-24">
      <SectionHeading
        recordNo="04"
        label="Experience"
        title="Where the work has happened."
        subtitle="Current role, ongoing work, and the education running alongside it."
      />

      <div className="mx-auto max-w-6xl px-6 pt-12 md:pt-20">
        <div className="max-w-2xl">
        {status === 'loading' && <LoadingState label="Loading experience…" />}
        {status === 'error' && <ErrorState />}

        {status === 'ready' && (
          <div>
            {items.map((item, i) => (
              <ExperienceItem
                key={item.id}
                item={item}
                index={i}
                isLast={i === items.length - 1}
              />
            ))}
          </div>
        )}
      </div>

      {/* ───────── Beyond the resume ───────── */}
      <div className="mt-16 max-w-2xl border-t border-base-300 pt-14">
        <div className="rv">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
            Beyond the Resume
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold">
            Work that doesn't show up in a job title.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {beyondResume.map(({ icon: Icon, title, d }, i) => (
            <div
              key={title}
              className="rv rv-right rounded-box border border-base-300 bg-base-100 p-6"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-field border border-base-300 bg-base-200 text-primary">
                <Icon size={17} strokeWidth={1.75} />
              </span>
              <h3 className="mt-3 font-display text-base font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-base-content/60">{d}</p>
            </div>
          ))}
        </div>
      </div>

      <CtaBanner
        eyebrow="Credentials On File"
        title="21 certifications back this experience up."
        subtitle="From programming to public health reporting — the full transcript."
        ctaLabel="View Certifications"
        ctaTo="/certification"
      />
      </div>
    </div>
  )
}
