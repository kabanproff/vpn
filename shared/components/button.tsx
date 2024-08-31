import React, { Children, useMemo } from 'react';
import { cn } from '../lib/utils';
import Link from 'next/link';
import { prefix } from '../lib/prefix';

interface Props {
  className?: string;
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  rounded?: 'hd' | 'bt';
  size?: 'sm' | 'lg';
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const buttonVariants = {
  primary: 'bg-blue',
  secondary: 'bg-orange',
} as const;

const buttonRounded = {
  bt: 'rounded-bt',
  hd: 'rounded-hd',
} as const;

const buttonSizes = {
  sm: 'font-roboto font-bold text-sm',
  lg: 'min-w-[396px] min-h-[64px]',
} as const;

export const Button: React.FC<Props> = ({
  className,
  children,
  variant,
  rounded = 'bt',
  size = 'sm',
  href = '',
  disabled = false,
  type,
  ...rest
}) => {
  const Wrapper = href[1] === '#' ? 'a' : disabled || !href ? 'button' : Link;

  const hrefWithPrefix = useMemo(() => {
    if (!href) return '';
    return prefix + href;
  }, [href]);

  // TODO перевёл на обычные ссылки т.к. гит релодится с хэшем
  return (
    <Wrapper
      className={cn(
        buttonVariants[variant],
        buttonSizes[size],
        buttonRounded[rounded],
        ' px-[26px] py-[11px] flex items-center justify-center text-white',
        disabled && 'opacity-50 cursor-not-allowed user-select-none',
        className,
      )}
      disabled={disabled}
      href={hrefWithPrefix}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};
