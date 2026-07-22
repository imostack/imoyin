'use client';
import { SelectGrid, TextField, StepIntro } from '../fields';
import { PROJECT_TYPE_OPTIONS } from '@/lib/project-discovery';
import type { StepProps } from '../types';

export function ProjectTypeStep({ data, update, errors }: StepProps) {
  return (
    <div>
      <StepIntro
        eyebrow="03 — Project Type"
        title="What are we building?"
        description="Select everything that applies — most real projects are a combination."
      />
      <div className="space-y-6">
        <SelectGrid
          label="Project type"
          required
          options={PROJECT_TYPE_OPTIONS}
          value={data.projectTypes}
          onChange={v => update('projectTypes', v)}
          columns="sm:grid-cols-2 lg:grid-cols-3"
          error={errors.projectTypes}
        />
        {data.projectTypes.includes('Other') && (
          <TextField
            label="Other, please specify"
            name="projectTypeOther"
            value={data.projectTypeOther}
            onChange={v => update('projectTypeOther', v)}
            placeholder="What kind of project?"
          />
        )}
      </div>
    </div>
  );
}
