'use client';

interface FieldLabelProps {
  label: string;
  htmlFor: string;
  required?: boolean;
}

function FieldLabel({ label, htmlFor, required }: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-code text-[11px] text-smoke mb-2 tracking-wide uppercase"
    >
      {label} {required && <span className="text-amber">*</span>}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="font-code text-[11px] text-red-400 mt-2">{message}</p>;
}

const inputClass =
  'w-full bg-transparent border px-4 py-3 text-sm text-fog placeholder:text-faint focus:outline-none transition-colors';

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
}: TextFieldProps) {
  return (
    <div>
      <FieldLabel label={label} htmlFor={name} required={required} />
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${inputClass} ${borderClass(error)}`}
      />
      <FieldError message={error} />
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
}

export function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  rows = 4,
  error,
}: TextAreaFieldProps) {
  return (
    <div>
      <FieldLabel label={label} htmlFor={name} required={required} />
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${inputClass} ${borderClass(error)} resize-none`}
      />
      <FieldError message={error} />
    </div>
  );
}

interface SelectGridProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (next: string[]) => void;
  multiple?: boolean;
  columns?: string;
  required?: boolean;
  error?: string;
}

export function SelectGrid({
  label,
  options,
  value,
  onChange,
  multiple = true,
  columns = 'sm:grid-cols-2 lg:grid-cols-3',
  required,
  error,
}: SelectGridProps) {
  const toggle = (opt: string) => {
    if (multiple) {
      onChange(value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt]);
    } else {
      onChange([opt]);
    }
  };

  return (
    <div>
      <p className="font-code text-[11px] text-smoke mb-3 tracking-wide uppercase">
        {label} {required && <span className="text-amber">*</span>}
      </p>
      <div className={`grid ${columns} gap-3`}>
        {options.map(opt => {
          const active = value.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggle(opt)}
              aria-pressed={active}
              className={`text-left border px-4 py-3 text-sm transition-colors duration-150 ${
                active
                  ? 'border-amber bg-amber/[0.08] text-fog'
                  : 'border-rim text-smoke hover:border-smoke/50 hover:text-fog'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <FieldError message={error} />
    </div>
  );
}

export function StepIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-code text-[11px] tracking-widest uppercase text-amber mb-3">{eyebrow}</p>
      <h2 className="font-display font-light text-fog text-3xl lg:text-4xl mb-3">{title}</h2>
      {description && (
        <p className="text-smoke text-sm leading-relaxed max-w-xl">{description}</p>
      )}
    </div>
  );
}
