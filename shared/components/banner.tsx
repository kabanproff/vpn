import React from 'react';
import { Title } from './title';
import { cn } from '../lib/utils';
import Image from 'next/image';
import { Button } from './button';
import { DescriptionsBlock } from './descriptions/descriptions-block';

interface Props {
  className?: string;
}

export const Banner: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('pt-[75px] pb-[73px]', className)} id="FIRSTPAGE">
      <Title
        tag="h1"
        sz="lg"
        className="text-center max-w-[396px] m-auto -mb-[8px]"
      >
        Access <span className="text-primary">everything securely</span> with
        <div>VPN</div>
      </Title>
      <Image
        src="/banner.png"
        alt="Banner"
        width={541}
        height={210}
        className="m-auto mb-[15px] relative left-4"
      />
      <Button
        className="text-two max-w-[396px] m-auto mb-6 font-bold font-poppins"
        rounded={'bt'}
        variant="secondary"
        size="lg"
        href="/#CHOOSE"
      >
        Get VPN
      </Button>

      <Image
        src="/30m.png"
        alt="30m"
        width={136}
        height={42}
        className="m-auto mb-6"
      />
      <DescriptionsBlock className="mb-6" />
      <Title
        tag="div"
        sz="sb"
        className=" pl-[5px] text-center -tracking-[0.2px]"
      >
        VPN-your <span className="text-primary">ultimate</span> solution for a
        private and secure online experience!
      </Title>
    </div>
  );
};
