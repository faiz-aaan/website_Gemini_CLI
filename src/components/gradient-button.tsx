import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type GradientButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  as?: 'a' | 'button';
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export function GradientButton({ href, children, className, as = 'a', onClick, type }: GradientButtonProps) {
  const commonProps = {
    className: cn(
      'group relative inline-flex items-center justify-center overflow-hidden rounded-lg font-semibold text-foreground transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-[#7868E6]',
      className
    ),
    onClick,
  };

  const content = (
    <>
      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#92B4F4] to-[#7868E6] p-0.5">
        <span className="block h-full w-full rounded-[calc(0.5rem-2px)] bg-background transition-colors duration-300 group-hover:bg-transparent" />
      </span>
      <span className="relative z-10">{children}</span>
    </>
  );

  if (as === 'button') {
    return (
      <button {...commonProps} type={type || 'button'}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href} {...commonProps}>
      {content}
    </Link>
  );
}
