'use client';

import cn from 'classnames';
import { Controller, useFormContext } from 'react-hook-form';
import { InputProps } from './Input.props';
import ReactInputMask from 'react-input-mask';

export const Input: React.FC<InputProps> = ({ name, title, type, placeholder, className }) => {
  const { control } = useFormContext();

  return (
    <Controller
      defaultValue=""
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <label
          className={cn(
            'relative flex flex-col gap-2 font-eUkraine text-base font-medium leading-[160%] text-grey-80',
            className
          )}
        >
          {title}

          {name === 'phone' ? (
            <ReactInputMask
              mask="+3\8 099 999 99 99"
              maskChar=" "
              {...field}
              placeholder={placeholder}
              type={type}
              className={`rounded-2xl border border-grey-60 bg-transparent px-3.5 py-4 text-sm font-normal text-grey-80 outline-none focus:border-accent-hover focus:text-grey-100 ${
                fieldState.error
                  ? 'text-error placeholder:text-error'
                  : 'text-grey-60 placeholder:text-grey-60'
              }`}
            />
          ) : (
            <input
              className={`rounded-2xl border border-grey-60 bg-transparent px-3.5 py-4 text-sm font-normal text-grey-80 outline-none focus:border-accent-hover focus:text-grey-100 ${
                fieldState.error
                  ? 'text-error placeholder:text-error'
                  : 'text-grey-60 placeholder:text-grey-60'
              }`}
              placeholder={placeholder}
              type={type}
              {...field}
            />
          )}

          {fieldState.error && (
            <p className="absolute bottom-[-26px] font-eUkraine text-[13px] font-normal text-error">
              {fieldState.error.message}
            </p>
          )}
        </label>
      )}
    ></Controller>
  );
};
