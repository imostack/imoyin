'use client';

interface ProgressBarProps {
  current: number;
  total: number;
  label: string;
}

export function ProgressBar({ current, total, label }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="font-code text-[11px] tracking-widest uppercase text-smoke">
          Step {current} of {total} — {label}
        </p>
        <p className="font-code text-[11px] text-faint">{pct}%</p>
      </div>
      <div className="h-px w-full bg-rim overflow-hidden">
        <div
          className="h-px bg-amber transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
