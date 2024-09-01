import React from 'react';
import { cn } from '../../lib/utils';
import { AdvantagesItem } from './advantages-item';

interface Props {
  className?: string;
}

const advantages = [
  {
    imgUrl: '/eye.svg',
    title: 'Unlimited access to content',
    description:
      "Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!",
  },
  {
    imgUrl: '/rocket.svg',
    title: 'Flashing connecting speed',
    description:
      'VPN Lumos offers unlimited bandwidth for faster loading and no buffering!',
  },
  {
    imgUrl: '/location2.svg',
    title: 'Hide your location',
    description:
      'Get your own unique IP for added security and access to restricted sites, apps, and services!',
  },
  {
    imgUrl: '/blocked.svg',
    title: 'Bypass blocked sites',
    description: 'Access any website safely and anonymously!',
  },
];

export const Advantages: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'advantages lg:grid-cols-2 grid gap-x-7 lg:mx-[6px]',
        className,
      )}
    >
      {advantages.map((advantage, ind) => (
        <AdvantagesItem
          key={advantage.title}
          {...advantage}
          className={ind < 2 ? 'border-t-grey border-t' : ind > 1 ? 'pb-4' : ''}
        />
      ))}
    </div>
  );
};
