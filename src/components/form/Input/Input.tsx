'use client';

import { useForm } from 'react-hook-form';
import { InputProps } from './Input.props';

export const Input: React.FC<InputProps> = ({ name, type, placeholder }) => {
  const { register } = useForm();
  return (
    <label className="flex flex-col gap-2 text-base font-medium leading-[160%] text-grey-80">
      {name}
      <input
        className="rounded-2xl border border-grey-60 p-3.5 text-sm font-normal text-grey-60"
        placeholder={placeholder}
        type={type}
        {...register(`${name}`)}
      />
    </label>
  );
};
