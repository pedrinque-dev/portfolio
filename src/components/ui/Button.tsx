import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border border-brand bg-brand text-white hover:border-brand-bright hover:bg-brand-bright hover:shadow-brand',
  outline:
    'border border-border bg-transparent text-text hover:border-border-brand hover:text-brand',
  ghost:
    'border border-border bg-bg-card text-text-muted hover:border-border-brand hover:bg-brand-dim hover:text-text',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'rounded-md px-3.5 py-2 text-xs',
  md: 'rounded-full px-6 py-2.5 text-sm',
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center gap-2 font-body font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${sizeClasses[size]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
