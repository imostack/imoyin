'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import {
  INITIAL_DISCOVERY_DATA,
  isLogisticsProject,
  validateContactStep,
  validateBusinessStep,
  validateProjectTypeStep,
  validateGoalsStep,
  validateTimelineBudgetStep,
  type DiscoveryFormData,
  type StepErrors,
} from '@/lib/project-discovery';
import { ProgressBar } from './ProgressBar';
import { SuccessScreen } from './SuccessScreen';
import type { UploadedFile } from './FileDropzone';
import { ContactStep } from './steps/ContactStep';
import { BusinessStep } from './steps/BusinessStep';
import { ProjectTypeStep } from './steps/ProjectTypeStep';
import { CurrentSituationStep } from './steps/CurrentSituationStep';
import { GoalsStep } from './steps/GoalsStep';
import { FeaturesStep } from './steps/FeaturesStep';
import { LogisticsStep } from './steps/LogisticsStep';
import { AssetsStep } from './steps/AssetsStep';
import { IntegrationsStep } from './steps/IntegrationsStep';
import { TimelineBudgetStep } from './steps/TimelineBudgetStep';
import { ReviewStep } from './steps/ReviewStep';

const DRAFT_KEY = 'project-discovery-draft-v1';

interface StepMeta {
  id: string;
  label: string;
  isVisible?: (data: DiscoveryFormData) => boolean;
  validate?: (data: DiscoveryFormData) => StepErrors;
}

