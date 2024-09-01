'use client';
import Image from 'next/image';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { prefix } from '../lib/prefix';
import { cn } from '../lib/utils';
import { User } from '../store/users';
import { Button } from './button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
  className?: string;
  user: User;
}

const schema = yup
  .object({
    email: yup
      .string()
      .matches(
        /^[A-Z0-9!._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        'Invalid email format, need to: text@text.com',
      )
      .required(),
  })
  .required();

export const Form: React.FC<Props> = ({ className, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = data =>
    console.log('onSubmit', data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('form', className)}>
      <div className="text-one font-poppins font-bold mb-8 uppercase">
        Your name
      </div>
      <div className="font-poppins text-sb mb-[31px] lg:mb-[34px]">
        {user.name}
      </div>
      <input
        {...register('email')}
        className={cn(
          'block text-sb w-full mb-[10px] text-grey font-medium border pt-[17px] lg:pt-[13px] pb-[11px] lg:pb-[14px] px-4 rounded-bt focus:outline-0',
          errors.email ? 'border-red-500' : 'border-grey',
        )}
        placeholder="Enter your email"
        onInput={() => {
          console.log('email', getValues('email'));
        }}
      />
      <p
        className={cn(
          'text-red-500 text-[13px] transition-all duration-500 ease-in-out',
          errors.email ? 'h-6 -mt-3 mb-3 opacity-1' : 'h-0 opacity-0',
        )}
      >
        {errors?.email?.message}
      </p>

      <div className="text-grey text-[13px] leading-[18px] mb-[38px] pl-[24px] relative">
        <Image
          src={prefix + '/lock.svg'}
          alt="lock"
          width={16}
          height={16}
          className="top-[8px] lg:-top-[4px] absolute left-0"
        ></Image>
        Your information is 100% secure. We don’t share your personal
        information.
      </div>

      <Button
        variant="secondary"
        type="submit"
        className="text-[24px] leading-8 mb-6 font-bold font-poppins w-full pt-4 pb-4 pl-[27px]"
      >
        Continue
      </Button>
    </form>
  );
};
