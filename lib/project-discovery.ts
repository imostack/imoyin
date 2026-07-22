export interface DiscoveryFormData {
  // Contact information
  fullName: string;
  companyName: string;
  position: string;
  email: string;
  phone: string;
  website: string;
  country: string;

  // Business information
  businessDescription: string;
  customers: string;
  businessModel: string;
  problemSolving: string;

  // Project type
  projectTypes: string[];
  projectTypeOther: string;

  // Current situation
  currentSituation: string[];
  currentWebsiteUrl: string;
  currentAppNotes: string;
  currentBackendNotes: string;
  currentDesignNotes: string;
  currentTeamNotes: string;
  currentDatabaseNotes: string;

  // Project goals
  businessOutcome: string;
  problemToSolve: string;
  successMeasure: string;

  // Required features
  features: string[];
  featureOther: string;

  // Logistics platform (conditional)
  logisticsPortals: string[];
  logisticsWorkflow: string[];
  logisticsPricingModel: string;
  logisticsCustomWorkflow: string;

  // Third-party integrations
  integrations: string[];
  integrationOther: string;

  // Timeline & budget
  timeline: string;
  budget: string;
  additionalNotes: string;

  // Honeypot
  _trap: string;
}

export const INITIAL_DISCOVERY_DATA: DiscoveryFormData = {
  fullName: '',
  companyName: '',
  position: '',
  email: '',
  phone: '',
  website: '',
  country: '',

  businessDescription: '',
  customers: '',
  businessModel: '',
  problemSolving: '',

  projectTypes: [],
  projectTypeOther: '',

  currentSituation: [],
  currentWebsiteUrl: '',
  currentAppNotes: '',
  currentBackendNotes: '',
  currentDesignNotes: '',
  currentTeamNotes: '',
  currentDatabaseNotes: '',

  businessOutcome: '',
  problemToSolve: '',
  successMeasure: '',

  features: [],
  featureOther: '',

  logisticsPortals: [],
  logisticsWorkflow: [],
  logisticsPricingModel: '',
  logisticsCustomWorkflow: '',

  integrations: [],
  integrationOther: '',

  timeline: '',
  budget: '',
  additionalNotes: '',

  _trap: '',
};

export const PROJECT_TYPE_OPTIONS = [
  'Website',
  'Web App',
  'Mobile App',
  'SaaS',
  'Marketplace',
  'Logistics Platform',
  'ERP',
  'CRM',
  'AI Solution',
  'Existing Product Upgrade',
  'API Integration',
  'Internal Business Tool',
  'Other',
];

export const CURRENT_SITUATION_OPTIONS = [
  'Website',
  'Mobile App',
  'Backend',
  'UI Design',
  'Existing Developers',
  'Existing Database',
];

export const FEATURE_OPTIONS = [
  'Authentication',
  'Payments',
  'Dashboard',
  'Booking',
  'Scheduling',
  'Maps',
  'GPS',
  'Notifications',
  'Chat',
  'Reporting',
  'Analytics',
  'Document Upload',
  'KYC',
  'Inventory',
  'Workflow Automation',
  'Role Management',
  'API Integration',
  'Search',
  'AI Features',
  'Custom Feature',
];

export const LOGISTICS_PORTAL_OPTIONS = [
  'Customer Portal',
  'Driver App',
  'Fleet Owner Portal',
  'Dispatcher Dashboard',
  'Admin Dashboard',
];

export const LOGISTICS_WORKFLOW_OPTIONS = [
  'Transporter onboarding',
  'Driver verification',
  'Fleet verification',
  'Required documents',
  'Approval workflow',
  'Truck booking workflow',
  'GPS tracking',
  'Proof of Delivery',
  'Escrow payments',
  'Ratings',
  'Disputes',
];

