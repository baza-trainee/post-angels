'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { TextareaProps } from './Textarea.props';

export const Textarea: React.FC<TextareaProps> = ({ name, title, placeholder }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <label className="flex flex-col gap-2 text-base font-medium leading-[160%] text-grey-80">
          {title}
          <textarea
            className={`h-[366px] resize-none rounded-2xl border border-grey-60 px-3.5 py-4 text-sm font-normal outline-none focus:border-[#1A48ED] ${
              fieldState.error
                ? 'text-[#E50E0E] placeholder:text-[#E50E0E]'
                : 'text-grey-60 placeholder:text-grey-60'
            }`}
            placeholder={placeholder}
            {...field}
          />
          {fieldState.error && (
            <p className="text-sm font-normal text-[#E50E0E]">{fieldState.error.message}</p>
          )}
        </label>
      )}
    />
  );
};