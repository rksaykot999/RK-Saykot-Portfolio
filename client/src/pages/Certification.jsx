import { useEffect, useMemo, useState } from 'react';
import { api } from '../lib/api';
import { useReveal } from '../lib/useReveal';
import SectionHeading from '../components/ui/SectionHeading';
import { CertificationGroup } from '../components/cards/CertificationGroup';
import StatsStrip from '../components/ui/StatsStrip';
import CtaBanner from '../components/ui/CtaBanner';
import { LoadingState, ErrorState } from '../components/ui/StatusState';

const CATEGORY_ORDER = ['Technology', 'Professional Skills', 'Safety & Health', 'Field & Vocational'];

export default function Certification() {
  const [certs, setCerts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [activeCat, setActiveCat] = useState('All');

  useEffect(() => {
    api.getCertifications()
      .then((data) => { setCerts(data); setStatus('ready'); })
      .catch(() => setStatus('error'));
  }, []);

  useReveal([certs, activeCat]);

  const grouped = useMemo(() => {
    const filtered = activeCat === 'All' ? certs : certs.filter((c) => c.category === activeCat);
    const map = {};
    filtered.forEach((c) => {
      map[c.category] = map[c.category] || [];
      map[c.category].push(c);
    });
    return CATEGORY_ORDER.filter((cat) => map[cat]).map((cat) => ({ cat, items: map[cat] }));
  }, [certs, activeCat]);

  const categories = ['All', ...CATEGORY_ORDER];
  const instituteCount = useMemo(
    () => new Set(certs.map((c) => c.institute)).size,
    [certs]
  );

  const stats = [
    { value: certs.length || '—', label: 'Certifications' },
    { value: instituteCount ? `${instituteCount}+` : '—', label: 'Institutes' },
    { value: CATEGORY_ORDER.length, label: 'Categories' },
    { value: '100%', label: 'Completed' },
  ];

  return (
    <div className="pb-16 md:pb-24">
      <SectionHeading
        recordNo="05"
        label="Certification"
        title="21 credentials. 13+ institutes."
        subtitle="A full transcript of completed training — from programming and cyber security to public health reporting and motor driving. Filter by category below."
      />

      <div className="mx-auto max-w-6xl px-6 pt-12 md:pt-20">
        <div>
        <StatsStrip stats={stats} className="rv" />
      </div>

      <div className="mt-14">
        {status === 'loading' && <LoadingState label="Loading certifications…" />}
        {status === 'error' && <ErrorState />}

        {status === 'ready' && (
          <>
            <div className="rv rv-d2 flex flex-wrap gap-2">
              {categories.map((cat) => {
                const count = cat === 'All' ? certs.length : certs.filter((c) => c.category === cat).length;
                const active = activeCat === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={`rounded-full border px-3.5 py-2 font-mono text-xs transition-colors ${
                      active
                        ? 'border-primary bg-primary text-primary-content'
                        : 'border-base-300 bg-base-100 text-base-content/60 hover:border-primary/40 hover:text-primary'
                    }`}
                  >
                    {cat} <span className="opacity-60">({count})</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 space-y-10">
              {grouped.map(({ cat, items }) => (
                <CertificationGroup key={cat} category={cat} items={items} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ───────── Why so many ───────── */}
      <div className="mt-24 rounded-box border border-base-300 bg-base-200/40 p-8 md:p-10">
        <div className="rv grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
            Why So Many
          </span>
          <p className="text-[1.02rem] leading-relaxed text-base-content/65">
            Certifications aren't the goal — they're the byproduct of actually
            finishing what I start. If a skill is worth having, it's worth
            proving I have it. That mindset covers the obvious stuff
            (programming, cyber hygiene) and the less obvious stuff too
            (public health reporting, motor driving) — because staying
            curious outside of code makes the code better too.
          </p>
        </div>
      </div>

      <CtaBanner
        eyebrow="See The Skills In Practice"
        title="Credentials are one part of the story."
        subtitle="Here's the working stack these certifications back up."
        ctaLabel="View Skills"
        ctaTo="/skills"
      />
      </div>
    </div>
  )
}
