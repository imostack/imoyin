'use client';
import { TextAreaField, StepIntro } from '../fields';
import type { StepProps } from '../types';

export function GoalsStep({ data, update, errors }: StepProps) {
  return (
    <div>
      <StepIntro
        eyebrow="05 — Project Goals"
        title="What does this need to achieve?"
        description="Features come later. This is about the outcome — everything else should serve it."
      />
      <div className="space-y-6">
        <TextAreaField
          label="What business outcome are you trying to achieve?"
          name="businessOutcome"
          required
          rows={3}
          value={data.businessOutcome}
          onChange={v => update('businessOutcome', v)}
          error={errors.businessOutcome}
        />
        <TextAreaField
          label="What problem should this software solve?"
          name="problemToSolve"
          rows={3}
          value={data.problemToSolve}
          onChange={v => update('problemToSolve', v)}
        />
        <TextAreaField
          label="How will success be measured?"
          name="successMeasure"
          rows={3}
          value={data.successMeasure}
          onChange={v => update('successMeasure', v)}
          placeholder="Revenue, time saved, users onboarded, etc."
        />
      </div>
    </div>
  );
}
