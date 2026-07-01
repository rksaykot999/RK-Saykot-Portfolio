import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Code2, Layers, Rocket } from 'lucide-react';
import { api } from '../lib/api';
import { useReveal } from '../lib/useReveal';
import Marquee from '../components/ui/Marquee';
import StatsStrip from '../components/ui/StatsStrip';
import CtaBanner from '../components/ui/CtaBanner';
import ProjectCard from '../components/cards/ProjectCard';

const quicklinks = [
  { to: '/skills', label: 'Skills', d: 'Frontend, backend, mobile, and tools — the working stack.' },
  { to: '/projects', label: 'Projects', d: 'Shipped platforms across web and Android.' },
  { to: '/experience', label: 'Experience', d: 'Where the work has happened so far.' },
  { to: '/certification', label: 'Certification', d: '21 credentials across 13+ institutes.' },
];

const stack = ['React', 'Next.js', 'Node.js', 'MySQL', 'Kotlin', 'Jetpack Compose', 'Tailwind CSS', 'Express'];

const approach = [
  {
    icon: Code2,
    title: 'Clean, maintainable code',
    d: 'Modular components and clear structure — code that a future developer (including future me) can actually follow.',
  },
  {
    icon: Layers,
    title: 'End-to-end ownership',
    d: 'Comfortable across the whole stack, from database schema to the pixel on screen — no hand-off gaps.',
  },
  {
    icon: Rocket,
    title: 'Ships, then improves',
    d: 'Working software first, polish second. Iteration beats a perfect plan that never leaves the doc.',
  },
];

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [skillGroups, setSkillGroups] = useState([]);

  useEffect(() => {
    api.getProjects().then(setProjects).catch(() => {});
    api.getSkills().then(setSkillGroups).catch(() => {});
  }, []);

  useReveal([projects, skillGroups]);

  const stats = [
    { value: projects.length ? `${projects.length}+` : '—', label: 'Projects Shipped' },
    { value: '21', label: 'Certifications' },
    { value: '13+', label: 'Institutes' },
    { value: skillGroups.length ? skillGroups.length : '—', label: 'Skill Categories' },
  ];

  return (
    <div>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-base-300">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 text-base-content/[0.06]" />
        <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[110px]" />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div>
            <div className="rv inline-flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Full-Stack Developer · Barisal, Bangladesh
            </div>

            <h1 className="rv rv-d1 mt-5 text-[clamp(2.5rem,6vw,4.2rem)] font-semibold leading-[1.04] tracking-tight">
              Muhammad Saykot
              <span className="mt-2 block text-[0.42em] font-medium leading-snug text-base-content/55">
                writes code that ships, and certificates that prove the rest.
              </span>
            </h1>

            <p className="rv rv-d2 mt-6 max-w-lg text-[1.05rem] leading-relaxed text-base-content/65">
              I build web and mobile products end to end — React and Next.js on the
              frontend, Node.js and MySQL underneath. Currently working as a freelance
              developer, and studying Computer Engineering on the side.
            </p>

            <div className="rv rv-d3 mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="btn btn-primary rounded-full px-6 font-mono text-sm normal-case"
              >
                View Projects <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline rounded-full border-base-300 px-6 font-mono text-sm normal-case hover:border-primary hover:bg-transparent hover:text-primary"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Ledger / dossier stat card */}
          <div className="rv rv-d2 relative">
            <div className="rounded-box border border-base-300 bg-base-100/90 p-6 shadow-xl shadow-base-content/[0.03] backdrop-blur-sm">
              <div className="mb-1 flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.14em] text-base-content/35">
                <span>Profile Record</span>
                <span>#001</span>
              </div>
              <hr className="mb-4 border-base-300" />
              {[
                ['Role', 'Freelance Web Developer'],
                ['Stack', 'React · Next.js · Node.js'],
                ['Mobile', 'Kotlin · Jetpack Compose'],
                ['Credentials', '21 certifications, 13+ institutes'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <span className="text-base-content/45">{k}</span>
                  <span className="text-right font-medium">{v}</span>
                </div>
              ))}
              <hr className="border-base-300" />
              <div className="flex items-center justify-between py-3 text-sm">
                <span className="text-base-content/45">Status</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Tech marquee ───────── */}
      <Marquee items={stack} />

      {/* ───────── Quicklinks ───────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {quicklinks.map((item, i) => (
            <Link
              to={item.to}
              key={item.to}
              className="rv group flex flex-col rounded-box border border-base-300 bg-base-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              
              <h3 className="mt-4 font-display text-lg font-semibold transition-colors group-hover:text-primary">
                {item.label}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-base-content/55">{item.d}</p>
              <ArrowUpRight
                size={18}
                className="mt-4 text-base-content/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* ───────── By the numbers ───────── */}
      <section className="border-y border-base-300 bg-base-200/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <StatsStrip stats={stats} />
        </div>
      </section>

      {/* ───────── Featured work ───────── */}
      {projects.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="rv flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
                Featured Work
              </span>
              <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                A few things I've built.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-base-content/60 transition-colors hover:text-primary"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* ───────── Currently building ───────── */}
      <section className="border-t border-base-300 bg-base-200/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rv flex flex-col items-start justify-between gap-6 rounded-box border border-base-300 bg-base-100 p-8 md:flex-row md:items-center md:p-10">
            <div>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
                Currently Building
              </span>
              <h2 className="mt-2 font-display text-2xl font-semibold">
                People E Sheba
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-base-content/60">
                A comprehensive React-based community services platform built with Node.js, MySQL, and Tailwind CSS.
              </p>
            </div>
            <Link
              to="/projects"
              className="btn btn-outline shrink-0 rounded-full border-base-300 font-mono text-sm normal-case hover:border-primary hover:bg-transparent hover:text-primary"
            >
              See all projects <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Approach ───────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="rv max-w-lg">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
            How I Work
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
            Three things I hold to on every build.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {approach.map(({ icon: Icon, title, d }, i) => (
            <div
              key={title}
              className="rv rounded-box border border-base-300 bg-base-100 p-6"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="grid h-11 w-11 place-items-center rounded-field border border-base-300 bg-base-200 text-primary">
                <Icon size={19} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-base-content/60">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <CtaBanner
          title="Ready to build something worth shipping?"
          subtitle="I'm currently available for freelance projects and full-time roles."
        />
      </div>
    </div>
  );
}
