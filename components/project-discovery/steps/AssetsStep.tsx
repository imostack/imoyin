'use client';
import { StepIntro } from '../fields';
import { FileDropzone, type UploadedFile } from '../FileDropzone';

interface AssetsStepProps {
  files: UploadedFile[];
  onFilesChange: (next: UploadedFile[]) => void;
}

export function AssetsStep({ files, onFilesChange }: AssetsStepProps) {
  return (
    <div>
      <StepIntro
        eyebrow="08 — Existing Assets"
        title="Anything you already have?"
        description="Requirements docs, Figma files, wireframes, brand assets, policy documents — whatever exists. Tag each file so I know what I'm looking at."
      />
      <FileDropzone files={files} onChange={onFilesChange} />
    </div>
  );
}
