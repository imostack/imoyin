'use client';
import type { HTMLAttributes, ReactNode } from 'react';
import { Check } from 'lucide-react';

interface FieldLabelProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
}

function FieldLabel({ label, htmlFor, required, hint }: FieldLabelProps) {
  const Tag = htmlFor ? 'label' : 'p';
  return (
    <Tag
      {...(htmlFor ? { htmlFor } : {})}
      className="block font-code text-[11px] text-smoke mb-2 tracking-wide uppercase"
    >
      {label}{' '}
      {required ? (
        <span className="text-amber">*</span>
      ) : (
        <span className="normal-case tracking-normal text-faint">(optional)</span>
      )}
      {hint && <span className="block normal-case tracking-normal text-faint mt-1">{hint}</span>}
    </Tag>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="font-code text-[11px] text-red-400 mt-2">
      {message}
    </p>
  );
}

const inputClass =
  'w-full bg-transparent border px-4 py-3 text-base sm:text-sm text-fog placeholder:text-faint focus:outline-none transition-colors';

function borderClass(error?: string) {
  return error ? 'border-red-400/60' : 'border-rim focus:border-smoke/50';
}

interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  error?: string;
  hint?: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  suggestions?: string[];
}

export function TextField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = 'text',
  error,
  hint,
  autoComplete,
  inputMode,
  suggestions,
}: TextFieldProps) {
  const listId = suggestions ? `${name}-suggestions` : undefined;
  return (
    <div data-invalid={error ? 'true' : undefined}>
      <FieldLabel label={label} htmlFor={name} required={required} hint={hint} />
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        list={listId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${inputClass} ${borderClass(error)}`}
      />
      {suggestions && (
        <datalist id={listId}>
          {suggestions.map(s => (
            <option key={s} value={s} />
          ))}
        </datalist>
      )}
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
  hint?: string;
}

export function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  rows = 3,
  error,
  hint,
}: TextAreaFieldProps) {
  return (
    <div data-invalid={error ? 'true' : undefined}>
      <FieldLabel label={label} htmlFor={name} required={required} hint={hint} />
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${inputClass} ${borderClass(error)} resize-y min-h-[3rem]`}
      />
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}

interface ChoiceChipsProps {
  label: string;
  name: string;
  options: string[];
  value: string[];
  onChange: (next: string[]) => void;
  multiple?: boolean;
  required?: boolean;
  error?: string;
  hint?: string;
  // Selecting this option clears the others, and vice versa
  exclusiveOption?: string;
}

export function ChoiceChips({
  label,
  name,
  options,
  value,
  onChange,
  multiple = true,
  required,
  error,
  hint,
  exclusiveOption,
}: ChoiceChipsProps) {
  const toggle = (opt: string) => {
    if (!multiple) {
      onChange([opt]);
      return;
    }
    if (value.includes(opt)) {
      onChange(value.filter(v => v !== opt));
    } else if (opt === exclusiveOption) {
      onChange([opt]);
    } else {
      onChange([...value.filter(v => v !== exclusiveOption), opt]);
    }
  };

  return (
    <div data-invalid={error ? 'true' : undefined}>
      <FieldLabel
        label={label}
        required={required}
        hint={hint ?? (multiple ? 'Tap all that apply.' : undefined)}
      />
      <div
        role="group"
        aria-label={label}
        aria-describedby={error ? `${name}-error` : undefined}
        className="flex flex-wrap gap-2"
      >
        {options.map(opt => {
          const active = value.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggle(opt)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 border px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                active
                  ? 'border-amber bg-amber/[0.08] text-fog'
                  : error
                    ? 'border-red-400/40 text-smoke hover:text-fog'
                    : 'border-rim text-smoke hover:border-smoke/50 hover:text-fog'
              }`}
            >
              {active && <Check size={13} className="text-amber -ml-0.5" />}
              {opt}
            </button>
          );
        })}
      </div>
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}

export function StepIntro({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <h2 className="font-display font-light text-fog text-3xl lg:text-4xl mb-3">{title}</h2>
      {description && (
        <p className="text-smoke text-sm leading-relaxed max-w-xl">{description}</p>
      )}
    </div>
  );
}

export function MoreDetail({
  summary,
  defaultOpen,
  children,
}: {
  summary: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  return (
    <details open={defaultOpen} className="group border border-rim">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 py-4 text-sm text-smoke hover:text-fog transition-colors [&::-webkit-details-marker]:hidden">
        <span>{summary}</span>
        <span className="font-code text-[11px] text-faint group-open:hidden">+ Add</span>
        <span className="font-code text-[11px] text-faint hidden group-open:inline">− Hide</span>
      </summary>
      <div className="px-5 pb-6 pt-2 space-y-8 border-t border-rim">{children}</div>
    </details>
  );
}
