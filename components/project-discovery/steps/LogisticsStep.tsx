'use client';
import { SelectGrid, TextField, TextAreaField, StepIntro } from '../fields';
import { LOGISTICS_PORTAL_OPTIONS, LOGISTICS_WORKFLOW_OPTIONS } from '@/lib/project-discovery';
import type { StepProps } from '../types';

export function LogisticsStep({ data, update }: StepProps) {
  return (
    <div>
      <StepIntro
        eyebrow="07 — Logistics Platform"
        title="A few logistics-specific details."
        description="You selected Logistics Platform — this helps me scope the parts that are unique to fleet and delivery operations."
      />
      <div className="space-y-8">
        <SelectGrid
          label="Portals needed"
          options={LOGISTICS_PORTAL_OPTIONS}
          value={data.logisticsPortals}
          onChange={v => update('logisticsPortals', v)}
          columns="sm:grid-cols-2 lg:grid-cols-3"
        />
        <SelectGrid
          label="Workflow requirements"
          options={LOGISTICS_WORKFLOW_OPTIONS}
          value={data.logisticsWorkflow}
          onChange={v => update('logisticsWorkflow', v)}
          columns="sm:grid-cols-2 lg:grid-cols-3"
        />
        <TextField
          label="Pricing model"
          name="logisticsPricingModel"
          value={data.logisticsPricingModel}
          onChange={v => update('logisticsPricingModel', v)}
          placeholder="e.g. per km, flat rate, negotiated, commission"
        />
        <TextAreaField
          label="Describe any custom workflow"
          name="logisticsCustomWorkflow"
          rows={4}
          value={data.logisticsCustomWorkflow}
          onChange={v => update('logisticsCustomWorkflow', v)}
          placeholder="Anything specific to how your operation runs"
        />
      </div>
    </div>
  );
}
