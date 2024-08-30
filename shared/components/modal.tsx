import React from 'react';
import { cn } from '../lib/utils';
import Image from 'next/image';
import { prefix } from '../lib/prefix';

interface Props {
  className?: string;
  setIsOpen: (value: boolean) => void;
  checked: string;
}

export const Modal: React.FC<Props> = ({ className, setIsOpen, checked }) => {
  return (
    <div className={cn('modal max-w-[892px] m-auto', className)}>
      <div className="modal__close" onClick={() => setIsOpen(false)}>
        <Image src={`${prefix}/close.svg`} alt="Close" width={24} height={24} />
      </div>
      <div className="modal__title text-one font-poppins mb-8 uppercase">
        Your name
      </div>
      <div></div>
    </div>
  );
};
