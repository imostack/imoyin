'use client';
import { SelectGrid, TextField, TextAreaField, StepIntro } from '../fields';
import { CURRENT_SITUATION_OPTIONS } from '@/lib/project-discovery';
import type { StepProps } from '../types';

export function CurrentSituationStep({ data, update }: StepProps) {
  const has = (opt: string) => data.currentSituation.includes(opt);

  return (
    <div>
      <StepIntro
        eyebrow="04 — Current Situation"
        title="What already exists?"
        description="Nothing is expected here — this just tells me what we're starting from."
      />
      <div className="space-y-6">
        <SelectGrid
          label="Already in place"
          options={CURRENT_SITUATION_OPTIONS}
          value={data.currentSituation}
          onChange={v => update('currentSituation', v)}
          columns="sm:grid-cols-2 lg:grid-cols-3"
        />

        {has('Website') && (
          <TextField
            label="Current website URL"
            name="currentWebsiteUrl"
            value={data.currentWebsiteUrl}
            onChange={v => update('currentWebsiteUrl', v)}
            placeholder="https://"
          />
        )}
        {has('Mobile App') && (
          <TextField
            label="App store link(s), if any"
            name="currentAppNotes"
            value={data.currentAppNotes}
            onChange={v => update('currentAppNotes', v)}
            placeholder="iOS / Android links or notes"
          />
        )}
        {has('Backend') && (
          <TextAreaField
            label="What does the current backend run on?"
            name="currentBackendNotes"
            rows={2}
            value={data.currentBackendNotes}
            onChange={v => update('currentBackendNotes', v)}
            placeholder="Stack, hosting, anything relevant"
          />
        )}
        {has('UI Design') && (
          <TextAreaField
            label="Notes on the existing UI design"
            name="currentDesignNotes"
            rows={2}
            value={data.currentDesignNotes}
            onChange={v => update('currentDesignNotes', v)}
            placeholder="Design files, brand constraints, etc."
          />
        )}
        {has('Existing Developers') && (
          <TextAreaField
            label="Will your existing team continue alongside this engagement?"
            name="currentTeamNotes"
            rows={2}
            value={data.currentTeamNotes}
            onChange={v => update('currentTeamNotes', v)}
            placeholder="Team size, roles, how you'd like to collaborate"
          />
        )}
        {has('Existing Database') && (
          <TextField
            label="What database/platform is currently used?"
            name="currentDatabaseNotes"
            value={data.currentDatabaseNotes}
            onChange={v => update('currentDatabaseNotes', v)}
            placeholder="e.g. PostgreSQL, Firebase, MySQL"
          />
        )}
      </div>
    </div>
  );
}
