'use client';
import { ChoiceChips, TextField, TextAreaField, StepIntro } from '../fields';
import { LOGISTICS_PORTAL_OPTIONS, LOGISTICS_WORKFLOW_OPTIONS } from '@/lib/project-discovery';
import type { StepProps } from '../types';

export function LogisticsStep({ data, update }: StepProps) {
  return (
    <div>
      <StepIntro
        title="A few logistics details."
        description="You picked Logistics Platform, so a couple of quick taps here help me scope it. All optional."
      />
      <div className="space-y-10">
        <ChoiceChips
          label="Portals needed"
          name="logisticsPortals"
          options={LOGISTICS_PORTAL_OPTIONS}
          value={data.logisticsPortals}
          onChange={v => update('logisticsPortals', v)}
        />
        <ChoiceChips
          label="Workflow requirements"
          name="logisticsWorkflow"
          options={LOGISTICS_WORKFLOW_OPTIONS}
          value={data.logisticsWorkflow}
          onChange={v => update('logisticsWorkflow', v)}
        />
        <TextField
          label="Pricing model"
          name="logisticsPricingModel"
          value={data.logisticsPricingModel}
          onChange={v => update('logisticsPricingModel', v)}
          placeholder="e.g. per km, flat rate, commission"
        />
        <TextAreaField
          label="Anything unique about how you operate?"
          name="logisticsCustomWorkflow"
          rows={3}
          value={data.logisticsCustomWorkflow}
          onChange={v => update('logisticsCustomWorkflow', v)}
        />
      </div>
    </div>
  );
}
