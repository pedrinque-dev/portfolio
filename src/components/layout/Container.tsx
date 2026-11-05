import type { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-[min(1200px,92vw)] ${className}`}>
      {children}
    </div>
  );
}
