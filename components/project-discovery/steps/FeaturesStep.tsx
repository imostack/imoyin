'use client';
import { SelectGrid, TextField, StepIntro } from '../fields';
import { FEATURE_OPTIONS } from '@/lib/project-discovery';
import type { StepProps } from '../types';

export function FeaturesStep({ data, update }: StepProps) {
  return (
    <div>
      <StepIntro
        eyebrow="06 — Required Features"
        title="What does it need to do?"
        description="Select what you already know you'll need. We'll refine scope together before the proposal."
      />
      <div className="space-y-6">
        <SelectGrid
          label="Features"
          options={FEATURE_OPTIONS}
          value={data.features}
          onChange={v => update('features', v)}
          columns="sm:grid-cols-2 lg:grid-cols-3"
        />
        {data.features.includes('Custom Feature') && (
          <TextField
            label="Custom feature, please describe"
            name="featureOther"
            value={data.featureOther}
            onChange={v => update('featureOther', v)}
          />
        )}
      </div>
    </div>
  );
}
