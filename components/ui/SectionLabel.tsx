interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px w-10 bg-gold flex-shrink-0" />
      <span
        className={`text-xs tracking-[0.3em] uppercase font-medium ${
          light ? 'text-gold' : 'text-gold'
        }`}
      >
        {children}
      </span>
    </div>
  );
}
