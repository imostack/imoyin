'use client';
import { SelectGrid, TextAreaField, StepIntro } from '../fields';
import { TIMELINE_OPTIONS, BUDGET_OPTIONS } from '@/lib/project-discovery';
import type { StepProps } from '../types';

export function TimelineBudgetStep({ data, update, errors }: StepProps) {
  return (
    <div>
      <StepIntro
        eyebrow="10 — Timeline & Budget"
        title="Last few details."
        description="This shapes how I structure the proposal — it's not a commitment on either side."
      />
      <div className="space-y-8">
        <SelectGrid
          label="Timeline"
          required
          multiple={false}
          options={TIMELINE_OPTIONS}
          value={data.timeline ? [data.timeline] : []}
          onChange={v => update('timeline', v[0] ?? '')}
          columns="sm:grid-cols-2 lg:grid-cols-3"
          error={errors.timeline}
        />
        <SelectGrid
          label="Budget"
          required
          multiple={false}
          options={BUDGET_OPTIONS}
          value={data.budget ? [data.budget] : []}
          onChange={v => update('budget', v[0] ?? '')}
          columns="sm:grid-cols-2 lg:grid-cols-3"
          error={errors.budget}
        />
        <TextAreaField
          label="Additional notes"
          name="additionalNotes"
          rows={5}
          value={data.additionalNotes}
          onChange={v => update('additionalNotes', v)}
          placeholder="Anything else I should know before we talk?"
        />
      </div>
    </div>
  );
}
