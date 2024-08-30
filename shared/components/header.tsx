import React from 'react';
import { cn } from '../lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';
import { Button } from './button';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        className,
        'h-[76px] shadow-header sticky top-0 z-10 bg-white',
      )}
    >
      <Container className="flex items-center justify-between h-full px-[16px]">
        <Link href="/#FIRSTPAGE">
          <Image src="/logo.svg" alt="Logo" width={68} height={32} />
        </Link>
        <Button
          variant="primary"
          rounded={'hd'}
          href="/#CHOOSE"
          // className="text-white"
        >
          Get VPN
        </Button>
      </Container>
    </header>
  );
};
