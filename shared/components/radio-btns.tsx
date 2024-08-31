'use client';
import React, { useContext, useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { User } from '../store/users';

interface Props {
  className?: string;
  users: User[];
  checked: User;
  setChecked: (value: User) => void;
}

export const RadioBtns: React.FC<Props> = ({
  className,
  users,
  checked,
  setChecked,
}) => {
  if (!users) return <div>Loading...</div>;

  return (
    <div className={cn('radio-btns', className)} id="CHOOSE">
      <div className="radio-btns__title uppercase font-poppins font-bold text-one mb-[15px]">
        Choose <span className="text-primary">your NAme</span>
      </div>
      <div className="radio-btns__list">
        {users.length > 0 &&
          users.map((item, index) => (
            <label
              key={item.email}
              className="radio-btns__item shadow-descr rounded-bt min-h-[88px] mb-4 cursor-pointer flex items-center gap-2 px-3"
              onClick={() => setChecked(item)}
            >
              <input
                type="radio"
                id={`radio-${index}`}
                name="name"
                className="hidden"
                defaultChecked={item.name === checked.name}
              />
              <svg
                className={`radio-btns__check ${item.name === checked.name ? 'text-orange' : 'text-transparent'}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="#646464"
                  strokeWidth="2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.3048 7.30452L10.8535 14.0593L7.69515 10.7524C7.30736 10.3464 6.67863 10.3464 6.29084 10.7524C5.90305 11.1584 5.90305 11.8167 6.29084 12.2227L10.8535 17L18.7092 8.77488C19.0969 8.36885 19.0969 7.71055 18.7092 7.30452C18.3214 6.89849 17.6926 6.89849 17.3048 7.30452Z"
                  fill="currentColor"
                />
              </svg>
              {item.name}
            </label>
          ))}
      </div>
    </div>
  );
};
