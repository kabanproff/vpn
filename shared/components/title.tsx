import React from 'react';
import { cn } from '../lib/utils';

interface Props {
  className?: string;
  children?: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  sz: 'one' | 'two' | 'lg' | 'sb';
}

const titleSize = {
  one: 'text-one',
  two: 'text-two',
  lg: 'text-lg',
  sb: 'text-sb',
};

export const Title: React.FC<Props> = ({
  className,
  children,
  tag: Wrapper = 'div',
  sz = 'lg',
  ...rest
}) => {
  return (
    <Wrapper
      className={cn(titleSize[sz], 'font-bold font-poppins', className)}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};
