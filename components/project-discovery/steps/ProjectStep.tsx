'use client';
import { ChoiceChips, MoreDetail, TextField, TextAreaField, StepIntro } from '../fields';
import { FileDropzone, type UploadedFile } from '../FileDropzone';
import {
  CURRENT_SITUATION_OPTIONS,
  FEATURE_OPTIONS,
  INTEGRATION_OPTIONS,
} from '@/lib/project-discovery';
import type { StepProps } from '../types';

interface ProjectStepProps extends StepProps {
  files: UploadedFile[];
  onFilesChange: (next: UploadedFile[]) => void;
}

export function ProjectStep({ data, update, errors, files, onFilesChange }: ProjectStepProps) {
  const has = (opt: string) => data.currentSituation.includes(opt);
  const hasExtraDetail =
    !!data.businessDescription.trim() || data.integrations.length > 0 || files.length > 0;

  return (
    <div>
      <StepIntro
        title="Tell me about the project."
        description="Only the first question is needed. Everything else is a quick tap — skip what you don't know."
      />
      <div className="space-y-10">
        <TextAreaField
          label="What should this achieve for your business?"
          name="businessOutcome"
          required
          rows={3}
          value={data.businessOutcome}
          onChange={v => update('businessOutcome', v)}
          placeholder="e.g. Get more customers to request quotes online instead of calling"
          error={errors.businessOutcome}
        />

        <div className="space-y-6">
          <ChoiceChips
            label="What do you already have?"
            name="currentSituation"
            options={CURRENT_SITUATION_OPTIONS}
            value={data.currentSituation}
            onChange={v => update('currentSituation', v)}
            exclusiveOption="Nothing yet"
          />
          {has('Website') && (
            <TextField
              label="Current website"
              name="currentWebsiteUrl"
              type="url"
              inputMode="url"
              value={data.currentWebsiteUrl}
              onChange={v => update('currentWebsiteUrl', v)}
              placeholder="https://"
            />
          )}
          {has('Mobile App') && (
            <TextField
              label="App store link(s)"
              name="currentAppNotes"
              value={data.currentAppNotes}
              onChange={v => update('currentAppNotes', v)}
              placeholder="iOS / Android links"
            />
          )}
          {has('Backend') && (
            <TextField
              label="What does the backend run on?"
              name="currentBackendNotes"
              value={data.currentBackendNotes}
              onChange={v => update('currentBackendNotes', v)}
              placeholder="e.g. Laravel on cPanel, Firebase"
            />
          )}
          {has('UI Design') && (
            <TextField
              label="Where are the designs?"
              name="currentDesignNotes"
              value={data.currentDesignNotes}
              onChange={v => update('currentDesignNotes', v)}
              placeholder="e.g. Figma link — or attach files below"
            />
          )}
          {has('Existing Developers') && (
            <TextField
              label="Will your team work alongside me?"
              name="currentTeamNotes"
              value={data.currentTeamNotes}
              onChange={v => update('currentTeamNotes', v)}
              placeholder="Team size, roles"
            />
          )}
          {has('Existing Database') && (
            <TextField
              label="Which database?"
              name="currentDatabaseNotes"
              value={data.currentDatabaseNotes}
              onChange={v => update('currentDatabaseNotes', v)}
              placeholder="e.g. PostgreSQL, MySQL, Firebase"
            />
          )}
        </div>

        <div className="space-y-6">
          <ChoiceChips
            label="Features you'll need"
            name="features"
            options={FEATURE_OPTIONS}
            value={data.features}
            onChange={v => update('features', v)}
          />
          {data.features.includes('Something else') && (
            <TextField
              label="What else?"
              name="featureOther"
              value={data.featureOther}
              onChange={v => update('featureOther', v)}
            />
          )}
        </div>

        <MoreDetail
          summary="Add more detail — business background, integrations, files"
          defaultOpen={hasExtraDetail}
        >
          <TextAreaField
            label="What does your business do?"
            name="businessDescription"
            rows={2}
            value={data.businessDescription}
            onChange={v => update('businessDescription', v)}
            placeholder="Who you serve and how you make money"
          />
          <div className="space-y-6">
            <ChoiceChips
              label="Services to connect"
              name="integrations"
              options={INTEGRATION_OPTIONS}
              value={data.integrations}
              onChange={v => update('integrations', v)}
            />
            {data.integrations.includes('Other') && (
              <TextField
                label="Which other service?"
                name="integrationOther"
                value={data.integrationOther}
                onChange={v => update('integrationOther', v)}
              />
            )}
          </div>
          <div>
            <p className="font-code text-[11px] text-smoke mb-2 tracking-wide uppercase">
              Files <span className="normal-case tracking-normal text-faint">(optional)</span>
              <span className="block normal-case tracking-normal text-faint mt-1">
                Requirements, designs, logo, company profile — anything useful.
              </span>
            </p>
            <FileDropzone files={files} onChange={onFilesChange} />
          </div>
        </MoreDetail>
      </div>
    </div>
  );
}
