import type { ReactNode } from 'react';

export interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`inline-block rounded-full border border-border-brand bg-brand-dim px-2.5 py-0.5 font-mono text-xs tracking-wide text-brand ${className}`}
    >
      {children}
    </span>
  );
}
