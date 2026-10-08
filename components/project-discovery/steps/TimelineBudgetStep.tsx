'use client';
import { ChoiceChips, TextAreaField, StepIntro } from '../fields';
import {
  TIMELINE_OPTIONS,
  BUDGET_OPTIONS,
  type BudgetCurrency,
} from '@/lib/project-discovery';
import type { StepProps } from '../types';

const CURRENCIES: { id: BudgetCurrency; label: string }[] = [
  { id: 'NGN', label: '₦ Naira' },
  { id: 'USD', label: '$ Dollars' },
];

export function TimelineBudgetStep({ data, update, errors }: StepProps) {
  const options = BUDGET_OPTIONS[data.budgetCurrency];

  const switchCurrency = (next: BudgetCurrency) => {
    if (next === data.budgetCurrency) return;
    // Keep "not sure" when switching; any specific range belongs to the old currency
    const keep = BUDGET_OPTIONS[next].includes(data.budget) ? data.budget : '';
    update('budgetCurrency', next);
    update('budget', keep);
  };

  return (
    <div>
      <StepIntro
        title="Timeline and budget."
        description="Rough is fine — this just helps me suggest the right approach. It's not a commitment."
      />
      <div className="space-y-10">
        <ChoiceChips
          label="When do you need it?"
          name="timeline"
          required
          multiple={false}
          options={TIMELINE_OPTIONS}
          value={data.timeline ? [data.timeline] : []}
          onChange={v => update('timeline', v[0] ?? '')}
          error={errors.timeline}
        />

        <div className="space-y-3">
          <div role="radiogroup" aria-label="Budget currency" className="inline-flex border border-rim">
            {CURRENCIES.map(c => (
              <button
                key={c.id}
                type="button"
                role="radio"
                aria-checked={data.budgetCurrency === c.id}
                onClick={() => switchCurrency(c.id)}
                className={`font-code text-[11px] px-3 py-1.5 transition-colors ${
                  data.budgetCurrency === c.id ? 'bg-amber text-canvas' : 'text-smoke hover:text-fog'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <ChoiceChips
            label="Budget range"
            name="budget"
            required
            multiple={false}
            options={options}
            value={data.budget ? [data.budget] : []}
            onChange={v => update('budget', v[0] ?? '')}
            error={errors.budget}
          />
        </div>

        <TextAreaField
          label="Anything else I should know?"
          name="additionalNotes"
          rows={3}
          value={data.additionalNotes}
          onChange={v => update('additionalNotes', v)}
          placeholder="Deadlines, examples you like, constraints…"
        />
      </div>
    </div>
  );
}
