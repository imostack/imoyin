export type BudgetCurrency = 'NGN' | 'USD';

export interface DiscoveryFormData {
  // What you need
  projectTypes: string[];
  projectTypeOther: string;
  projectSummary: string;

  // Your project
  businessOutcome: string;
  currentSituation: string[];
  currentWebsiteUrl: string;
  currentAppNotes: string;
  currentBackendNotes: string;
  currentDesignNotes: string;
  currentTeamNotes: string;
  currentDatabaseNotes: string;
  features: string[];
  featureOther: string;

  // Your project — optional extra detail
  businessDescription: string;
  integrations: string[];
  integrationOther: string;

  // Logistics platform (conditional)
  logisticsPortals: string[];
  logisticsWorkflow: string[];
  logisticsPricingModel: string;
  logisticsCustomWorkflow: string;

  // Timeline & budget
  timeline: string;
  budgetCurrency: BudgetCurrency;
  budget: string;
  additionalNotes: string;

  // Your details
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  country: string;

  // Honeypot
  _trap: string;
}

export const INITIAL_DISCOVERY_DATA: DiscoveryFormData = {
  projectTypes: [],
  projectTypeOther: '',
  projectSummary: '',

  businessOutcome: '',
  currentSituation: [],
  currentWebsiteUrl: '',
  currentAppNotes: '',
  currentBackendNotes: '',
  currentDesignNotes: '',
  currentTeamNotes: '',
  currentDatabaseNotes: '',
  features: [],
  featureOther: '',

  businessDescription: '',
  integrations: [],
  integrationOther: '',

  logisticsPortals: [],
  logisticsWorkflow: [],
  logisticsPricingModel: '',
  logisticsCustomWorkflow: '',

  timeline: '',
  budgetCurrency: 'NGN',
  budget: '',
  additionalNotes: '',

  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  country: '',

  _trap: '',
};

export const PROJECT_TYPE_OPTIONS = [
  'Website',
  'Web App',
  'Mobile App',
  'SaaS',
  'E-commerce',
  'Marketplace',
  'Logistics Platform',
  'ERP / CRM',
  'AI Solution',
  'Upgrade an existing product',
  'API Integration',
  'Internal Business Tool',
  'Other',
];

export const CURRENT_SITUATION_OPTIONS = [
  'Nothing yet',
  'Website',
  'Mobile App',
  'Backend',
  'UI Design',
  'Existing Developers',
  'Existing Database',
];

export const FEATURE_OPTIONS = [
  'User accounts',
  'Payments',
  'Dashboard',
  'Booking / Scheduling',
  'Maps / GPS',
  'Notifications',
  'Chat',
  'Reports & Analytics',
  'Document Upload',
  'KYC',
  'Inventory',
  'Workflow Automation',
  'Roles & Permissions',
  'Search',
  'AI Features',
  'Something else',
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
  'Paystack',
  'Flutterwave',
  'Stripe',
  'WhatsApp',
  'Google Maps',
  'Mapbox',
  'Firebase',
  'Twilio',
  'Termii',
  'Microsoft',
  'Google Workspace',
  'Other',
];

export const TIMELINE_OPTIONS = [
  'As soon as possible',
  'Within a month',
  'In 2–3 months',
  'Flexible',
];

const BUDGET_UNSURE = 'Not sure yet — let’s talk';

export const BUDGET_OPTIONS: Record<BudgetCurrency, string[]> = {
  NGN: ['Under ₦500k', '₦500k – ₦1.5M', '₦1.5M – ₦5M', '₦5M – ₦15M', 'Above ₦15M', BUDGET_UNSURE],
  USD: [
    'Under $2,000',
    '$2,000 – $5,000',
    '$5,000 – $10,000',
    '$10,000 – $20,000',
    'Above $20,000',
    BUDGET_UNSURE,
  ],
};

