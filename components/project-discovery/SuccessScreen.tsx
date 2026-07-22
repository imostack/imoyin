'use client';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface SuccessScreenProps {
  name: string;
}

export function SuccessScreen({ name }: SuccessScreenProps) {
  const firstName = name.trim().split(/\s+/)[0] || 'there';

  return (
    <div className="flex flex-col items-center text-center py-20 lg:py-28">
      <div className="w-16 h-16 border border-amber/40 flex items-center justify-center mb-8">
        <CheckCircle2 size={26} className="text-amber" />
      </div>
      <p className="font-code text-[11px] tracking-widest uppercase text-amber mb-4">
        Submission received
      </p>
      <h2 className="font-display font-light text-fog text-4xl lg:text-5xl mb-6 max-w-xl">
        Thank you, {firstName}.
      </h2>
      <p className="text-smoke text-sm leading-relaxed max-w-md mb-10">
        I&apos;ve received the full brief. I personally review every submission and
        will follow up within 48 hours with next steps — usually a short call to
        confirm scope before I put together a proposal.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 border border-rim text-fog text-sm px-6 py-3 hover:border-amber hover:text-amber transition-colors"
      >
        Back to homepage
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
