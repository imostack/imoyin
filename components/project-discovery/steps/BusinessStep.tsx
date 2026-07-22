'use client';
import { TextAreaField, StepIntro } from '../fields';
import type { StepProps } from '../types';

export function BusinessStep({ data, update, errors }: StepProps) {
  return (
    <div>
      <StepIntro
        eyebrow="02 — Business"
        title="Tell me about the business."
        description="Context I need before I can architect anything — not a pitch deck, just the plain version."
      />
      <div className="space-y-6">
        <TextAreaField
          label="What does your business do?"
          name="businessDescription"
          required
          rows={3}
          value={data.businessDescription}
          onChange={v => update('businessDescription', v)}
          placeholder="In a few sentences..."
          error={errors.businessDescription}
        />
        <TextAreaField
          label="Who are your customers?"
          name="customers"
          rows={3}
          value={data.customers}
          onChange={v => update('customers', v)}
          placeholder="Who buys from you / uses your product?"
        />
        <TextAreaField
          label="Describe your business model."
          name="businessModel"
          rows={3}
          value={data.businessModel}
          onChange={v => update('businessModel', v)}
          placeholder="How does the business make money?"
        />
        <TextAreaField
          label="What problem are you solving?"
          name="problemSolving"
          rows={3}
          value={data.problemSolving}
          onChange={v => update('problemSolving', v)}
          placeholder="The core problem your business exists to solve"
        />
      </div>
    </div>
  );
}
