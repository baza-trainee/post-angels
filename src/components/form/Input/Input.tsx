'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { InputProps } from './Input.props';

export const Input: React.FC<InputProps> = ({ name, title, type, placeholder }) => {
  const { control } = useFormContext();

  return (
    <Controller
      defaultValue=""
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <label className="flex flex-col gap-2 text-base font-medium leading-[160%] text-grey-80">
          {title}
          <input
            className="rounded-2xl border border-grey-60 p-3.5 text-sm font-normal text-grey-60"
            placeholder={placeholder}
            type={type}
            {...field}
          />
          {fieldState.error && (
            <p className="text-sm font-normal text-[#E50E0E]">{fieldState.error.message}</p>
          )}
        </label>
      )}
    ></Controller>
  );
};