const STEP_META: StepMeta[] = [
  { id: 'contact', label: 'Contact', validate: validateContactStep },
  { id: 'business', label: 'Business', validate: validateBusinessStep },
  { id: 'project-type', label: 'Project Type', validate: validateProjectTypeStep },
  { id: 'current-situation', label: 'Current Situation' },
  { id: 'goals', label: 'Goals', validate: validateGoalsStep },
  { id: 'features', label: 'Features' },
  { id: 'logistics', label: 'Logistics', isVisible: isLogisticsProject },
  { id: 'assets', label: 'Assets' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'timeline-budget', label: 'Timeline & Budget', validate: validateTimelineBudgetStep },
  { id: 'review', label: 'Review' },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ProjectDiscoveryWizard() {
  const [data, setData] = useState<DiscoveryFormData>(INITIAL_DISCOVERY_DATA);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [errors, setErrors] = useState<StepErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [hydrated, setHydrated] = useState(false);
  const [visible, setVisible] = useState(true);
  const stepTopRef = useRef<HTMLDivElement>(null);
  const isFirstStepRender = useRef(true);

  const visibleSteps = useMemo(
    () => STEP_META.filter(s => !s.isVisible || s.isVisible(data)),
    [data]
  );
  const safeIndex = Math.min(stepIndex, visibleSteps.length - 1);

  // Restore draft on mount — gated by `hydrated` so the pre-restore render
  // (empty state) matches the server-rendered markup and avoids a hydration mismatch.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (parsed?.data) setData(prev => ({ ...prev, ...parsed.data }));
        if (typeof parsed?.stepIndex === 'number') setStepIndex(parsed.stepIndex);
      }
    } catch {
      // ignore malformed draft
    }
    setHydrated(true);
  }, []);

  // Autosave (debounced)
  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ data, stepIndex }));
    }, 400);
    return () => clearTimeout(handle);
  }, [data, stepIndex, hydrated]);

  // Step transition animation
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(false);
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [safeIndex]);

  // Scroll to the top of the step (not the page) whenever the step changes,
  // so a short step after a long one doesn't leave the user stranded mid-page.
  useEffect(() => {
    if (isFirstStepRender.current) {
      isFirstStepRender.current = false;
      return;
    }
    const el = stepTopRef.current;
    if (!el) return;
    const nav = document.querySelector('header');
    const offset = (nav?.getBoundingClientRect().height ?? 64) + 24;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [safeIndex]);

  const update = useCallback(
    <K extends keyof DiscoveryFormData>(key: K, value: DiscoveryFormData[K]) => {
      setData(prev => ({ ...prev, [key]: value }));
    },
    []
  );

  const current = visibleSteps[safeIndex];

  const goToStep = (id: string) => {
    const idx = visibleSteps.findIndex(s => s.id === id);
    if (idx !== -1) {
      setErrors({});
      setStepIndex(idx);
    }
  };

  const goNext = () => {
    const stepErrors = current?.validate?.(data) ?? {};
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStepIndex(i => Math.min(i + 1, visibleSteps.length - 1));
  };

  const goBack = () => {
    setErrors({});
    setStepIndex(i => Math.max(i - 1, 0));
  };

  const handleStartOver = () => {
    if (!window.confirm('Clear everything you’ve entered and start over?')) return;
    localStorage.removeItem(DRAFT_KEY);
    setData(INITIAL_DISCOVERY_DATA);
    setFiles([]);
    setStepIndex(0);
    setErrors({});
  };

  const handleSubmit = async () => {
    setStatus('submitting');
    setErrorMsg('');
    try {
      const form = new FormData();
      form.append('payload', JSON.stringify(data));
      files.forEach(f => form.append('files', f.file, f.file.name));
      form.append('fileCategories', JSON.stringify(files.map(f => f.category)));

      const res = await fetch('/api/project-discovery', { method: 'POST', body: form });
      const result = await res.json();

      if (!res.ok) {
        setErrorMsg(result.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      localStorage.removeItem(DRAFT_KEY);
      setStatus('success');
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <SuccessScreen name={data.fullName} />;
  }

  if (!hydrated || !current) return null;

  const isFirst = safeIndex === 0;
  const isReview = current.id === 'review';

  return (
    <div ref={stepTopRef}>
      {/* Honeypot */}
      <input
        type="text"
        value={data._trap}
        onChange={e => update('_trap', e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />

      <div className="flex items-center justify-between gap-4 mb-10">
        <div className="flex-1">
          <ProgressBar current={safeIndex + 1} total={visibleSteps.length} label={current.label} />
        </div>
        <button
          type="button"
          onClick={handleStartOver}
          className="font-code text-[11px] text-faint hover:text-smoke transition-colors flex-shrink-0"
        >
          Start over
        </button>
      </div>

      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
        }}
      >
        {current.id === 'contact' && <ContactStep data={data} update={update} errors={errors} />}
        {current.id === 'business' && <BusinessStep data={data} update={update} errors={errors} />}
        {current.id === 'project-type' && (
          <ProjectTypeStep data={data} update={update} errors={errors} />
        )}
        {current.id === 'current-situation' && (
          <CurrentSituationStep data={data} update={update} errors={errors} />
        )}
        {current.id === 'goals' && <GoalsStep data={data} update={update} errors={errors} />}
        {current.id === 'features' && <FeaturesStep data={data} update={update} errors={errors} />}
        {current.id === 'logistics' && <LogisticsStep data={data} update={update} errors={errors} />}
        {current.id === 'assets' && <AssetsStep files={files} onFilesChange={setFiles} />}
        {current.id === 'integrations' && (
          <IntegrationsStep data={data} update={update} errors={errors} />
        )}
        {current.id === 'timeline-budget' && (
          <TimelineBudgetStep data={data} update={update} errors={errors} />
        )}
        {isReview && (
          <ReviewStep data={data} files={files} onEditStep={goToStep} errorMsg={errorMsg} />
        )}
      </div>

      <div className="flex items-center justify-between gap-4 mt-12 pt-8 border-t border-rim">
        <button
          type="button"
          onClick={goBack}
          disabled={isFirst}
          className="inline-flex items-center gap-2 text-sm text-smoke hover:text-fog transition-colors disabled:opacity-0 disabled:pointer-events-none"
        >
          <ArrowLeft size={14} />
          Back
        </button>

        {isReview ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === 'submitting'}
            className="inline-flex items-center gap-3 bg-amber text-canvas text-sm font-medium px-8 py-4 hover:opacity-90 transition-opacity group disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Submitting…' : 'Submit Questionnaire'}
            <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-7 py-3.5 hover:opacity-90 transition-opacity group"
          >
            Continue
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        )}
      </div>
    </div>
  );
}
