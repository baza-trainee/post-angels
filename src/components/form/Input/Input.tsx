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
            className={`bg-transparent rounded-2xl border border-grey-60 px-3.5 py-4 text-sm font-normal  outline-none focus:border-accent-hover ${
              fieldState.error
                ? 'text-error placeholder:text-error'
                : 'text-grey-60 placeholder:text-grey-60'
            }`}
            placeholder={placeholder}
            type={type}
            {...field}
          />
          {fieldState.error && (
            <p className="text-sm font-normal text-error">{fieldState.error.message}</p>
          )}
        </label>
      )}
    ></Controller>
  );
};
