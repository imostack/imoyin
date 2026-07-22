'use client';
import { Pencil } from 'lucide-react';
import { getSummarySections, type DiscoveryFormData } from '@/lib/project-discovery';
import { StepIntro } from '../fields';
import type { UploadedFile } from '../FileDropzone';

interface ReviewStepProps {
  data: DiscoveryFormData;
  files: UploadedFile[];
  onEditStep: (id: string) => void;
  errorMsg?: string;
}

export function ReviewStep({ data, files, onEditStep, errorMsg }: ReviewStepProps) {
  const sections = getSummarySections(
    data,
    files.map(f => ({ name: f.file.name, category: f.category, size: f.file.size }))
  );

  return (
    <div>
      <StepIntro
        eyebrow="Review"
        title="Everything, in one place."
        description="Take a look before this goes to my inbox. You can jump back to any section to make a change."
      />
      <div className="divide-y divide-rim border-t border-b border-rim">
        {sections.map(section => (
          <div key={section.id} className="py-6">
            <div className="flex items-center justify-between mb-4">
              <p className="font-code text-[11px] tracking-widest uppercase text-amber">
                {section.title}
              </p>
              <button
                type="button"
                onClick={() => onEditStep(section.id)}
                className="inline-flex items-center gap-1.5 font-code text-[11px] text-smoke hover:text-fog transition-colors"
              >
                <Pencil size={11} />
                Edit
              </button>
            </div>
            <dl className="space-y-2">
              {section.rows.map(row => (
                <div key={row.label} className="grid sm:grid-cols-[220px_1fr] gap-1 sm:gap-4">
                  <dt className="text-xs text-faint">{row.label}</dt>
                  <dd className="text-sm text-fog whitespace-pre-wrap">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      {errorMsg && <p className="font-code text-[11px] text-red-400 mt-6">{errorMsg}</p>}
    </div>
  );
}