export const ASSET_CATEGORY_OPTIONS = [
  'Business Requirements',
  'Figma',
  'Wireframes',
  'Logo',
  'Brand Guide',
  'Policy Documents',
  'Existing Database',
  'Company Profile',
  'Other',
];

export const INTEGRATION_OPTIONS = [
  'Google Maps',
  'Mapbox',
  'Paystack',
  'Flutterwave',
  'Stripe',
  'Firebase',
  'Twilio',
  'Termii',
  'WhatsApp',
  'Microsoft',
  'Google Workspace',
  'Other',
];

export const TIMELINE_OPTIONS = [
  'Immediately',
  'Within 1 month',
  '2–3 months',
  'Flexible',
  'Not sure',
];

export const BUDGET_OPTIONS = [
  'Under $2,000',
  '$2,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $20,000',
  'Above $20,000',
  'Need consultation',
];

export const MAX_FILES = 6;
export const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8MB per file
export const MAX_TOTAL_BYTES = 20 * 1024 * 1024; // 20MB combined

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type StepErrors = Record<string, string>;

export function validateContactStep(data: DiscoveryFormData): StepErrors {
  const errors: StepErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!data.email.trim()) errors.email = 'Email is required.';
  else if (!EMAIL_RE.test(data.email)) errors.email = 'Enter a valid email address.';
  if (!data.country.trim()) errors.country = 'Country is required.';
  return errors;
}

export function validateBusinessStep(data: DiscoveryFormData): StepErrors {
  const errors: StepErrors = {};
  if (!data.businessDescription.trim()) errors.businessDescription = 'Tell me briefly what your business does.';
  return errors;
}

export function validateProjectTypeStep(data: DiscoveryFormData): StepErrors {
  const errors: StepErrors = {};
  if (data.projectTypes.length === 0) errors.projectTypes = 'Select at least one project type.';
  return errors;
}

export function validateGoalsStep(data: DiscoveryFormData): StepErrors {
  const errors: StepErrors = {};
  if (!data.businessOutcome.trim()) errors.businessOutcome = 'Describe the business outcome you’re after.';
  return errors;
}

export function validateTimelineBudgetStep(data: DiscoveryFormData): StepErrors {
  const errors: StepErrors = {};
  if (!data.timeline.trim()) errors.timeline = 'Select a timeline.';
  if (!data.budget.trim()) errors.budget = 'Select a budget range.';
  return errors;
}

export function isLogisticsProject(data: DiscoveryFormData): boolean {
  return data.projectTypes.includes('Logistics Platform');
}

export interface SummaryRow {
  label: string;
  value: string;
}

export interface SummarySection {
  id: string;
  title: string;
  rows: SummaryRow[];
}

const listOrDash = (arr: string[]) => (arr.length ? arr.join(', ') : '—');
const textOrDash = (v: string) => (v.trim() ? v.trim() : '—');

export interface FileMeta {
  name: string;
  category: string;
  size: number;
}

