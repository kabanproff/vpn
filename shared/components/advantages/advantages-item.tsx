import { prefix } from '@/shared/lib/prefix';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
  title: string;
  imgUrl: string;
  description: string;
}

export const AdvantagesItem: React.FC<Props> = ({
  className,
  title,
  description,
  imgUrl,
}) => {
  return (
    <div
      className={cn(
        'advantages__item text-center border-b-grey border-b pt-4 pb-3 lg:pb-5',
        className,
      )}
    >
      <Image
        src={prefix + imgUrl}
        alt={title}
        width={104}
        height={52}
        className="m-auto mb-[18px] lg:mb-2"
      />
      <div className="div text-one font-bold uppercase">
        <div className="text-orange tracking-[1.3px]">
          {title.split(' ')[0]}
        </div>
        <div className="text-primary tracking-[0.7px] mb-2">
          {title.split(' ').slice(1).join(' ')}
        </div>
      </div>
      <div className="text-sb tracking-[0.2px] mb-[1px]">{description}</div>
    </div>
  );
};
