import React from 'react';
import { DescriptionsItem } from './descriptions-item';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}
const img1 = {
  imgUrl: '/location.svg',
  width: 25,
  height: 24,
};
const img2 = {
  imgUrl: '/hierarchy-square.svg',
  width: 25,
  height: 24,
};

export const DescriptionsBlock: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'descriptions-block shadow-descr rounded-bt h-20 flex items-center justify-center lg:pr-[5px] pl-[10px] lg:pl-0',
        className,
      )}
    >
      <DescriptionsItem
        className="relative -left-3 lg:left-0"
        image={img1}
        title="50+"
        description="Locations"
      />
      <div className="draw w-[2px] lg:w-[3px] h-8 bg-grey"></div>
      <DescriptionsItem image={img2} title="1000+" description="Servers" />
    </div>
  );
};
