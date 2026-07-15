import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  external = false,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-medium tracking-wide transition-all duration-200 cursor-pointer';
  const sizes = {
    sm: 'text-sm px-5 py-2.5',
    md: 'text-sm px-7 py-3.5',
    lg: 'text-base px-8 py-4',
  };
  const variants = {
    primary:
      'bg-gold text-paper hover:bg-gold-light',
    outline:
      'border border-current text-ink dark:text-paper hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink',
    ghost:
      'text-smoke hover:text-ink dark:hover:text-paper underline-offset-4 hover:underline',
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};
    return (
      <Link href={href} className={cls} {...externalProps}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