export function getSummarySections(data: DiscoveryFormData, files: FileMeta[] = []): SummarySection[] {
  const sections: SummarySection[] = [
    {
      id: 'contact',
      title: 'Contact Information',
      rows: [
        { label: 'Full Name', value: textOrDash(data.fullName) },
        { label: 'Company', value: textOrDash(data.companyName) },
        { label: 'Position', value: textOrDash(data.position) },
        { label: 'Email', value: textOrDash(data.email) },
        { label: 'Phone', value: textOrDash(data.phone) },
        { label: 'Website', value: textOrDash(data.website) },
        { label: 'Country', value: textOrDash(data.country) },
      ],
    },
    {
      id: 'business',
      title: 'Business Information',
      rows: [
        { label: 'What the business does', value: textOrDash(data.businessDescription) },
        { label: 'Customers', value: textOrDash(data.customers) },
        { label: 'Business model', value: textOrDash(data.businessModel) },
        { label: 'Problem being solved', value: textOrDash(data.problemSolving) },
      ],
    },
    {
      id: 'project-type',
      title: 'Project Type',
      rows: [
        { label: 'Selected types', value: listOrDash(data.projectTypes) },
        ...(data.projectTypes.includes('Other')
          ? [{ label: 'Other, specify', value: textOrDash(data.projectTypeOther) }]
          : []),
      ],
    },
    {
      id: 'current-situation',
      title: 'Current Situation',
      rows: [
        { label: 'Already in place', value: listOrDash(data.currentSituation) },
        ...(data.currentSituation.includes('Website')
          ? [{ label: 'Current website', value: textOrDash(data.currentWebsiteUrl) }]
          : []),
        ...(data.currentSituation.includes('Mobile App')
          ? [{ label: 'App notes', value: textOrDash(data.currentAppNotes) }]
          : []),
        ...(data.currentSituation.includes('Backend')
          ? [{ label: 'Backend notes', value: textOrDash(data.currentBackendNotes) }]
          : []),
        ...(data.currentSituation.includes('UI Design')
          ? [{ label: 'Design notes', value: textOrDash(data.currentDesignNotes) }]
          : []),
        ...(data.currentSituation.includes('Existing Developers')
          ? [{ label: 'Team notes', value: textOrDash(data.currentTeamNotes) }]
          : []),
        ...(data.currentSituation.includes('Existing Database')
          ? [{ label: 'Database notes', value: textOrDash(data.currentDatabaseNotes) }]
          : []),
      ],
    },
    {
      id: 'goals',
      title: 'Project Goals',
      rows: [
        { label: 'Business outcome', value: textOrDash(data.businessOutcome) },
        { label: 'Problem to solve', value: textOrDash(data.problemToSolve) },
        { label: 'How success is measured', value: textOrDash(data.successMeasure) },
      ],
    },
    {
      id: 'features',
      title: 'Required Features',
      rows: [
        { label: 'Selected features', value: listOrDash(data.features) },
        ...(data.features.includes('Custom Feature')
          ? [{ label: 'Custom feature, specify', value: textOrDash(data.featureOther) }]
          : []),
      ],
    },
  ];

  if (isLogisticsProject(data)) {
    sections.push({
      id: 'logistics',
      title: 'Logistics Platform Details',
      rows: [
        { label: 'Portals needed', value: listOrDash(data.logisticsPortals) },
        { label: 'Workflow requirements', value: listOrDash(data.logisticsWorkflow) },
        { label: 'Pricing model', value: textOrDash(data.logisticsPricingModel) },
        { label: 'Custom workflow', value: textOrDash(data.logisticsCustomWorkflow) },
      ],
    });
  }

  sections.push(
    {
      id: 'assets',
      title: 'Existing Assets',
      rows: files.length
        ? files.map(f => ({ label: f.category, value: f.name }))
        : [{ label: 'Files attached', value: 'None' }],
    },
    {
      id: 'integrations',
      title: 'Third-party Integrations',
      rows: [
        { label: 'Selected integrations', value: listOrDash(data.integrations) },
        ...(data.integrations.includes('Other')
          ? [{ label: 'Other, specify', value: textOrDash(data.integrationOther) }]
          : []),
      ],
    },
    {
      id: 'timeline-budget',
      title: 'Timeline & Budget',
      rows: [
        { label: 'Timeline', value: textOrDash(data.timeline) },
        { label: 'Budget', value: textOrDash(data.budget) },
        { label: 'Additional notes', value: textOrDash(data.additionalNotes) },
      ],
    }
  );

  return sections;
}

export function buildEmailBody(data: DiscoveryFormData, files: FileMeta[] = []): string {
  const sections = getSummarySections(data, files);
  return sections
    .map(section => {
      const rows = section.rows.map(r => `  ${r.label}: ${r.value}`).join('\n');
      return `${section.title}\n${'-'.repeat(section.title.length)}\n${rows}`;
    })
    .join('\n\n');
}
