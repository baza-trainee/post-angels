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
              <label key={id} className="flex flex-row gap-[14px] font-eUkraine">
                <input
                  className="hidden"
                  type="radio"
                  {...field}
                  checked={field.value === name}
                  onChange={() => {
                    field.onChange(name);
                  }}
                />
                <div>
                  {field.value === name ? (
                    <ICONS.CHECK_TRUE className="h-6 w-6 fill-accent-primary stroke-accent-primary" />
                  ) : (
                    <ICONS.CHECK_FALSE className="h-6 w-6 stroke-accent-primary" />
                  )}
                </div>
                <p>{value}</p>
              </label>
            ))}
          </div>
          {fieldState.error && (
            <p className="absolute bottom-[-26px] w-full font-eUkraine text-[13px] font-normal text-error">
              {fieldState.error.message}
            </p>
          )}
        </label>
      )}
    ></Controller>
  );
};
