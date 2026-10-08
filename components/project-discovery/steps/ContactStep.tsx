'use client';
import { TextField, StepIntro } from '../fields';
import { COUNTRY_SUGGESTIONS } from '@/lib/project-discovery';
import type { StepProps } from '../types';

export function ContactStep({ data, update, errors }: StepProps) {
  return (
    <div>
      <StepIntro
        title="Where should I reply?"
        description="Last step. I'll read your brief and get back to you to book a call."
      />
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <TextField
            label="Your name"
            name="fullName"
            required
            autoComplete="name"
            value={data.fullName}
            onChange={v => update('fullName', v)}
            error={errors.fullName}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            inputMode="email"
            required
            autoComplete="email"
            value={data.email}
            onChange={v => update('email', v)}
            placeholder="you@company.com"
            error={errors.email}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <TextField
            label="Phone / WhatsApp"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={v => update('phone', v)}
            placeholder="+234…"
          />
          <TextField
            label="Company"
            name="companyName"
            autoComplete="organization"
            value={data.companyName}
            onChange={v => update('companyName', v)}
          />
        </div>
        <TextField
          label="Country"
          name="country"
          autoComplete="country-name"
          value={data.country}
          onChange={v => update('country', v)}
          suggestions={COUNTRY_SUGGESTIONS}
        />
      </div>
    </div>
  );
}