export const COUNTRY_SUGGESTIONS = [
  'Nigeria',
  'Ghana',
  'Kenya',
  'South Africa',
  'United Kingdom',
  'United States',
  'Canada',
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

export function validateNeedStep(data: DiscoveryFormData): StepErrors {
  const errors: StepErrors = {};
  if (data.projectTypes.length === 0) errors.projectTypes = 'Pick at least one — your best guess is fine.';
  return errors;
}

export function validateProjectStep(data: DiscoveryFormData): StepErrors {
  const errors: StepErrors = {};
  if (!data.businessOutcome.trim()) errors.businessOutcome = 'A sentence or two is enough.';
  return errors;
}

export function validateTimelineBudgetStep(data: DiscoveryFormData): StepErrors {
  const errors: StepErrors = {};
  if (!data.timeline.trim()) errors.timeline = 'Pick a timeline.';
  if (!data.budget.trim()) errors.budget = 'Pick a range — “Not sure yet” is fine.';
  return errors;
}

export function validateContactStep(data: DiscoveryFormData): StepErrors {
  const errors: StepErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'So I know who to reply to.';
  if (!data.email.trim()) errors.email = 'I’ll reply to this address.';
  else if (!EMAIL_RE.test(data.email.trim())) errors.email = 'That email doesn’t look right.';
  return errors;
}

export const ALL_VALIDATORS = [
  validateNeedStep,
  validateProjectStep,
  validateTimelineBudgetStep,
  validateContactStep,
];

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

const CURRENT_SITUATION_NOTES: [string, keyof DiscoveryFormData, string][] = [
  ['Website', 'currentWebsiteUrl', 'Current website'],
  ['Mobile App', 'currentAppNotes', 'App links / notes'],
  ['Backend', 'currentBackendNotes', 'Backend notes'],
  ['UI Design', 'currentDesignNotes', 'Design notes'],
  ['Existing Developers', 'currentTeamNotes', 'Team notes'],
  ['Existing Database', 'currentDatabaseNotes', 'Database notes'],
];

export function getSummarySections(data: DiscoveryFormData, files: FileMeta[] = []): SummarySection[] {
  const sections: SummarySection[] = [
    {
      id: 'need',
      title: 'What They Need',
      rows: [
        { label: 'Project type', value: listOrDash(data.projectTypes) },
        ...(data.projectTypes.includes('Other')
          ? [{ label: 'Other, specify', value: textOrDash(data.projectTypeOther) }]
          : []),
        { label: 'In a sentence', value: textOrDash(data.projectSummary) },
      ],
    },
    {
      id: 'project',
      title: 'Their Project',
      rows: [
        { label: 'What it should achieve', value: textOrDash(data.businessOutcome) },
        { label: 'Already in place', value: listOrDash(data.currentSituation) },
        ...CURRENT_SITUATION_NOTES.filter(([opt]) => data.currentSituation.includes(opt)).map(
          ([, key, label]) => ({ label, value: textOrDash(data[key] as string) })
        ),
        { label: 'Features', value: listOrDash(data.features) },
        ...(data.features.includes('Something else')
          ? [{ label: 'Other feature', value: textOrDash(data.featureOther) }]
          : []),
        { label: 'About the business', value: textOrDash(data.businessDescription) },
        { label: 'Integrations', value: listOrDash(data.integrations) },
        ...(data.integrations.includes('Other')
          ? [{ label: 'Other integration', value: textOrDash(data.integrationOther) }]
          : []),
        ...(files.length
          ? files.map(f => ({ label: `File · ${f.category}`, value: f.name }))
          : [{ label: 'Files', value: 'None' }]),
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
      id: 'timeline-budget',
      title: 'Timeline & Budget',
      rows: [
        { label: 'Timeline', value: textOrDash(data.timeline) },
        { label: 'Budget', value: textOrDash(data.budget) },
        { label: 'Anything else', value: textOrDash(data.additionalNotes) },
      ],
    },
    {
      id: 'contact',
      title: 'Contact Details',
      rows: [
        { label: 'Name', value: textOrDash(data.fullName) },
        { label: 'Email', value: textOrDash(data.email) },
        { label: 'Phone / WhatsApp', value: textOrDash(data.phone) },
        { label: 'Company', value: textOrDash(data.companyName) },
        { label: 'Country', value: textOrDash(data.country) },
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
