'use client';
import { ChoiceChips, TextField, StepIntro } from '../fields';
import { PROJECT_TYPE_OPTIONS } from '@/lib/project-discovery';
import type { StepProps } from '../types';

export function NeedStep({ data, update, errors }: StepProps) {
  return (
    <div>
      <StepIntro
        title="What do you need?"
        description="Pick whatever fits best. Not sure? Choose the closest one — we'll sort out the details on the call."
      />
      <div className="space-y-8">
        <ChoiceChips
          label="Project type"
          name="projectTypes"
          required
          options={PROJECT_TYPE_OPTIONS}
          value={data.projectTypes}
          onChange={v => update('projectTypes', v)}
          error={errors.projectTypes}
        />
        {data.projectTypes.includes('Other') && (
          <TextField
            label="What kind of project?"
            name="projectTypeOther"
            value={data.projectTypeOther}
            onChange={v => update('projectTypeOther', v)}
          />
        )}
        <TextField
          label="Describe it in a sentence"
          name="projectSummary"
          value={data.projectSummary}
          onChange={v => update('projectSummary', v)}
          placeholder="e.g. A website for my logistics company with online booking"
        />
      </div>
    </div>
  );
}
