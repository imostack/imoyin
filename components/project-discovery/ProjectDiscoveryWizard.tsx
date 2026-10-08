'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import {
  INITIAL_DISCOVERY_DATA,
  isLogisticsProject,
  validateNeedStep,
  validateProjectStep,
  validateTimelineBudgetStep,
  validateContactStep,
  type DiscoveryFormData,
  type StepErrors,
} from '@/lib/project-discovery';
import { ProgressBar } from './ProgressBar';
import { SuccessScreen } from './SuccessScreen';
import type { UploadedFile } from './FileDropzone';
import { NeedStep } from './steps/NeedStep';
import { ProjectStep } from './steps/ProjectStep';
import { LogisticsStep } from './steps/LogisticsStep';
import { TimelineBudgetStep } from './steps/TimelineBudgetStep';
import { ContactStep } from './steps/ContactStep';
import { ReviewStep } from './steps/ReviewStep';

// v2: the form was restructured, so v1 drafts no longer map onto it
const DRAFT_KEY = 'project-discovery-draft-v2';
const LEGACY_DRAFT_KEY = 'project-discovery-draft-v1';

interface StepMeta {
  id: string;
  label: string;
  isVisible?: (data: DiscoveryFormData) => boolean;
  validate?: (data: DiscoveryFormData) => StepErrors;
}

const STEP_META: StepMeta[] = [
  { id: 'need', label: 'What you need', validate: validateNeedStep },
  { id: 'project', label: 'Your project', validate: validateProjectStep },
  { id: 'logistics', label: 'Logistics', isVisible: isLogisticsProject },
  { id: 'timeline-budget', label: 'Timeline & budget', validate: validateTimelineBudgetStep },
  { id: 'contact', label: 'Your details', validate: validateContactStep },
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
  const stepTopRef = useRef<HTMLFormElement>(null);
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
    localStorage.removeItem(LEGACY_DRAFT_KEY);
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

  // Take the user straight to the first thing that needs fixing
  useEffect(() => {
    if (Object.keys(errors).length === 0) return;
    const field = stepTopRef.current?.querySelector<HTMLElement>('[data-invalid="true"]');
    if (!field) return;
    field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    field.querySelector<HTMLElement>('input, textarea, button')?.focus({ preventScroll: true });
  }, [errors]);

  const update = useCallback(
    <K extends keyof DiscoveryFormData>(key: K, value: DiscoveryFormData[K]) => {
      setData(prev => ({ ...prev, [key]: value }));
      // Clear a field's error as soon as the user changes it
      setErrors(prev => {
        if (!(key in prev)) return prev;
        const rest = { ...prev };
        delete rest[key];
        return rest;
      });
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
    // A real form so Enter in a single-line field moves on (or sends, on Review)
    <form
      ref={stepTopRef}
      noValidate
      onSubmit={e => {
        e.preventDefault();
        if (!isReview) goNext();
        else if (status !== 'submitting') void handleSubmit();
      }}
    >
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
        {current.id === 'need' && <NeedStep data={data} update={update} errors={errors} />}
        {current.id === 'project' && (
          <ProjectStep
            data={data}
            update={update}
            errors={errors}
            files={files}
            onFilesChange={setFiles}
          />
        )}
        {current.id === 'logistics' && <LogisticsStep data={data} update={update} errors={errors} />}
        {current.id === 'timeline-budget' && (
          <TimelineBudgetStep data={data} update={update} errors={errors} />
        )}
        {current.id === 'contact' && <ContactStep data={data} update={update} errors={errors} />}
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
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center gap-3 bg-amber text-canvas text-sm font-medium px-8 py-4 hover:opacity-90 transition-opacity group disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending…' : 'Send brief'}
            <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        ) : (
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-7 py-3.5 hover:opacity-90 transition-opacity group"
          >
            Continue
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        )}
      </div>
    </form>
  );
}
