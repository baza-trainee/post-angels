'use client';

import cn from 'classnames';
import { Controller, useFormContext } from 'react-hook-form';

import { RadiobuttonProps } from './Radiobutton.props';
import { ICONS } from '@/components/icons/icons.const';

export const Radiobutton: React.FC<RadiobuttonProps> = ({
  name,
  title,
  variantFontWeight = 'normal',
  options,
  className,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <label
          className={cn('relative flex flex-col gap-2 text-base leading-[160%] text-grey-80', {
            ['font-regular']: variantFontWeight == 'normal',
            ['font-medium']: variantFontWeight == 'medium',
          })}
        >
          {title}
          <div className={cn('flex flex-row gap-[33px]', className)}>
            {options.map(({ name, value, id }) => (
              <label key={id} className="flex flex-row gap-[14px]">
                <input
                  name={name}
                  value={value}
                  className="hidden"
                  type="radio"
                  {...field}
                  id={id}
                  checked={field.value === value}
                  onChange={() => {
                    field.onChange(value);
                  }}
                />
                <div>
                  {field.value === value ? (
                    <ICONS.CHECK_TRUE className="h-6 w-6" />
                  ) : (
                    <ICONS.CHECK_FALSE className="h-6 w-6" />
                  )}
                </div>
                <p>{value}</p>
              </label>
            ))}
          </div>
          {fieldState.error && (
            <p className="absolute w-full bottom-[-26px] text-[13px] font-normal text-error">
              {fieldState.error.message}
            </p>
          )}
        </label>
      )}
    ></Controller>
  );
};
