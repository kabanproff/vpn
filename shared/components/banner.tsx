import React from 'react';
import { Title } from './title';
import { cn } from '../lib/utils';
import Image from 'next/image';
import { Button } from './button';
import { DescriptionsBlock } from './descriptions/descriptions-block';
import { prefix } from '../lib/prefix';

interface Props {
  className?: string;
}

export const Banner: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'pt-[13px] lg:pt-[75px] pb-[38px] lg:pb-[73px]',
        className,
      )}
      id="FIRSTPAGE"
    >
      <Title
        tag="h1"
        sz="lg"
        className="text-center max-w-[396px] m-auto -mb-[10px] lg:-mb-[8px]"
      >
        Access <span className="text-primary">everything securely</span> with
        <div>VPN</div>
      </Title>
      <Image
        src={`${prefix}/banner.png`}
        alt="Banner"
        width={541}
        height={210}
        className="max-w-[541px] -translate-x-[47.2%] lg:translate-x-0 lg:m-auto mb-[18px] lg:mb-[15px] relative left-1/2 lg:left-4"
      />
      <Button
        className="pl-[31px] lg:pl-[26px] text-two max-w-[396px] m-auto mb-6 font-bold font-poppins"
        rounded={'bt'}
        variant="secondary"
        size="lg"
        href="/#CHOOSE"
      >
        Get VPN
      </Button>

      <Image
        src={`${prefix}/30m.png`}
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
