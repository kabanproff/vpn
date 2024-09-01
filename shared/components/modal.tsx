'use client';
import React from 'react';
import { cn } from '../lib/utils';
import Image from 'next/image';
import { prefix } from '../lib/prefix';
import { useRouter } from 'next/navigation';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<Props> = ({ className, children }) => {
  const router = useRouter();
  return (
    <div
      className="w-full px-4 lg:px-0 h-[100vh] flex fixed bg-white
    top-0 left-0"
    >
      <div
        className={cn(
          'modal max-w-[892px] w-full m-auto min-h-[78vh] lg:min-h-[75vh]',
          className,
        )}
      >
        <div className="relative h-[35px] lg:h-8">
          <button
            className="block ml-auto mr-[4px] mb-6"
            onClick={() => router.back()}
          >
            <Image
              src={`${prefix}/close.svg`}
              alt="Close"
              width={14}
              height={14}
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
