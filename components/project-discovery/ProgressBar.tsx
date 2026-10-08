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
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <p className="font-code text-[11px] tracking-widest uppercase text-smoke">
          Step {current} of {total}
          <span className="hidden sm:inline"> — </span>
          <span className="block sm:inline text-fog sm:text-smoke mt-1 sm:mt-0">{label}</span>
        </p>
        <p className="hidden sm:block font-code text-[11px] text-faint flex-shrink-0">{pct}%</p>
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
