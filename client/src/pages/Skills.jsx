import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { useReveal } from '../lib/useReveal';
import SectionHeading from '../components/ui/SectionHeading';
import SkillCard from '../components/cards/SkillCard';
import CtaBanner from '../components/ui/CtaBanner';
import { LoadingState, ErrorState } from '../components/ui/StatusState';

export default function Skills() {
  const [groups, setGroups] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    api.getSkills()
      .then((data) => { setGroups(data); setStatus('ready'); })
      .catch(() => setStatus('error'));
  }, []);

  useReveal([groups]);

  const totalItems = groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div className="pb-16 md:pb-24">
      <SectionHeading
        recordNo="02"
        label="Skills"
        title="The working stack."
        subtitle="Tools and languages used in active projects — grouped by where they sit in the stack."
      />

      <div className="mx-auto max-w-6xl px-6 pt-12 md:pt-20">
        <div>
        {status === 'loading' && <LoadingState label="Loading skills…" />}
        {status === 'error' && <ErrorState />}

        {status === 'ready' && (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {groups.map((g, i) => (
                <SkillCard key={g.id} group={g.group} items={g.items} index={i} />
              ))}
            </div>

            {/* ───────── How I evaluate skills ───────── */}
            <div className="mt-24 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
              <div className="rv">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
                  How to Read This
                </span>
                <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                  {groups.length} categories, {totalItems || '—'} tools.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-base-content/60">
                  Every item listed here is something used in a shipped project —
                  not a "familiar with" list. Grouped by where it sits in the
                  stack: interface, server, mobile, and the tools that hold it
                  all together.
                </p>
              </div>

              <div className="rv rv-d2 grid gap-4 sm:grid-cols-2">
                <div className="rounded-box border border-base-300 bg-base-100 p-5">
                  <h3 className="font-display text-base font-semibold">Comfortable</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-base-content/55">
                    Used daily, deep enough to debug and architect with — React,
                    Next.js, Node.js, MySQL.
                  </p>
                </div>
                <div className="rounded-box border border-base-300 bg-base-100 p-5">
                  <h3 className="font-display text-base font-semibold">Actively growing</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-base-content/55">
                    Kotlin and Jetpack Compose for Android — newer territory,
                    already shipping working apps.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <CtaBanner
        eyebrow="See It In Action"
        title="Skills mean nothing without shipped work."
        subtitle="Here's where this stack actually got used."
        ctaLabel="View Projects"
        ctaTo="/projects"
      />
      </div>
    </div>
  )
}
