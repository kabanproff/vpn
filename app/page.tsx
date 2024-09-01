'use client';
import { Advantages } from '@/shared/components/advantages/advantages';
import { Banner } from '@/shared/components/banner';
import { Button } from '@/shared/components/button';
import { RadioBtns } from '@/shared/components/radio-btns';
import { useUsers } from '@/shared/hooks/useUsers';

export default function Home() {
  const { users, checked, setChecked } = useUsers();

  return (
    <main className="max-w-[892px] m-auto px-4 lg:px-0">
      <Banner />
      <Advantages className="mb-[39px] lg:mb-[70px]" />
      <h3 className="text-center mb-[41px] lg:mb-[74px] text-two text-primary font-poppins font-bold ">
        Millions of people trust us!
      </h3>
      <RadioBtns users={users} checked={checked} setChecked={setChecked} />
      <Button
        className="text-two mb-6 font-bold font-poppins w-full"
        rounded={'bt'}
        variant="secondary"
        size="lg"
        disabled={!checked.name}
        href={'/user/' + checked.name}
      >
        Get VPN
      </Button>
    </main>
  );
}
