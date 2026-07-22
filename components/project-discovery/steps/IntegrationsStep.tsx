'use client';
import { SelectGrid, TextField, StepIntro } from '../fields';
import { INTEGRATION_OPTIONS } from '@/lib/project-discovery';
import type { StepProps } from '../types';

export function IntegrationsStep({ data, update }: StepProps) {
  return (
    <div>
      <StepIntro
        eyebrow="09 — Integrations"
        title="What does this need to connect to?"
        description="Third-party services this project should integrate with, if you already know."
      />
      <div className="space-y-6">
        <SelectGrid
          label="Integrations"
          options={INTEGRATION_OPTIONS}
          value={data.integrations}
          onChange={v => update('integrations', v)}
          columns="sm:grid-cols-2 lg:grid-cols-3"
        />
        {data.integrations.includes('Other') && (
          <TextField
            label="Other, please specify"
            name="integrationOther"
            value={data.integrationOther}
            onChange={v => update('integrationOther', v)}
          />
        )}
      </div>
    </div>
  );
}
