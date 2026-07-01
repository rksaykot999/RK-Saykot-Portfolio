import { useState } from 'react';
import { api } from '../lib/api';
import { useReveal } from '../lib/useReveal';
import SectionHeading from '../components/ui/SectionHeading';
import { MapPin, Briefcase, Clock, Link2, CheckCircle2, AlertCircle } from 'lucide-react';

const initialForm = { firstName: '', lastName: '', email: '', subject: '', message: '' };

const infoRows = [
  { icon: MapPin, k: 'Based in', v: 'Barisal, Bangladesh' },
  { icon: Briefcase, k: 'Current role', v: 'Full-Stack Developer' },
  { icon: Clock, k: 'Response time', v: 'Within 24–48 hours' },
  { icon: Link2, k: 'Find me on', v: 'GitHub · LinkedIn' },
];

const faqs = [
  {
    q: 'What kind of projects do you take on?',
    a: 'Web platforms (React / Next.js), backend APIs (Node.js / MySQL), and Android apps (Kotlin / Jetpack Compose) — from a scoped feature to a full build.',
  },
  {
    q: 'Are you open to remote work?',
    a: "Yes — I'm based in Barisal, Bangladesh, and work comfortably with remote and distributed teams.",
  },
  {
    q: "What's the best way to start?",
    a: 'Send a message with a short project brief — goal, rough timeline, and budget range if you have one. I\'ll reply within 24–48 hours.',
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');

  useReveal();

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setState('sending');
    setErrorMsg('');
    try {
      await api.sendContact(form);
      setState('sent');
      setForm(initialForm);
    } catch (err) {
      setState('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <div className="pb-16 md:pb-24">
      <SectionHeading
        recordNo="06"
        label="Contact"
        title="Let's talk about the work."
        subtitle="Open to freelance projects, full-time roles, and collaboration on web or mobile builds."
      />

      <div className="mx-auto max-w-6xl px-6 pt-12 md:pt-20">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
        <aside className="rv rv-d2 h-fit rounded-box border border-base-300 bg-base-100 p-6">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-base-content/35">
            Contact Info
          </span>
          <div className="mt-4 divide-y divide-base-300">
            {infoRows.map(({ icon: Icon, k, v }) => (
              <div key={k} className="flex items-center gap-3 py-3.5 text-sm">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-field border border-base-300 bg-base-200 text-primary">
                  <Icon size={14} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-base-content/45">{k}</p>
                  <p className="truncate font-medium">{v}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <form className="rv rv-d3 rounded-box border border-base-300 bg-base-100 p-6 md:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="firstName" label="First name" required value={form.firstName} onChange={update('firstName')} placeholder="Your first name" />
            <Field id="lastName" label="Last name" value={form.lastName} onChange={update('lastName')} placeholder="Your last name" />
          </div>
          <Field id="email" label="Email" type="email" required value={form.email} onChange={update('email')} placeholder="you@example.com" className="mt-5" />
          <Field id="subject" label="Subject" value={form.subject} onChange={update('subject')} placeholder="Project inquiry" className="mt-5" />

          <div className="mt-5 flex flex-col gap-1.5">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-base-content/50">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={update('message')}
              placeholder="Tell me about the project, timeline, and budget."
              className="textarea w-full resize-none rounded-field border-base-300 bg-base-200/40 focus:border-primary focus:outline-none"
            />
          </div>

          <button
            className="btn btn-primary mt-7 w-full rounded-full font-mono text-sm normal-case sm:w-auto sm:px-8"
            type="submit"
            disabled={state === 'sending'}
          >
            {state === 'sending' ? 'Sending…' : 'Send Message →'}
          </button>

          {state === 'sent' && (
            <p className="mt-4 flex items-center gap-2 text-sm text-success">
              <CheckCircle2 size={16} /> Message sent. Thank you — I'll reply soon.
            </p>
          )}
          {state === 'error' && (
            <p className="mt-4 flex items-center gap-2 text-sm text-error">
              <AlertCircle size={16} /> {errorMsg}
            </p>
          )}
        </form>
      </div>

      {/* ───────── FAQ ───────── */}
      <div className="mx-auto mt-24 max-w-2xl">
        <div className="rv text-center">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
            Before You Send That
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold">A few quick answers.</h2>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="rv group rounded-box border border-base-300 bg-base-100 px-5 py-1 open:pb-4"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-medium">
                {f.q}
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-base-300 text-base-content/50 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-sm leading-relaxed text-base-content/60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

function Field({ id, label, type = 'text', required, value, onChange, placeholder, className = '' }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="font-mono text-xs uppercase tracking-wide text-base-content/50">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input w-full rounded-field border-base-300 bg-base-200/40 focus:border-primary focus:outline-none"
      />
    </div>
  );
}
