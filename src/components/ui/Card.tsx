import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
}

export function Card({
  children,
  interactive = false,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-bg-card shadow-card transition-all duration-300 ${
        interactive
          ? 'hover:-translate-y-1 hover:border-border-brand hover:shadow-hover'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
