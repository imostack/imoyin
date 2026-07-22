'use client';
import { TextField, StepIntro } from '../fields';
import type { StepProps } from '../types';

export function ContactStep({ data, update, errors }: StepProps) {
  return (
    <div>
      <StepIntro
        eyebrow="01 — Contact"
        title="Who am I speaking with?"
        description="The basics, so I know who I'm building with and how to reach you."
      />
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <TextField
            label="Full Name"
            name="fullName"
            required
            value={data.fullName}
            onChange={v => update('fullName', v)}
            placeholder="Full name"
            error={errors.fullName}
          />
          <TextField
            label="Company Name"
            name="companyName"
            value={data.companyName}
            onChange={v => update('companyName', v)}
            placeholder="Optional"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <TextField
            label="Position"
            name="position"
            value={data.position}
            onChange={v => update('position', v)}
            placeholder="e.g. Founder, CEO, Product Lead"
          />
          <TextField
            label="Country"
            name="country"
            required
            value={data.country}
            onChange={v => update('country', v)}
            placeholder="Where you're based"
            error={errors.country}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <TextField
            label="Email Address"
            name="email"
            type="email"
            required
            value={data.email}
            onChange={v => update('email', v)}
            placeholder="email@example.com"
            error={errors.email}
          />
          <TextField
            label="Phone"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={v => update('phone', v)}
            placeholder="Optional"
          />
        </div>
        <TextField
          label="Website"
          name="website"
          value={data.website}
          onChange={v => update('website', v)}
          placeholder="Optional"
        />
      </div>
    </div>
  );
}
