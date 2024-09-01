import { prefix } from '@/shared/lib/prefix';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
  image: {
    imgUrl: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
}

export const DescriptionsItem: React.FC<Props> = ({
  className,
  image,
  title,
  description,
}) => {
  return (
    <div
      className={cn(
        'description__item flex flex-grow lg:flex-grow-0 justify-center lg:pl-[104px] lg:pr-[101px]',
        className,
      )}
    >
      <Image
        src={prefix + image.imgUrl}
        alt={description}
        width={image.width}
        height={image.height}
        className="mr-[9px]"
      />
      <div>
        <div className="font-bold text-two tracking-[1px]">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
};
