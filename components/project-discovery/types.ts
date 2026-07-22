import type { DiscoveryFormData, StepErrors } from '@/lib/project-discovery';

export interface StepProps {
  data: DiscoveryFormData;
  update: <K extends keyof DiscoveryFormData>(key: K, value: DiscoveryFormData[K]) => void;
  errors: StepErrors;
}
