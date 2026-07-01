import { Loader2, AlertTriangle } from 'lucide-react';

export function LoadingState({ label = 'Loading…' }) {
  return (
    <div className="rv flex items-center gap-2.5 py-10 font-mono text-sm text-base-content/50">
      <Loader2 size={15} className="animate-spin" />
      {label}
    </div>
  );
}

export function ErrorState({ message }) {
  return (
    <div className="rv flex items-start gap-3 rounded-box border border-error/30 bg-error/5 px-5 py-4 text-sm text-base-content/70">
      <AlertTriangle size={16} className="mt-0.5 shrink-0 text-error" />
      <p>
        {message || (
          <>
            Couldn't reach the API. Run the server with{' '}
            <code className="rounded bg-base-300/60 px-1.5 py-0.5 font-mono text-[0.85em]">npm run dev</code> in{' '}
            <code className="rounded bg-base-300/60 px-1.5 py-0.5 font-mono text-[0.85em]">/server</code>.
          </>
        )}
      </p>
    </div>
  );
}
